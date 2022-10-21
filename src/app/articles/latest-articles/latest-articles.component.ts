import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { latest } from './latest';
import { latestservice } from './latest.service';

@Component({
  selector: 'app-latest-articles',
  templateUrl: './latest-articles.component.html',
  styleUrls: ['./latest-articles.component.css']
})
export class LatestArticlesComponent implements OnInit {

  latest = new latest();
  users: latest[] = [];
  valid = true;
  @ViewChild('uname') usernameElement!: ElementRef;
  latestform!: FormGroup;
 
  constructor(private router: Router, private formBuilder: FormBuilder,
    private latestservice: latestservice, private renderer: Renderer2) {
}
ngOnInit() {
  // Makes a service call to fetch users data from the backend
  this.latestservice.getUsers().subscribe({next:users => this.users = users});
  this.latestform = this.formBuilder.group({
      userName: [this.latest.userName, Validators.required],
      password: [this.latest.password, Validators.required]
  })
}

  navbarCollapsed = true;

  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }

}


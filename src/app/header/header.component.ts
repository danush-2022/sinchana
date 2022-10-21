
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { header } from './header';
import { headerservice } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header = new header();
  users: header[] = [];
  valid = true;
  @ViewChild('uname') usernameElement!: ElementRef;
  headerform!: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder,
    private headerservice: headerservice, private renderer: Renderer2) {
}

ngOnInit() {
  // Makes a service call to fetch users data from the backend
  this.headerservice.getUsers().subscribe({next:users => this.users = users});
  this.headerform = this.formBuilder.group({
      userName: [this.header.userName, Validators.required],
      password: [this.header.password, Validators.required]
  })
}

  navbarCollapsed = true;

  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }

}

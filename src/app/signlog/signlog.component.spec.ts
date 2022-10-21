import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignlogComponent } from './signlog.component';

describe('SignlogComponent', () => {
  let component: SignlogComponent;
  let fixture: ComponentFixture<SignlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

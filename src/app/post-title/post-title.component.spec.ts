/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostTitleComponent } from './post-title.component';

describe('PostTitleComponent', () => {
  let component: PostTitleComponent;
  let fixture: ComponentFixture<PostTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

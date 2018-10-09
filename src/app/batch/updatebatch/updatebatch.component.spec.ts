import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebatchComponent } from './updatebatch.component';

describe('UpdatebatchComponent', () => {
  let component: UpdatebatchComponent;
  let fixture: ComponentFixture<UpdatebatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatebatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

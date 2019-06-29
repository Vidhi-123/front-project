import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StumailComponent } from './stumail.component';

describe('StumailComponent', () => {
  let component: StumailComponent;
  let fixture: ComponentFixture<StumailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StumailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StumailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

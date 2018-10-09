import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyworkComponent } from './dailywork.component';

describe('DailyworkComponent', () => {
  let component: DailyworkComponent;
  let fixture: ComponentFixture<DailyworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

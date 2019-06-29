import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmphomeComponent } from './tmphome.component';

describe('TmphomeComponent', () => {
  let component: TmphomeComponent;
  let fixture: ComponentFixture<TmphomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmphomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

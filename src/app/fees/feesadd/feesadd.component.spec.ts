import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesaddComponent } from './feesadd.component';

describe('FeesaddComponent', () => {
  let component: FeesaddComponent;
  let fixture: ComponentFixture<FeesaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

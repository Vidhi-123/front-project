
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2Component } from './home2.component';

describe('Home2Component', () => {
  let component: Home2Component;
  let fixture: ComponentFixture<Home2Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Home2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

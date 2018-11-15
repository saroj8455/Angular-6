import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaymoreComponent } from './displaymore.component';

describe('DisplaymoreComponent', () => {
  let component: DisplaymoreComponent;
  let fixture: ComponentFixture<DisplaymoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaymoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaymoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

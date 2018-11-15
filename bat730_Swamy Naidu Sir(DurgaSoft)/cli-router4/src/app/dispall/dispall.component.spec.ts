import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispallComponent } from './dispall.component';

describe('DispallComponent', () => {
  let component: DispallComponent;
  let fixture: ComponentFixture<DispallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

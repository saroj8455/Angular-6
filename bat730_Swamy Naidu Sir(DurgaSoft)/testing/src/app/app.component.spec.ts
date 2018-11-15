import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms"
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[FormsModule]
    }).compileComponents();
  }));

  it('Case1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const comp = fixture.componentInstance;
comp.uname="admin"
comp.pwd="admin"
comp.funlogin()
    expect(comp.msg).toBe("Valid");
  });

it("case2",()=>{
  const fixture = TestBed.createComponent(AppComponent);
  const comp = fixture.componentInstance;
  comp.uname="scott"
  comp.pwd="scott123"
  comp.funlogin()
  expect(comp.msg).toBe("Invalid")
})
it("Required",()=>{
  const fixture = TestBed.createComponent(AppComponent);
  const comp = fixture.componentInstance;
  comp.uname=""
  comp.funlogin()
  expect(comp.msg).toBe("Enter username")
})

});

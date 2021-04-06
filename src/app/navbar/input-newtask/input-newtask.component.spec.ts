import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNewtaskComponent } from './input-newtask.component';

describe('InputNewtaskComponent', () => {
  let component: InputNewtaskComponent;
  let fixture: ComponentFixture<InputNewtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNewtaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNewtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

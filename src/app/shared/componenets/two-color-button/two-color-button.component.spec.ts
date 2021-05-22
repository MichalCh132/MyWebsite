import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColorButtonComponent } from './two-color-button.component';

describe('TwoColorButtonComponent', () => {
  let component: TwoColorButtonComponent;
  let fixture: ComponentFixture<TwoColorButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColorButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetarComponent } from './objetar.component';

describe('ObjetarComponent', () => {
  let component: ObjetarComponent;
  let fixture: ComponentFixture<ObjetarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjetarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

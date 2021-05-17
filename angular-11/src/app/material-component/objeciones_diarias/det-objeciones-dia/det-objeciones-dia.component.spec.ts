import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetObjecionesDiaComponent } from './det-objeciones-dia.component';

describe('DetObjecionesDiaComponent', () => {
  let component: DetObjecionesDiaComponent;
  let fixture: ComponentFixture<DetObjecionesDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetObjecionesDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetObjecionesDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetRechazosDiaComponent } from './det-rechazos-dia.component';

describe('DetRechazosDiaComponent', () => {
  let component: DetRechazosDiaComponent;
  let fixture: ComponentFixture<DetRechazosDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetRechazosDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetRechazosDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

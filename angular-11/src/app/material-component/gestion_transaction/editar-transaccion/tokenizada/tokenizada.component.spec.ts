import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenizadaComponent } from './tokenizada.component';

describe('TokenizadaComponent', () => {
  let component: TokenizadaComponent;
  let fixture: ComponentFixture<TokenizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenizadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

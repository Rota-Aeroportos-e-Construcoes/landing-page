import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaLocationComponent } from './rota-location.component';

describe('RotaLocationComponent', () => {
  let component: RotaLocationComponent;
  let fixture: ComponentFixture<RotaLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotaLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotaLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

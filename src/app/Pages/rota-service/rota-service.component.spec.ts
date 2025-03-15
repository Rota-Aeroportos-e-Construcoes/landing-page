import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaServiceComponent } from './rota-service.component';

describe('RotaServiceComponent', () => {
  let component: RotaServiceComponent;
  let fixture: ComponentFixture<RotaServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotaServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

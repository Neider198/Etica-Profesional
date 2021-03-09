import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EticaProfesionalComponent } from './etica-profesional.component';

describe('EticaProfesionalComponent', () => {
  let component: EticaProfesionalComponent;
  let fixture: ComponentFixture<EticaProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EticaProfesionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EticaProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

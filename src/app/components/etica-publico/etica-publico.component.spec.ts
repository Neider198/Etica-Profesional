import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EticaPublicoComponent } from './etica-publico.component';

describe('EticaPublicoComponent', () => {
  let component: EticaPublicoComponent;
  let fixture: ComponentFixture<EticaPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EticaPublicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EticaPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

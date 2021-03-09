import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EticaInformaticaComponent } from './etica-informatica.component';

describe('EticaInformaticaComponent', () => {
  let component: EticaInformaticaComponent;
  let fixture: ComponentFixture<EticaInformaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EticaInformaticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EticaInformaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForosParticipativosComponent } from './foros-participativos.component';

describe('ForosParticipativosComponent', () => {
  let component: ForosParticipativosComponent;
  let fixture: ComponentFixture<ForosParticipativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForosParticipativosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForosParticipativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

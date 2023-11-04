import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MispacientesComponent } from './mispacientes.component';

describe('MispacientesComponent', () => {
  let component: MispacientesComponent;
  let fixture: ComponentFixture<MispacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MispacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MispacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

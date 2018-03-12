import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaMokComponent } from './busqueda-mok.component';

describe('BusquedaMokComponent', () => {
  let component: BusquedaMokComponent;
  let fixture: ComponentFixture<BusquedaMokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaMokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaMokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

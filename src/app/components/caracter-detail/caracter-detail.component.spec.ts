import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracterDetailComponent } from './caracter-detail.component';

describe('CaracterDetailComponent', () => {
  let component: CaracterDetailComponent;
  let fixture: ComponentFixture<CaracterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracterDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

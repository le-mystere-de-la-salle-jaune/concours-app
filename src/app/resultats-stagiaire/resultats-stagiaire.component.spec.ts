import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsStagiaireComponent } from './resultats-stagiaire.component';

describe('ResultatsStagiaireComponent', () => {
  let component: ResultatsStagiaireComponent;
  let fixture: ComponentFixture<ResultatsStagiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatsStagiaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatsStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

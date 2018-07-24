import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcoursStagiaireComponent } from './concours-stagiaire.component';

describe('ConcoursStagiaireComponent', () => {
  let component: ConcoursStagiaireComponent;
  let fixture: ComponentFixture<ConcoursStagiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcoursStagiaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcoursStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

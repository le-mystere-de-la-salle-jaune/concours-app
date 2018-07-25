import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsQuestionnairesComponent } from './resultats-questionnaires.component';

describe('ResultatsQuestionnairesComponent', () => {
  let component: ResultatsQuestionnairesComponent;
  let fixture: ComponentFixture<ResultatsQuestionnairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatsQuestionnairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatsQuestionnairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

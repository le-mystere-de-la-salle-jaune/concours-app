import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageConcoursComponent } from './passage-concours.component';

describe('PassageConcoursComponent', () => {
  let component: PassageConcoursComponent;
  let fixture: ComponentFixture<PassageConcoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassageConcoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassageConcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

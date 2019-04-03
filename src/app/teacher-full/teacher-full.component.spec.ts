import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFullComponent } from './teacher-full.component';

describe('TeacherFullComponent', () => {
  let component: TeacherFullComponent;
  let fixture: ComponentFixture<TeacherFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

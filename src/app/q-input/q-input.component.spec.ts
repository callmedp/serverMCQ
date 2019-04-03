import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QInputComponent } from './q-input.component';

describe('QInputComponent', () => {
  let component: QInputComponent;
  let fixture: ComponentFixture<QInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

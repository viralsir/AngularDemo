import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudententryComponent } from './studententry.component';

describe('StudententryComponent', () => {
  let component: StudententryComponent;
  let fixture: ComponentFixture<StudententryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudententryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudententryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSprintComponent } from './crear-sprint.component';

describe('CrearSprintComponent', () => {
  let component: CrearSprintComponent;
  let fixture: ComponentFixture<CrearSprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearSprintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

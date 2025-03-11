import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSprintsComponent } from './lista-sprints.component';

describe('ListaSprintsComponent', () => {
  let component: ListaSprintsComponent;
  let fixture: ComponentFixture<ListaSprintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaSprintsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaSprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

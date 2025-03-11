import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProducBacklogComponent } from './lista-produc-backlog.component';

describe('ListaProducBacklogComponent', () => {
  let component: ListaProducBacklogComponent;
  let fixture: ComponentFixture<ListaProducBacklogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaProducBacklogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProducBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

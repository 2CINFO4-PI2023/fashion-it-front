import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionNotelivreurComponent } from './gestion-notelivreur.component';

describe('GestionNotelivreurComponent', () => {
  let component: GestionNotelivreurComponent;
  let fixture: ComponentFixture<GestionNotelivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionNotelivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionNotelivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

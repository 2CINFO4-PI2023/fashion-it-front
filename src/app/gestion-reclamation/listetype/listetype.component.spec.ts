import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListetypeComponent } from './listetype.component';

describe('ListetypeComponent', () => {
  let component: ListetypeComponent;
  let fixture: ComponentFixture<ListetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

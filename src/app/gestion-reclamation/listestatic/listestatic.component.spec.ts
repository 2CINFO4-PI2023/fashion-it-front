import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListestaticComponent } from './listestatic.component';

describe('ListestaticComponent', () => {
  let component: ListestaticComponent;
  let fixture: ComponentFixture<ListestaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListestaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListestaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

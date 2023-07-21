import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercenterComponent } from './usercenter.component';

describe('UsercenterComponent', () => {
  let component: UsercenterComponent;
  let fixture: ComponentFixture<UsercenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserpopupComponent } from './adduserpopup.component';

describe('AdduserpopupComponent', () => {
  let component: AdduserpopupComponent;
  let fixture: ComponentFixture<AdduserpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduserpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

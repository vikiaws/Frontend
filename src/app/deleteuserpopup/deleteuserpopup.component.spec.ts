import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteuserpopupComponent } from './deleteuserpopup.component';

describe('DeleteuserpopupComponent', () => {
  let component: DeleteuserpopupComponent;
  let fixture: ComponentFixture<DeleteuserpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteuserpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteuserpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

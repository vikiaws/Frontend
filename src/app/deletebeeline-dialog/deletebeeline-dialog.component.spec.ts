import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebeelineDialogComponent } from './deletebeeline-dialog.component';

describe('DeletebeelineDialogComponent', () => {
  let component: DeletebeelineDialogComponent;
  let fixture: ComponentFixture<DeletebeelineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletebeelineDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletebeelineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

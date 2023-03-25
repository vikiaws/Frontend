import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebeelineDialogComponent } from './updatebeeline-dialog.component';

describe('UpdatebeelineDialogComponent', () => {
  let component: UpdatebeelineDialogComponent;
  let fixture: ComponentFixture<UpdatebeelineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebeelineDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebeelineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

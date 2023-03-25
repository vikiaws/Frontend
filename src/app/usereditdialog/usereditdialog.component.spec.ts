import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditdialogComponent } from './usereditdialog.component';

describe('UsereditdialogComponent', () => {
  let component: UsereditdialogComponent;
  let fixture: ComponentFixture<UsereditdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsereditdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsereditdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

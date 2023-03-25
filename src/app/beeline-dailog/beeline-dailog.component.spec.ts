import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeelineDailogComponent } from './beeline-dailog.component';

describe('BeelineDailogComponent', () => {
  let component: BeelineDailogComponent;
  let fixture: ComponentFixture<BeelineDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeelineDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeelineDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

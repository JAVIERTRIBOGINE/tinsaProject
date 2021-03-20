import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContendDialogComponent } from './contend-dialog.component';

describe('ContendDialogComponent', () => {
  let component: ContendDialogComponent;
  let fixture: ComponentFixture<ContendDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContendDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContendDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

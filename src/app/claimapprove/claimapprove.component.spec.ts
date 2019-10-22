import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimapproveComponent } from './claimapprove.component';

describe('ClaimapproveComponent', () => {
  let component: ClaimapproveComponent;
  let fixture: ComponentFixture<ClaimapproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimapproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenRoutingComponent } from './screen-routing.component';

describe('ScreenRoutingComponent', () => {
  let component: ScreenRoutingComponent;
  let fixture: ComponentFixture<ScreenRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

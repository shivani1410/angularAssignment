import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenRouting2Component } from './screen-routing2.component';

describe('ScreenRouting2Component', () => {
  let component: ScreenRouting2Component;
  let fixture: ComponentFixture<ScreenRouting2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenRouting2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenRouting2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

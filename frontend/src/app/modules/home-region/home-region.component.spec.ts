import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRegionComponent } from './home-region.component';

describe('HomeRegionComponent', () => {
  let component: HomeRegionComponent;
  let fixture: ComponentFixture<HomeRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

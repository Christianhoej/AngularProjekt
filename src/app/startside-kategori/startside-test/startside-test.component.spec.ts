import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartsideTestComponent } from './startside-test.component';

describe('StartsideTestComponent', () => {
  let component: StartsideTestComponent;
  let fixture: ComponentFixture<StartsideTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartsideTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartsideTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

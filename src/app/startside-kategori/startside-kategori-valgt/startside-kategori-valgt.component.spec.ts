import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartsideKategoriValgtComponent } from './startside-kategori-valgt.component';

describe('StartsideKategoriValgtComponent', () => {
  let component: StartsideKategoriValgtComponent;
  let fixture: ComponentFixture<StartsideKategoriValgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartsideKategoriValgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartsideKategoriValgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

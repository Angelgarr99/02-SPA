import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesArrComponent } from './heroes-arr.component';

describe('HeroesArrComponent', () => {
  let component: HeroesArrComponent;
  let fixture: ComponentFixture<HeroesArrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesArrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesArrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

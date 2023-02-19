import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatMenuComponent } from './hat-menu.component';

describe('HatMenuComponent', () => {
  let component: HatMenuComponent;
  let fixture: ComponentFixture<HatMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HatMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HatMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

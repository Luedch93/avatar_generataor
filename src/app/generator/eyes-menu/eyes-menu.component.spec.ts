import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyesMenuComponent } from './eyes-menu.component';

describe('EyesMenuComponent', () => {
  let component: EyesMenuComponent;
  let fixture: ComponentFixture<EyesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyesMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

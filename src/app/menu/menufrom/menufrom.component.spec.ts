import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenufromComponent } from './menufrom.component';

describe('MenufromComponent', () => {
  let component: MenufromComponent;
  let fixture: ComponentFixture<MenufromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenufromComponent]
    });
    fixture = TestBed.createComponent(MenufromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

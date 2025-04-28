import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuitemlistComponent } from './menuitemlist.component';

describe('MenuitemlistComponent', () => {
  let component: MenuitemlistComponent;
  let fixture: ComponentFixture<MenuitemlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuitemlistComponent]
    });
    fixture = TestBed.createComponent(MenuitemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

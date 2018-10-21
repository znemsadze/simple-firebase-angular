
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPitalosComponent } from './view-pitalos.component';

describe('ViewPitalosComponent', () => {
  let component: ViewPitalosComponent;
  let fixture: ComponentFixture<ViewPitalosComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPitalosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPitalosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

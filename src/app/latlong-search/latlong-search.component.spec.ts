import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatlongSearchComponent } from './latlong-search.component';

describe('LatlongSearchComponent', () => {
  let component: LatlongSearchComponent;
  let fixture: ComponentFixture<LatlongSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatlongSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatlongSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

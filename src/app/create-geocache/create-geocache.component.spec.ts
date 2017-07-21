import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGeocacheComponent } from './create-geocache.component';

describe('CreateGeocacheComponent', () => {
  let component: CreateGeocacheComponent;
  let fixture: ComponentFixture<CreateGeocacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGeocacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGeocacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

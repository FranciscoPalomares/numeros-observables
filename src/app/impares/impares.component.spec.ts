import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImparesComponent } from './impares.component';

describe('ImparesComponent', () => {
  let component: ImparesComponent;
  let fixture: ComponentFixture<ImparesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImparesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImparesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaksComponent } from './thaks.component';

describe('ThaksComponent', () => {
  let component: ThaksComponent;
  let fixture: ComponentFixture<ThaksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThaksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

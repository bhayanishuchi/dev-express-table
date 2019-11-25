import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNgComponent } from './prime-ng.component';

describe('PrimeNgComponent', () => {
  let component: PrimeNgComponent;
  let fixture: ComponentFixture<PrimeNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

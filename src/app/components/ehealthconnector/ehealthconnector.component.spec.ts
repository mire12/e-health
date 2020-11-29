import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhealthconnectorComponent } from './ehealthconnector.component';

describe('EhealthconnectorComponent', () => {
  let component: EhealthconnectorComponent;
  let fixture: ComponentFixture<EhealthconnectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhealthconnectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhealthconnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

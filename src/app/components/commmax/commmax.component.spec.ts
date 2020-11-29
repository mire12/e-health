import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommmaxComponent } from './commmax.component';

describe('ChatComponent', () => {
  let component: CommmaxComponent;
  let fixture: ComponentFixture<CommmaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommmaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommmaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

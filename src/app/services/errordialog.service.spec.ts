import { TestBed } from '@angular/core/testing';

import { ErrordialogService } from './errordialog.service';

describe('ErrordialogService', () => {
  let service: ErrordialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrordialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

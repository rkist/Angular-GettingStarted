import { TestBed, inject } from '@angular/core/testing';

import { ProductGuardService } from './product-guard.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';


describe('ProductGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [ProductGuardService],
      // schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should be created', inject([ProductGuardService], (service: ProductGuardService) => {
    expect(service).toBeTruthy();
  }));
});

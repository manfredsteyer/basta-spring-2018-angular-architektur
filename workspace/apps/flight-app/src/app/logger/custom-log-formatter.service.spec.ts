/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomLogFormatter.tsService } from './custom-log-formatter.ts.service';

describe('Service: CustomLogFormatter.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomLogFormatter.tsService]
    });
  });

  it('should ...', inject([CustomLogFormatter.tsService], (service: CustomLogFormatter.tsService) => {
    expect(service).toBeTruthy();
  }));
});
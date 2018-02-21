/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TabbedPaneService } from './tabbed-pane.service';

describe('Service: TabbedPane', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabbedPaneService]
    });
  });

  it('should ...', inject([TabbedPaneService], (service: TabbedPaneService) => {
    expect(service).toBeTruthy();
  }));
});
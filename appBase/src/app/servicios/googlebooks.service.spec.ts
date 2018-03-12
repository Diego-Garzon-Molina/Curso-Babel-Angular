import { TestBed, inject } from '@angular/core/testing';

import { GooglebooksService } from './googlebooks.service';

describe('GooglebooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GooglebooksService]
    });
  });

  it('should be created', inject([GooglebooksService], (service: GooglebooksService) => {
    expect(service).toBeTruthy();
  }));
});

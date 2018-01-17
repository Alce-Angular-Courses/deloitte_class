import { TestBed, inject } from '@angular/core/testing';

import { LibrosMockService } from './libros-mock.service';

describe('LibrosMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibrosMockService]
    });
  });

  it('should be created', inject([LibrosMockService], (service: LibrosMockService) => {
    expect(service).toBeTruthy();
  }));
});

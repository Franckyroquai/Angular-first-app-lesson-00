import { TestBed } from '@angular/core/testing';

import { RecuperationProduitsService } from './recuperation-produits.service';

describe('RecuperationProduitsService', () => {
  let service: RecuperationProduitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecuperationProduitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { NumerosServicioService } from './numeros-servicio.service';

describe('NumerosServicioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumerosServicioService]
    });
  });

  it('should be created', inject([NumerosServicioService], (service: NumerosServicioService) => {
    expect(service).toBeTruthy();
  }));
});

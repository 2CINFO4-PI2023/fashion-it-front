/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommandeService } from './commande.service';

describe('Service: Commande', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommandeService]
    });
  });

  it('should ...', inject([CommandeService], (service: CommandeService) => {
    expect(service).toBeTruthy();
  }));
});

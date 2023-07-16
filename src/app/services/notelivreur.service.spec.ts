/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NotelivreurService } from './notelivreur.service';

describe('Service: Notelivreur', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotelivreurService]
    });
  });

  it('should ...', inject([NotelivreurService], (service: NotelivreurService) => {
    expect(service).toBeTruthy();
  }));
});

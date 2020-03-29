import { TestBed } from '@angular/core/testing';

import { InteractionHttpService } from './interaction-http.service';

describe('InteractionHttpService', () => {
  let service: InteractionHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteractionHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

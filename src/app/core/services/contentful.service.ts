import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful'
import { environments } from '../../../environments/environments';
import { from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContentfulService {
  constructor() { }

  private client = createClient({
    space: environments.spaceId,
    accessToken: environments.contentDelivery,
  })

  public getAllentries() {
    const promise = this.client.getEntries()
    return from(promise)
  }

}

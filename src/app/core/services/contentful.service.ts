import { Injectable } from '@angular/core';
import { createClient, Entry, EntrySkeletonType } from 'contentful'
import { environments } from '../../../environments/environments';
import { from, Observable } from 'rxjs';
import { ClotheResponse } from '../interfaces/ClotheResponse.interface';

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

  public getEntrieById(id:string): any {
    const promise = this.client.getEntry(id)
    return from(promise)
  }

}

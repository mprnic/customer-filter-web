import { Injectable } from '@angular/core';

export type EventAttribute = {
  name?: string;
  operator?: string;
  value?: string | number;
};

export type Filter = {
  eventName?: string;
  eventAttributes: EventAttribute[];
};

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  updateFilters(filters: Filter[]) {
    console.log(filters);
  }
}

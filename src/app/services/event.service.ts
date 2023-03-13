import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type EventApiResponse = {
  events: Event[];
};

export type Event = {
  type: string;
  properties: Property[];
};

type PropertyType = 'string' | 'number';

export type Property = {
  type: PropertyType;
  property: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = "https://br-fe-assignment.github.io/customer-events/events.json";

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<EventApiResponse>(this.apiUrl);
  }
}

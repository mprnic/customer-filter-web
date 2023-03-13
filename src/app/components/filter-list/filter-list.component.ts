import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Event, EventService } from '../../services/event.service';
import { EventAttribute, Filter } from '../../services/filter.service';
import { EventActions } from '../../store/event.store';
import { FilterActions } from '../../store/filter.store';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {

  filters$: Observable<Filter[]>;
  events$: Observable<Event[]>;

  constructor(
    private filterStore: Store<{ filters: Filter[] }>,
    private eventStore: Store<{ events: Event[] }>,
    private eventService: EventService
  ) {
    this.filters$ = filterStore.select("filters");
    this.events$ = eventStore.select("events");
  }

  ngOnInit() {
    this.eventService
      .getEvents()
      .subscribe(({ events }) => {
        this.eventStore.dispatch(EventActions.loadEvents({ events }));
      });
  }

  onSelectEventType(eventName: string, filter: Filter, filterIndex: number) {
    const newFilter: Filter = { ...filter, eventName, eventAttributes: [] };
    this.filterStore.dispatch(FilterActions.editFilter({ newFilter, filterIndex }));
  }

  onChangeAttributes(eventAttributes: EventAttribute[], filter: Filter, filterIndex: number) {
    const newFilter: Filter = { ...filter, eventAttributes };
    this.filterStore.dispatch(FilterActions.editFilter({ newFilter, filterIndex }));
  }

  onAddFilter() {
    this.filterStore.dispatch(FilterActions.addFilter());
  }

  onDuplicateFilter(filter: Filter) {
    this.filterStore.dispatch(FilterActions.duplicateFilter({ filter }));
  }

  onDeleteFilter(filterIndex: number) {
    this.filterStore.dispatch(FilterActions.deleteFilter({ filterIndex }));
  }

  onDeleteAllFilters() {
    this.filterStore.dispatch(FilterActions.deleteAllFilters());
  }

  onApplyFilters() {
    this.filterStore.dispatch(FilterActions.applyFilters());
  }
}

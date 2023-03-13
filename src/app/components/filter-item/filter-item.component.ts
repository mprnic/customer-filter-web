import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { Event } from '../../services/event.service';
import { EventAttribute, Filter } from '../../services/filter.service';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent implements OnInit {

  @Input() filter!: Filter;
  @Input() events$!: Observable<Event[]>;
  @Input() index!: number;
  @Output() onSelectEventType: EventEmitter<string> = new EventEmitter();
  @Output() onChangeEventAttributes: EventEmitter<EventAttribute[]> = new EventEmitter();
  @Output() onDuplicateFilter: EventEmitter<{}> = new EventEmitter();
  @Output() onDeleteFilter: EventEmitter<{}> = new EventEmitter();

  events: Event[] = [];
  showActions: boolean = false;

  ngOnInit() {
    this.events$.subscribe((events) => this.events = events);
  }

  getProperties() {
    const event = this.events.find((event) => event.type === this.filter.eventName);

    return event?.properties ?? [];
  }

  onSelectEvent(selectedEventType: string) {
    this.onSelectEventType.emit(selectedEventType);
  }

  onAddAttribute() {
    const newAttributes = [...this.filter.eventAttributes, {}];
    this.onChangeEventAttributes.emit(newAttributes);
  }

  onChangeAttributes(newAttributes: EventAttribute[]) {
    this.onChangeEventAttributes.emit(newAttributes);
  }

  onDuplicate() {
    this.onDuplicateFilter.emit();
  }

  onDelete() {
    this.onDeleteFilter.emit();
  }
}

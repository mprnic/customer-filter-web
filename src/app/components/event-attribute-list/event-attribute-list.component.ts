import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Property } from '../../services/event.service';
import { EventAttribute } from '../../services/filter.service';

@Component({
  selector: 'app-event-attribute-list',
  templateUrl: './event-attribute-list.component.html',
  styleUrls: ['./event-attribute-list.component.scss']
})
export class EventAttributeListComponent {

  @Input() attributes!: EventAttribute[];
  @Input() properties!: Property[];
  @Output() onChangeAttributes: EventEmitter<EventAttribute[]> = new EventEmitter();

  onChangeAttribute(newAttribute: EventAttribute, attrIndex: number) {
    const newAttributes = [...this.attributes];
    newAttributes.splice(attrIndex, 1, newAttribute);
    this.onChangeAttributes.emit(newAttributes);
  }

  onDeleteAttribute(attrIndex: number) {
    const newAttributes = [...this.attributes];
    newAttributes.splice(attrIndex, 1);
    this.onChangeAttributes.emit(newAttributes);
  }
}

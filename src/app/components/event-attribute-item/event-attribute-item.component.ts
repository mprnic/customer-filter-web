import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Property } from '../../services/event.service';
import { EventAttribute } from '../../services/filter.service';

const operatorLookup = {
    string: ["equals", "does not equal", "contains", "does not contain"],
    number: ["equal to", "in between", "less than", "greater than"]
};

@Component({
  selector: 'app-event-attribute-item',
  templateUrl: './event-attribute-item.component.html',
  styleUrls: ['./event-attribute-item.component.scss']
})
export class EventAttributeItemComponent {

  @Input() attribute!: EventAttribute;
  @Input() properties!: Property[];
  @Output() onChangeAttribute: EventEmitter<EventAttribute> = new EventEmitter();
  @Output() onDeleteAttribute: EventEmitter<{}> = new EventEmitter();

  showDelete = false;
  operators = operatorLookup["string"];

  onSelectName(name: string) {
    const prop = this.properties.find((p) => p.property === name);
    if (!prop) {
      return;
    }
    const newOperators = operatorLookup[prop.type];
    this.operators = newOperators;
    const newAttribute: EventAttribute = {
      name,
      operator: newOperators[0],
    };
    this.onChangeAttribute.emit(newAttribute);
  }

  onSelectOperator(operator: string) {
    const newAttribute: EventAttribute = {
      name: this.attribute.name,
      operator,
    };
    this.onChangeAttribute.emit(newAttribute);
  }

  onDelete() {
    this.onDeleteAttribute.emit();
  }
}

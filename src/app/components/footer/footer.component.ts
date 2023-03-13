import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Output() onApplyFilters: EventEmitter<{}> = new EventEmitter();

  onApply() {
    this.onApplyFilters.emit();
  }
}

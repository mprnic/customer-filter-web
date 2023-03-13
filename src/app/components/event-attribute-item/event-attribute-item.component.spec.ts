import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAttributeItemComponent } from './event-attribute-item.component';

describe('EventAttributeItemComponent', () => {
  let component: EventAttributeItemComponent;
  let fixture: ComponentFixture<EventAttributeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAttributeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventAttributeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAttributeListComponent } from './event-attribute-list.component';

describe('EventAttributeListComponent', () => {
  let component: EventAttributeListComponent;
  let fixture: ComponentFixture<EventAttributeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAttributeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventAttributeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

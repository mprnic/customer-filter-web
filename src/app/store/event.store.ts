import { createActionGroup, createReducer, on, props } from "@ngrx/store";

import { Event } from "../services/event.service";

const initialState: Event[] = [];

export const EventActions = createActionGroup({
    source: "Event",
    events: {
        "Load Events": props<{ events: Event[] }>()
    }
})

export const eventReducer = createReducer(
    initialState,
    on(EventActions.loadEvents, ((_, { events }) => events))
);

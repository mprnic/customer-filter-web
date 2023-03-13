import { createActionGroup, createReducer, emptyProps, on, props } from "@ngrx/store";

import { Filter } from "../services/filter.service";

const initialState: Filter[] = [
    { eventAttributes: [] }
];

export const FilterActions = createActionGroup({
    source: "Filter",
    events: {
        "Add filter": emptyProps(),
        "Edit filter": props<{ newFilter: Filter, filterIndex: number }>(),
        "Duplicate filter": props<{ filter: Filter }>(),
        "Delete filter": props<{ filterIndex: number }>(),
        "Delete all filters": emptyProps(),
        "Apply filters": emptyProps()
    }
});

export const filterReducer = createReducer(
    initialState,
    on(FilterActions.addFilter, (state) => {
        const newFilter = { eventAttributes: [] };

        return [...state, newFilter];
    }),
    on(FilterActions.editFilter, (state, { newFilter, filterIndex }) => {
        const newFilters = [...state];
        newFilters.splice(filterIndex, 1, newFilter);

        return newFilters;
    }),
    on(FilterActions.duplicateFilter, (state, { filter }) => {
        return [...state, { ...filter }];
    }),
    on(FilterActions.deleteFilter, (state, { filterIndex }) => {
        if (state.length === 1) {
            return initialState;
        }

        const newFilters = [...state];
        newFilters.splice(filterIndex, 1);

        return newFilters;
    }),
    on(FilterActions.deleteAllFilters, (_) => initialState)
);

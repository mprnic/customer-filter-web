import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { tap } from "rxjs";

import { Filter, FilterService } from "../services/filter.service";
import { FilterActions } from "./filter.store";

@Injectable()
export class FilterEffects {

  applyFilters$ = createEffect(() => this.actions$.pipe(
    ofType(FilterActions.applyFilters),
    concatLatestFrom(_ => this.filterStore.select("filters")),
    tap(([_, filters]) => this.filterService.updateFilters(filters))
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private filterService: FilterService,
    private filterStore: Store<{ filters: Filter[] }>
  ) {}
}
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
export class TheadTitlesRowComponent {
    constructor() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
    }
}
TheadTitlesRowComponent.decorators = [
    { type: Component, args: [{
                selector: '[ng2-st-thead-titles-row]',
                template: `
    <th ng2-st-checkbox-select-all *ngIf="isMultiSelectVisible"
                                   [grid]="grid"
                                   [source]="source"
                                   [isAllSelected]="isAllSelected"
                                   (click)="selectAllRows.emit($event)">
    </th>
    <th ng2-st-actions-title *ngIf="showActionColumnLeft" [grid]="grid"></th>
    <th *ngFor="let column of grid.getColumns()" class="ng2-smart-th {{ column.id }}" [ngClass]="column.class"
      [style.width]="column.width" >
      <ng2-st-column-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ng2-st-column-title>
    </th>
    <th ng2-st-actions-title *ngIf="showActionColumnRight" [grid]="grid"></th>
  `
            },] }
];
TheadTitlesRowComponent.propDecorators = {
    grid: [{ type: Input }],
    isAllSelected: [{ type: Input }],
    source: [{ type: Input }],
    sort: [{ type: Output }],
    selectAllRows: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtdGl0bGVzLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lzL2dpdC9tY2hhaW4vbmcyLXNtYXJ0LXRhYmxlL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9yb3dzL3RoZWFkLXRpdGxlcy1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQW9CbEUsTUFBTSxPQUFPLHVCQUF1QjtJQWpCcEM7UUF1QlksU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDL0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBYXBELENBQUM7SUFOQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztHQWFUO2FBQ0Y7OzttQkFHRSxLQUFLOzRCQUNMLEtBQUs7cUJBQ0wsS0FBSzttQkFFTCxNQUFNOzRCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2dyaWQnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NvbHVtblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmcyLXN0LXRoZWFkLXRpdGxlcy1yb3ddJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dGggbmcyLXN0LWNoZWNrYm94LXNlbGVjdC1hbGwgKm5nSWY9XCJpc011bHRpU2VsZWN0VmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtncmlkXT1cImdyaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpc0FsbFNlbGVjdGVkXT1cImlzQWxsU2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0QWxsUm93cy5lbWl0KCRldmVudClcIj5cbiAgICA8L3RoPlxuICAgIDx0aCBuZzItc3QtYWN0aW9ucy10aXRsZSAqbmdJZj1cInNob3dBY3Rpb25Db2x1bW5MZWZ0XCIgW2dyaWRdPVwiZ3JpZFwiPjwvdGg+XG4gICAgPHRoICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgZ3JpZC5nZXRDb2x1bW5zKClcIiBjbGFzcz1cIm5nMi1zbWFydC10aCB7eyBjb2x1bW4uaWQgfX1cIiBbbmdDbGFzc109XCJjb2x1bW4uY2xhc3NcIlxuICAgICAgW3N0eWxlLndpZHRoXT1cImNvbHVtbi53aWR0aFwiID5cbiAgICAgIDxuZzItc3QtY29sdW1uLXRpdGxlIFtzb3VyY2VdPVwic291cmNlXCIgW2NvbHVtbl09XCJjb2x1bW5cIiAoc29ydCk9XCJzb3J0LmVtaXQoJGV2ZW50KVwiPjwvbmcyLXN0LWNvbHVtbi10aXRsZT5cbiAgICA8L3RoPlxuICAgIDx0aCBuZzItc3QtYWN0aW9ucy10aXRsZSAqbmdJZj1cInNob3dBY3Rpb25Db2x1bW5SaWdodFwiIFtncmlkXT1cImdyaWRcIj48L3RoPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUaGVhZFRpdGxlc1Jvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgQElucHV0KCkgaXNBbGxTZWxlY3RlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xuXG4gIEBPdXRwdXQoKSBzb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RBbGxSb3dzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgaXNNdWx0aVNlbGVjdFZpc2libGU6IGJvb2xlYW47XG4gIHNob3dBY3Rpb25Db2x1bW5MZWZ0OiBib29sZWFuO1xuICBzaG93QWN0aW9uQ29sdW1uUmlnaHQ6IGJvb2xlYW47XG5cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmlzTXVsdGlTZWxlY3RWaXNpYmxlID0gdGhpcy5ncmlkLmlzTXVsdGlTZWxlY3RWaXNpYmxlKCk7XG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uTGVmdCA9IHRoaXMuZ3JpZC5zaG93QWN0aW9uQ29sdW1uKCdsZWZ0Jyk7XG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uUmlnaHQgPSB0aGlzLmdyaWQuc2hvd0FjdGlvbkNvbHVtbigncmlnaHQnKTtcbiAgfVxuXG59XG4iXX0=
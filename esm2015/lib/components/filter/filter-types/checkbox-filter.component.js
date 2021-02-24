import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DefaultFilter } from './default-filter';
import { debounceTime } from 'rxjs/operators';
export class CheckboxFilterComponent extends DefaultFilter {
    constructor() {
        super();
        this.filterActive = false;
        this.inputControl = new FormControl();
    }
    ngOnInit() {
        this.changesSubscription = this.inputControl.valueChanges
            .pipe(debounceTime(this.delay))
            .subscribe((checked) => {
            this.filterActive = true;
            const trueVal = (this.column.getFilterConfig() && this.column.getFilterConfig().true) || true;
            const falseVal = (this.column.getFilterConfig() && this.column.getFilterConfig().false) || false;
            this.query = checked ? trueVal : falseVal;
            this.setFilter();
        });
    }
    resetFilter(event) {
        event.preventDefault();
        this.query = '';
        this.inputControl.setValue(false, { emitEvent: false });
        this.filterActive = false;
        this.setFilter();
    }
}
CheckboxFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'checkbox-filter',
                template: `
    <input type="checkbox" [formControl]="inputControl" [ngClass]="inputClass" class="form-control">
    <a href="#" *ngIf="filterActive"
                (click)="resetFilter($event)">{{column.getFilterConfig()?.resetText || 'reset'}}</a>
  `
            },] }
];
CheckboxFilterComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamFleW9uZy9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXItdHlwZXMvY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBVTlDLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxhQUFhO0lBS3hEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFKVixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixpQkFBWSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7SUFJakMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZO2FBQ3RELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixNQUFNLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7WUFDOUYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDO1lBQ2pHLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQVU7UUFDcEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7OztHQUlUO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERlZmF1bHRGaWx0ZXIgfSBmcm9tICcuL2RlZmF1bHQtZmlsdGVyJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hlY2tib3gtZmlsdGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW2Zvcm1Db250cm9sXT1cImlucHV0Q29udHJvbFwiIFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgIDxhIGhyZWY9XCIjXCIgKm5nSWY9XCJmaWx0ZXJBY3RpdmVcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJyZXNldEZpbHRlcigkZXZlbnQpXCI+e3tjb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCk/LnJlc2V0VGV4dCB8fCAncmVzZXQnfX08L2E+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94RmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEZpbHRlciBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZmlsdGVyQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIGlucHV0Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNoYW5nZXNTdWJzY3JpcHRpb24gPSB0aGlzLmlucHV0Q29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSh0aGlzLmRlbGF5KSlcbiAgICAgIC5zdWJzY3JpYmUoKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgICBjb25zdCB0cnVlVmFsID0gKHRoaXMuY29sdW1uLmdldEZpbHRlckNvbmZpZygpICYmIHRoaXMuY29sdW1uLmdldEZpbHRlckNvbmZpZygpLnRydWUpIHx8IHRydWU7XG4gICAgICAgIGNvbnN0IGZhbHNlVmFsID0gKHRoaXMuY29sdW1uLmdldEZpbHRlckNvbmZpZygpICYmIHRoaXMuY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmZhbHNlKSB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IGNoZWNrZWQgPyB0cnVlVmFsIDogZmFsc2VWYWw7XG4gICAgICAgIHRoaXMuc2V0RmlsdGVyKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlc2V0RmlsdGVyKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucXVlcnkgPSAnJztcbiAgICB0aGlzLmlucHV0Q29udHJvbC5zZXRWYWx1ZShmYWxzZSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuZmlsdGVyQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5zZXRGaWx0ZXIoKTtcbiAgfVxufVxuIl19
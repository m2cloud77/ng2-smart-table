import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
export class ViewCellComponent {
}
ViewCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'table-cell-view-mode',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div [ngSwitch]="cell.getColumn().type">
        <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
        <div *ngSwitchCase="'html'" [innerHTML]="cell.getValue()"></div>
        <div *ngSwitchDefault>{{ cell.getValue() }}</div>
    </div>
    `
            },] }
];
ViewCellComponent.propDecorators = {
    cell: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamFleW9uZy9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC12aWV3LW1vZGUvdmlldy1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFhbEQsTUFBTSxPQUFPLGlCQUFpQjs7O1lBWDdCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7Ozs7S0FNUDthQUNKOzs7bUJBR0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtY2VsbC12aWV3LW1vZGUnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtuZ1N3aXRjaF09XCJjZWxsLmdldENvbHVtbigpLnR5cGVcIj5cbiAgICAgICAgPGN1c3RvbS12aWV3LWNvbXBvbmVudCAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbSdcIiBbY2VsbF09XCJjZWxsXCI+PC9jdXN0b20tdmlldy1jb21wb25lbnQ+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidodG1sJ1wiIFtpbm5lckhUTUxdPVwiY2VsbC5nZXRWYWx1ZSgpXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoRGVmYXVsdD57eyBjZWxsLmdldFZhbHVlKCkgfX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBWaWV3Q2VsbENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgY2VsbDogQ2VsbDtcbn1cbiJdfQ==
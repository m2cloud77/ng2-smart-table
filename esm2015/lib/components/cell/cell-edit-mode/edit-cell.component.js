import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
export class EditCellComponent {
    constructor() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        this.edited.next(event);
        return false;
    }
    getEditorType() {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    }
}
EditCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'table-cell-edit-mode',
                template: `
      <div [ngSwitch]="getEditorType()">
        <table-cell-custom-editor *ngSwitchCase="'custom'"
                                  [cell]="cell"
                                  [inputClass]="inputClass"
                                  (edited)="onEdited($event)">
        </table-cell-custom-editor>
        <table-cell-default-editor *ngSwitchDefault
                                  [cell]="cell"
                                  [inputClass]="inputClass"
                                  (edited)="onEdited($event)">
        </table-cell-default-editor>
      </div>
    `
            },] }
];
EditCellComponent.propDecorators = {
    cell: [{ type: Input }],
    inputClass: [{ type: Input }],
    edited: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamFleW9uZy9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0LW1vZGUvZWRpdC1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQW1CbEQsTUFBTSxPQUFPLGlCQUFpQjtJQWpCOUI7UUFvQlcsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUV2QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQVU3QyxDQUFDO0lBUkMsUUFBUSxDQUFDLEtBQVU7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzNFLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0tBYVA7YUFDSjs7O21CQUdFLEtBQUs7eUJBQ0wsS0FBSztxQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtY2VsbC1lZGl0LW1vZGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwiZ2V0RWRpdG9yVHlwZSgpXCI+XG4gICAgICAgIDx0YWJsZS1jZWxsLWN1c3RvbS1lZGl0b3IgKm5nU3dpdGNoQ2FzZT1cIidjdXN0b20nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2VsbF09XCJjZWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWRpdGVkKT1cIm9uRWRpdGVkKCRldmVudClcIj5cbiAgICAgICAgPC90YWJsZS1jZWxsLWN1c3RvbS1lZGl0b3I+XG4gICAgICAgIDx0YWJsZS1jZWxsLWRlZmF1bHQtZWRpdG9yICpuZ1N3aXRjaERlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2VsbF09XCJjZWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWRpdGVkKT1cIm9uRWRpdGVkKCRldmVudClcIj5cbiAgICAgICAgPC90YWJsZS1jZWxsLWRlZmF1bHQtZWRpdG9yPlxuICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRWRpdENlbGxDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGNlbGw6IENlbGw7XG4gIEBJbnB1dCgpIGlucHV0Q2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gIEBPdXRwdXQoKSBlZGl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBvbkVkaXRlZChldmVudDogYW55KTogYm9vbGVhbiB7XG4gICAgdGhpcy5lZGl0ZWQubmV4dChldmVudCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0RWRpdG9yVHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZWRpdG9yICYmIHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5lZGl0b3IudHlwZTtcbiAgfVxufVxuIl19
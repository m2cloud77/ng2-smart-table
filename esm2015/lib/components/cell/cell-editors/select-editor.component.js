import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
export class SelectEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
}
SelectEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'select-editor',
                template: `
    <select [ngClass]="inputClass"
            class="form-control"
            [(ngModel)]="cell.newValue"
            [name]="cell.getId()"
            [disabled]="!cell.isEditable()"
            (click)="onClick.emit($event)"
            (keydown.enter)="onEdited.emit($event)"
            (keydown.esc)="onStopEditing.emit()">

        <option *ngFor="let option of cell.getColumn().getConfig()?.list" [value]="option.value"
                [selected]="option.value === cell.getValue()">{{ option.title }}
        </option>
    </select>
    `
            },] }
];
SelectEditorComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2phZXlvbmcvcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdG9ycy9zZWxlY3QtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQW9CakQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGFBQWE7SUFFdEQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7S0FjUDthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERlZmF1bHRFZGl0b3IgfSBmcm9tICcuL2RlZmF1bHQtZWRpdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LWVkaXRvcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlbGVjdCBbbmdDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiY2VsbC5uZXdWYWx1ZVwiXG4gICAgICAgICAgICBbbmFtZV09XCJjZWxsLmdldElkKClcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFjZWxsLmlzRWRpdGFibGUoKVwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25DbGljay5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgKGtleWRvd24uZW50ZXIpPVwib25FZGl0ZWQuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgIChrZXlkb3duLmVzYyk9XCJvblN0b3BFZGl0aW5nLmVtaXQoKVwiPlxuXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpPy5saXN0XCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICAgICAgICAgICAgW3NlbGVjdGVkXT1cIm9wdGlvbi52YWx1ZSA9PT0gY2VsbC5nZXRWYWx1ZSgpXCI+e3sgb3B0aW9uLnRpdGxlIH19XG4gICAgICAgIDwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEVkaXRvckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRFZGl0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbn1cbiJdfQ==
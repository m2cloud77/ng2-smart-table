import { Component } from '@angular/core';
import { CompleterService } from 'ng2-completer';
import { DefaultEditor } from './default-editor';
export class CompleterEditorComponent extends DefaultEditor {
    constructor(completerService) {
        super();
        this.completerService = completerService;
        this.completerStr = '';
    }
    ngOnInit() {
        if (this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer') {
            const config = this.cell.getColumn().getConfig().completer;
            config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
            config.dataService.descriptionField(config.descriptionField);
        }
    }
    onEditedCompleter(event) {
        this.cell.newValue = event.title;
        return false;
    }
}
CompleterEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'completer-editor',
                template: `
    <ng2-completer [(ngModel)]="completerStr"
                   [dataService]="cell.getColumn().getConfig().completer.dataService"
                   [minSearchLength]="cell.getColumn().getConfig().completer.minSearchLength || 0"
                   [pause]="cell.getColumn().getConfig().completer.pause || 0"
                   [placeholder]="cell.getColumn().getConfig().completer.placeholder || 'Start typing...'"
                   (selected)="onEditedCompleter($event)">
    </ng2-completer>
    `
            },] }
];
CompleterEditorComponent.ctorParameters = () => [
    { type: CompleterService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2phZXlvbmcvcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdG9ycy9jb21wbGV0ZXItZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFjakQsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGFBQWE7SUFJekQsWUFBb0IsZ0JBQWtDO1FBQ3BELEtBQUssRUFBRSxDQUFDO1FBRFUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUZ0RCxpQkFBWSxHQUFXLEVBQUUsQ0FBQztJQUkxQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtZQUNyRixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUMzRCxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0RyxNQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzlEO0lBQ0gsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQW9CO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDakMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7S0FRUDthQUNKOzs7WUFmUSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcGxldGVyU2VydmljZSB9IGZyb20gJ25nMi1jb21wbGV0ZXInO1xuXG5pbXBvcnQgeyBEZWZhdWx0RWRpdG9yIH0gZnJvbSAnLi9kZWZhdWx0LWVkaXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbXBsZXRlci1lZGl0b3InLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZzItY29tcGxldGVyIFsobmdNb2RlbCldPVwiY29tcGxldGVyU3RyXCJcbiAgICAgICAgICAgICAgICAgICBbZGF0YVNlcnZpY2VdPVwiY2VsbC5nZXRDb2x1bW4oKS5nZXRDb25maWcoKS5jb21wbGV0ZXIuZGF0YVNlcnZpY2VcIlxuICAgICAgICAgICAgICAgICAgIFttaW5TZWFyY2hMZW5ndGhdPVwiY2VsbC5nZXRDb2x1bW4oKS5nZXRDb25maWcoKS5jb21wbGV0ZXIubWluU2VhcmNoTGVuZ3RoIHx8IDBcIlxuICAgICAgICAgICAgICAgICAgIFtwYXVzZV09XCJjZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpLmNvbXBsZXRlci5wYXVzZSB8fCAwXCJcbiAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY2VsbC5nZXRDb2x1bW4oKS5nZXRDb25maWcoKS5jb21wbGV0ZXIucGxhY2Vob2xkZXIgfHwgJ1N0YXJ0IHR5cGluZy4uLidcIlxuICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZCk9XCJvbkVkaXRlZENvbXBsZXRlcigkZXZlbnQpXCI+XG4gICAgPC9uZzItY29tcGxldGVyPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbXBsZXRlckVkaXRvckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRFZGl0b3IgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbXBsZXRlclN0cjogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wbGV0ZXJTZXJ2aWNlOiBDb21wbGV0ZXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZWRpdG9yICYmIHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5lZGl0b3IudHlwZSA9PT0gJ2NvbXBsZXRlcicpIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5nZXRDb25maWcoKS5jb21wbGV0ZXI7XG4gICAgICBjb25maWcuZGF0YVNlcnZpY2UgPSB0aGlzLmNvbXBsZXRlclNlcnZpY2UubG9jYWwoY29uZmlnLmRhdGEsIGNvbmZpZy5zZWFyY2hGaWVsZHMsIGNvbmZpZy50aXRsZUZpZWxkKTtcbiAgICAgIGNvbmZpZy5kYXRhU2VydmljZS5kZXNjcmlwdGlvbkZpZWxkKGNvbmZpZy5kZXNjcmlwdGlvbkZpZWxkKTtcbiAgICB9XG4gIH1cblxuICBvbkVkaXRlZENvbXBsZXRlcihldmVudDogeyB0aXRsZTogJycgfSk6IGJvb2xlYW4ge1xuICAgIHRoaXMuY2VsbC5uZXdWYWx1ZSA9IGV2ZW50LnRpdGxlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19
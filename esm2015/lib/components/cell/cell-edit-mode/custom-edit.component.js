import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, } from '@angular/core';
import { EditCellDefault } from './edit-cell-default';
export class CustomEditComponent extends EditCellDefault {
    constructor(resolver) {
        super();
        this.resolver = resolver;
    }
    ngOnChanges(changes) {
        if (this.cell && !this.customComponent) {
            const componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.cell = this.cell;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.onStopEditing.subscribe(() => this.onStopEditing());
            this.customComponent.instance.onEdited.subscribe((event) => this.onEdited(event));
            this.customComponent.instance.onClick.subscribe((event) => this.onClick(event));
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
}
CustomEditComponent.decorators = [
    { type: Component, args: [{
                selector: 'table-cell-custom-editor',
                template: `
    <ng-template #dynamicTarget></ng-template>
  `
            },] }
];
CustomEditComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
CustomEditComponent.propDecorators = {
    dynamicTarget: [{ type: ViewChild, args: ['dynamicTarget', { read: ViewContainerRef, static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95cy9naXQvbWNoYWluL25nMi1zbWFydC10YWJsZS9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLWVkaXQtbW9kZS9jdXN0b20tZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULGdCQUFnQixHQUlqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFRdEQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGVBQWU7SUFLdEQsWUFBb0IsUUFBa0M7UUFDcEQsS0FBSyxFQUFFLENBQUM7UUFEVSxhQUFRLEdBQVIsUUFBUSxDQUEwQjtJQUV0RCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdEMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUU1RSwrQ0FBK0M7WUFDL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDM0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztZQUNsRixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3RGO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFOztHQUVUO2FBQ0Y7OztZQWZDLHdCQUF3Qjs7OzRCQW1CdkIsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFZGl0Q2VsbERlZmF1bHQgfSBmcm9tICcuL2VkaXQtY2VsbC1kZWZhdWx0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtY2VsbC1jdXN0b20tZWRpdG9yJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI2R5bmFtaWNUYXJnZXQ+PC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tRWRpdENvbXBvbmVudCBleHRlbmRzIEVkaXRDZWxsRGVmYXVsdCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBjdXN0b21Db21wb25lbnQ6IGFueTtcbiAgQFZpZXdDaGlsZCgnZHluYW1pY1RhcmdldCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pIGR5bmFtaWNUYXJnZXQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmNlbGwgJiYgIXRoaXMuY3VzdG9tQ29tcG9uZW50KSB7XG4gICAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZWRpdG9yLmNvbXBvbmVudCk7XG4gICAgICB0aGlzLmN1c3RvbUNvbXBvbmVudCA9IHRoaXMuZHluYW1pY1RhcmdldC5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cbiAgICAgIC8vIHNldCBASW5wdXRzIGFuZCBAT3V0cHV0cyBvZiBjdXN0b20gY29tcG9uZW50XG4gICAgICB0aGlzLmN1c3RvbUNvbXBvbmVudC5pbnN0YW5jZS5jZWxsID0gdGhpcy5jZWxsO1xuICAgICAgdGhpcy5jdXN0b21Db21wb25lbnQuaW5zdGFuY2UuaW5wdXRDbGFzcyA9IHRoaXMuaW5wdXRDbGFzcztcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50Lmluc3RhbmNlLm9uU3RvcEVkaXRpbmcuc3Vic2NyaWJlKCgpID0+IHRoaXMub25TdG9wRWRpdGluZygpKTtcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50Lmluc3RhbmNlLm9uRWRpdGVkLnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4gdGhpcy5vbkVkaXRlZChldmVudCkpO1xuICAgICAgdGhpcy5jdXN0b21Db21wb25lbnQuaW5zdGFuY2Uub25DbGljay5zdWJzY3JpYmUoKGV2ZW50OiBhbnkpID0+IHRoaXMub25DbGljayhldmVudCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmN1c3RvbUNvbXBvbmVudCkge1xuICAgICAgdGhpcy5jdXN0b21Db21wb25lbnQuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufVxuIl19
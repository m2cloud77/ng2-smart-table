import { Component, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
export class CustomViewComponent {
    constructor(resolver) {
        this.resolver = resolver;
    }
    ngOnInit() {
        if (this.cell && !this.customComponent) {
            this.createCustomComponent();
            this.callOnComponentInit();
            this.patchInstance();
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
    createCustomComponent() {
        const componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
        this.customComponent = this.dynamicTarget.createComponent(componentFactory);
    }
    callOnComponentInit() {
        const onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
        onComponentInitFunction && onComponentInitFunction(this.customComponent.instance);
    }
    patchInstance() {
        Object.assign(this.customComponent.instance, this.getPatch());
    }
    getPatch() {
        return {
            value: this.cell.getValue(),
            rowData: this.cell.getRow().getData()
        };
    }
}
CustomViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'custom-view-component',
                template: `
    <ng-template #dynamicTarget></ng-template>
  `
            },] }
];
CustomViewComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
CustomViewComponent.propDecorators = {
    cell: [{ type: Input }],
    dynamicTarget: [{ type: ViewChild, args: ['dynamicTarget', { read: ViewContainerRef, static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95cy9naXQvbWNoYWluL25nMi1zbWFydC10YWJsZS9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLXZpZXctbW9kZS9jdXN0b20tdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxnQkFBZ0IsR0FHakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBU2xELE1BQU0sT0FBTyxtQkFBbUI7SUFNOUIsWUFBb0IsUUFBa0M7UUFBbEMsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7SUFDdEQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRVMscUJBQXFCO1FBQzdCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRVMsbUJBQW1CO1FBQzNCLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ25GLHVCQUF1QixJQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVTLGFBQWE7UUFDckIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRVMsUUFBUTtRQUNoQixPQUFPO1lBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRTtTQUN0QyxDQUFBO0lBQ0gsQ0FBQzs7O1lBaERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7O1lBZkMsd0JBQXdCOzs7bUJBbUJ2QixLQUFLOzRCQUNMLFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY2VsbCc7XG5pbXBvcnQgeyBWaWV3Q2VsbCB9IGZyb20gJy4vdmlldy1jZWxsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3VzdG9tLXZpZXctY29tcG9uZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI2R5bmFtaWNUYXJnZXQ+PC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBjdXN0b21Db21wb25lbnQ6IGFueTtcbiAgQElucHV0KCkgY2VsbDogQ2VsbDtcbiAgQFZpZXdDaGlsZCgnZHluYW1pY1RhcmdldCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pIGR5bmFtaWNUYXJnZXQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmNlbGwgJiYgIXRoaXMuY3VzdG9tQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLmNyZWF0ZUN1c3RvbUNvbXBvbmVudCgpO1xuICAgICAgdGhpcy5jYWxsT25Db21wb25lbnRJbml0KCk7XG4gICAgICB0aGlzLnBhdGNoSW5zdGFuY2UoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jdXN0b21Db21wb25lbnQpIHtcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlQ3VzdG9tQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5yZW5kZXJDb21wb25lbnQpO1xuICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50ID0gdGhpcy5keW5hbWljVGFyZ2V0LmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjYWxsT25Db21wb25lbnRJbml0KCkge1xuICAgIGNvbnN0IG9uQ29tcG9uZW50SW5pdEZ1bmN0aW9uID0gdGhpcy5jZWxsLmdldENvbHVtbigpLmdldE9uQ29tcG9uZW50SW5pdEZ1bmN0aW9uKCk7XG4gICAgb25Db21wb25lbnRJbml0RnVuY3Rpb24gJiYgb25Db21wb25lbnRJbml0RnVuY3Rpb24odGhpcy5jdXN0b21Db21wb25lbnQuaW5zdGFuY2UpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHBhdGNoSW5zdGFuY2UoKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmN1c3RvbUNvbXBvbmVudC5pbnN0YW5jZSwgdGhpcy5nZXRQYXRjaCgpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRQYXRjaCgpOiBWaWV3Q2VsbCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB0aGlzLmNlbGwuZ2V0VmFsdWUoKSxcbiAgICAgIHJvd0RhdGE6IHRoaXMuY2VsbC5nZXRSb3coKS5nZXREYXRhKClcbiAgICB9XG4gIH1cbn1cbiJdfQ==
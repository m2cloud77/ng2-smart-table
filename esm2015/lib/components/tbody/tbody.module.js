import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CellModule } from '../cell/cell.module';
import { Ng2SmartTableTbodyComponent } from './tbody.component';
import { TbodyCreateCancelComponent } from './cells/create-cancel.component';
import { TbodyEditDeleteComponent } from './cells/edit-delete.component';
import { TbodyCustomComponent } from './cells/custom.component';
const TBODY_COMPONENTS = [
    TbodyCreateCancelComponent,
    TbodyEditDeleteComponent,
    TbodyCustomComponent,
    Ng2SmartTableTbodyComponent
];
export class TBodyModule {
}
TBodyModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    CellModule,
                ],
                declarations: [
                    ...TBODY_COMPONENTS,
                ],
                exports: [
                    ...TBODY_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYWV5b25nL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGJvZHkvdGJvZHkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFakQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEUsTUFBTSxnQkFBZ0IsR0FBRztJQUN2QiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQiwyQkFBMkI7Q0FDNUIsQ0FBQztBQWVGLE1BQU0sT0FBTyxXQUFXOzs7WUFidkIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsVUFBVTtpQkFDWDtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osR0FBRyxnQkFBZ0I7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxHQUFHLGdCQUFnQjtpQkFDcEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENlbGxNb2R1bGUgfSBmcm9tICcuLi9jZWxsL2NlbGwubW9kdWxlJztcblxuaW1wb3J0IHsgTmcyU21hcnRUYWJsZVRib2R5Q29tcG9uZW50IH0gZnJvbSAnLi90Ym9keS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGJvZHlDcmVhdGVDYW5jZWxDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2NyZWF0ZS1jYW5jZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFRib2R5RWRpdERlbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvZWRpdC1kZWxldGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRib2R5Q3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9jdXN0b20uY29tcG9uZW50JztcblxuY29uc3QgVEJPRFlfQ09NUE9ORU5UUyA9IFtcbiAgVGJvZHlDcmVhdGVDYW5jZWxDb21wb25lbnQsXG4gIFRib2R5RWRpdERlbGV0ZUNvbXBvbmVudCxcbiAgVGJvZHlDdXN0b21Db21wb25lbnQsXG4gIE5nMlNtYXJ0VGFibGVUYm9keUNvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDZWxsTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5UQk9EWV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uVEJPRFlfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVEJvZHlNb2R1bGUgeyB9XG4iXX0=
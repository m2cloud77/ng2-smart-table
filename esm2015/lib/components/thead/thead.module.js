import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterModule } from '../filter/filter.module';
import { CellModule } from '../cell/cell.module';
import { Ng2SmartTableTheadComponent } from './thead.component';
import { ActionsComponent } from './cells/actions.component';
import { ActionsTitleComponent } from './cells/actions-title.component';
import { AddButtonComponent } from './cells/add-button.component';
import { CheckboxSelectAllComponent } from './cells/checkbox-select-all.component';
import { ColumnTitleComponent } from './cells/column-title.component';
import { TitleComponent } from './cells/title/title.component';
import { TheadFitlersRowComponent } from './rows/thead-filters-row.component';
import { TheadFormRowComponent } from './rows/thead-form-row.component';
import { TheadTitlesRowComponent } from './rows/thead-titles-row.component';
const THEAD_COMPONENTS = [
    ActionsComponent,
    ActionsTitleComponent,
    AddButtonComponent,
    CheckboxSelectAllComponent,
    ColumnTitleComponent,
    TitleComponent,
    TheadFitlersRowComponent,
    TheadFormRowComponent,
    TheadTitlesRowComponent,
    Ng2SmartTableTheadComponent,
];
export class THeadModule {
}
THeadModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    FilterModule,
                    CellModule,
                ],
                declarations: [
                    ...THEAD_COMPONENTS,
                ],
                exports: [
                    ...THEAD_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95cy9naXQvbWNoYWluL25nMi1zbWFydC10YWJsZS9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvdGhlYWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUU1RSxNQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtDQUM1QixDQUFDO0FBZ0JGLE1BQU0sT0FBTyxXQUFXOzs7WUFkdkIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixVQUFVO2lCQUNYO2dCQUNELFlBQVksRUFBRTtvQkFDWixHQUFHLGdCQUFnQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEdBQUcsZ0JBQWdCO2lCQUNwQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmlsdGVyTW9kdWxlIH0gZnJvbSAnLi4vZmlsdGVyL2ZpbHRlci5tb2R1bGUnO1xuaW1wb3J0IHsgQ2VsbE1vZHVsZSB9IGZyb20gJy4uL2NlbGwvY2VsbC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOZzJTbWFydFRhYmxlVGhlYWRDb21wb25lbnQgfSBmcm9tICcuL3RoZWFkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9hY3Rpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3Rpb25zVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2FjdGlvbnMtdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvYWRkLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tib3hTZWxlY3RBbGxDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2NoZWNrYm94LXNlbGVjdC1hbGwuY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtblRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9jb2x1bW4tdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy90aXRsZS90aXRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGhlYWRGaXRsZXJzUm93Q29tcG9uZW50IH0gZnJvbSAnLi9yb3dzL3RoZWFkLWZpbHRlcnMtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVhZEZvcm1Sb3dDb21wb25lbnQgfSBmcm9tICcuL3Jvd3MvdGhlYWQtZm9ybS1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFRoZWFkVGl0bGVzUm93Q29tcG9uZW50IH0gZnJvbSAnLi9yb3dzL3RoZWFkLXRpdGxlcy1yb3cuY29tcG9uZW50JztcblxuY29uc3QgVEhFQURfQ09NUE9ORU5UUyA9IFtcbiAgQWN0aW9uc0NvbXBvbmVudCxcbiAgQWN0aW9uc1RpdGxlQ29tcG9uZW50LFxuICBBZGRCdXR0b25Db21wb25lbnQsXG4gIENoZWNrYm94U2VsZWN0QWxsQ29tcG9uZW50LFxuICBDb2x1bW5UaXRsZUNvbXBvbmVudCxcbiAgVGl0bGVDb21wb25lbnQsXG4gIFRoZWFkRml0bGVyc1Jvd0NvbXBvbmVudCxcbiAgVGhlYWRGb3JtUm93Q29tcG9uZW50LFxuICBUaGVhZFRpdGxlc1Jvd0NvbXBvbmVudCxcbiAgTmcyU21hcnRUYWJsZVRoZWFkQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBGaWx0ZXJNb2R1bGUsXG4gICAgQ2VsbE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uVEhFQURfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLlRIRUFEX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRIZWFkTW9kdWxlIHsgfVxuIl19
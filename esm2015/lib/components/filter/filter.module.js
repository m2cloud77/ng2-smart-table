import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';
import { FilterComponent } from './filter.component';
import { DefaultFilterComponent } from "./default-filter.component";
import { CustomFilterComponent } from "./custom-filter.component";
import { CheckboxFilterComponent } from './filter-types/checkbox-filter.component';
import { CompleterFilterComponent } from './filter-types/completer-filter.component';
import { InputFilterComponent } from './filter-types/input-filter.component';
import { SelectFilterComponent } from './filter-types/select-filter.component';
import { DefaultFilter } from './filter-types/default-filter';
import { FilterDefault } from './filter-default';
const FILTER_COMPONENTS = [
    FilterDefault,
    DefaultFilter,
    FilterComponent,
    DefaultFilterComponent,
    CustomFilterComponent,
    CheckboxFilterComponent,
    CompleterFilterComponent,
    InputFilterComponent,
    SelectFilterComponent,
];
export class FilterModule {
}
FilterModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    Ng2CompleterModule,
                ],
                declarations: [
                    ...FILTER_COMPONENTS,
                ],
                exports: [
                    ...FILTER_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveXMvZ2l0L21jaGFpbi9uZzItc21hcnQtdGFibGUvcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQsTUFBTSxpQkFBaUIsR0FBRztJQUN4QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtDQUN0QixDQUFDO0FBZ0JGLE1BQU0sT0FBTyxZQUFZOzs7WUFkeEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixrQkFBa0I7aUJBQ25CO2dCQUNELFlBQVksRUFBRTtvQkFDWixHQUFHLGlCQUFpQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEdBQUcsaUJBQWlCO2lCQUNyQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nMkNvbXBsZXRlck1vZHVsZSB9IGZyb20gJ25nMi1jb21wbGV0ZXInO1xuXG5pbXBvcnQgeyBGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVmYXVsdEZpbHRlckNvbXBvbmVudCB9IGZyb20gXCIuL2RlZmF1bHQtZmlsdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3VzdG9tRmlsdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY3VzdG9tLWZpbHRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IENoZWNrYm94RmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItdHlwZXMvY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wbGV0ZXJGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci10eXBlcy9jb21wbGV0ZXItZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLXR5cGVzL2lucHV0LWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0RmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItdHlwZXMvc2VsZWN0LWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVmYXVsdEZpbHRlciB9IGZyb20gJy4vZmlsdGVyLXR5cGVzL2RlZmF1bHQtZmlsdGVyJztcbmltcG9ydCB7IEZpbHRlckRlZmF1bHQgfSBmcm9tICcuL2ZpbHRlci1kZWZhdWx0JztcblxuY29uc3QgRklMVEVSX0NPTVBPTkVOVFMgPSBbXG4gIEZpbHRlckRlZmF1bHQsXG4gIERlZmF1bHRGaWx0ZXIsXG4gIEZpbHRlckNvbXBvbmVudCxcbiAgRGVmYXVsdEZpbHRlckNvbXBvbmVudCxcbiAgQ3VzdG9tRmlsdGVyQ29tcG9uZW50LFxuICBDaGVja2JveEZpbHRlckNvbXBvbmVudCxcbiAgQ29tcGxldGVyRmlsdGVyQ29tcG9uZW50LFxuICBJbnB1dEZpbHRlckNvbXBvbmVudCxcbiAgU2VsZWN0RmlsdGVyQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5nMkNvbXBsZXRlck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uRklMVEVSX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5GSUxURVJfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyTW9kdWxlIHsgfVxuIl19
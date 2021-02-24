import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CellModule } from './components/cell/cell.module';
import { FilterModule } from './components/filter/filter.module';
import { PagerModule } from './components/pager/pager.module';
import { TBodyModule } from './components/tbody/tbody.module';
import { THeadModule } from './components/thead/thead.module';
import { Ng2SmartTableComponent } from './ng2-smart-table.component';
export class Ng2SmartTableModule {
}
Ng2SmartTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CellModule,
                    FilterModule,
                    PagerModule,
                    TBodyModule,
                    THeadModule,
                ],
                declarations: [
                    Ng2SmartTableComponent,
                ],
                exports: [
                    Ng2SmartTableComponent,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNtYXJ0LXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamFleW9uZy9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9uZzItc21hcnQtdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBb0JyRSxNQUFNLE9BQU8sbUJBQW1COzs7WUFsQi9CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsVUFBVTtvQkFDVixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxXQUFXO2lCQUNaO2dCQUNELFlBQVksRUFBRTtvQkFDWixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxzQkFBc0I7aUJBQ3ZCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBDZWxsTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NlbGwvY2VsbC5tb2R1bGUnO1xuaW1wb3J0IHsgRmlsdGVyTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIubW9kdWxlJztcbmltcG9ydCB7IFBhZ2VyTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VyL3BhZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBUQm9keU1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy90Ym9keS90Ym9keS5tb2R1bGUnO1xuaW1wb3J0IHsgVEhlYWRNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvdGhlYWQvdGhlYWQubW9kdWxlJztcblxuaW1wb3J0IHsgTmcyU21hcnRUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDZWxsTW9kdWxlLFxuICAgIEZpbHRlck1vZHVsZSxcbiAgICBQYWdlck1vZHVsZSxcbiAgICBUQm9keU1vZHVsZSxcbiAgICBUSGVhZE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmcyU21hcnRUYWJsZUNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5nMlNtYXJ0VGFibGVDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5nMlNtYXJ0VGFibGVNb2R1bGUge1xufVxuIl19
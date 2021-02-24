import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';
import { CellComponent } from './cell.component';
import { CustomEditComponent } from './cell-edit-mode/custom-edit.component';
import { DefaultEditComponent } from './cell-edit-mode/default-edit.component';
import { EditCellComponent } from './cell-edit-mode/edit-cell.component';
import { CheckboxEditorComponent } from './cell-editors/checkbox-editor.component';
import { CompleterEditorComponent } from './cell-editors/completer-editor.component';
import { InputEditorComponent } from './cell-editors/input-editor.component';
import { SelectEditorComponent } from './cell-editors/select-editor.component';
import { TextareaEditorComponent } from './cell-editors/textarea-editor.component';
import { CustomViewComponent } from './cell-view-mode/custom-view.component';
import { ViewCellComponent } from './cell-view-mode/view-cell.component';
import { EditCellDefault } from './cell-edit-mode/edit-cell-default';
import { DefaultEditor } from './cell-editors/default-editor';
const CELL_COMPONENTS = [
    CellComponent,
    EditCellDefault,
    DefaultEditor,
    CustomEditComponent,
    DefaultEditComponent,
    EditCellComponent,
    CheckboxEditorComponent,
    CompleterEditorComponent,
    InputEditorComponent,
    SelectEditorComponent,
    TextareaEditorComponent,
    CustomViewComponent,
    ViewCellComponent,
];
export class CellModule {
}
CellModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    Ng2CompleterModule,
                ],
                declarations: [
                    ...CELL_COMPONENTS,
                ],
                exports: [
                    ...CELL_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2phZXlvbmcvcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFOUQsTUFBTSxlQUFlLEdBQUc7SUFDdEIsYUFBYTtJQUNiLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ2xCLENBQUM7QUFlRixNQUFNLE9BQU8sVUFBVTs7O1lBYnRCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLEdBQUcsZUFBZTtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEdBQUcsZUFBZTtpQkFDbkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZzJDb21wbGV0ZXJNb2R1bGUgfSBmcm9tICduZzItY29tcGxldGVyJztcblxuaW1wb3J0IHsgQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tRWRpdENvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0LW1vZGUvY3VzdG9tLWVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IERlZmF1bHRFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXQtbW9kZS9kZWZhdWx0LWVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IEVkaXRDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXQtbW9kZS9lZGl0LWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrYm94RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXRvcnMvY2hlY2tib3gtZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wbGV0ZXJFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtZWRpdG9ycy9jb21wbGV0ZXItZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0b3JzL2lucHV0LWVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXRvcnMvc2VsZWN0LWVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dGFyZWFFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtZWRpdG9ycy90ZXh0YXJlYS1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbVZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtdmlldy1tb2RlL2N1c3RvbS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWV3Q2VsbENvbXBvbmVudCB9IGZyb20gJy4vY2VsbC12aWV3LW1vZGUvdmlldy1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFZGl0Q2VsbERlZmF1bHQgfSBmcm9tICcuL2NlbGwtZWRpdC1tb2RlL2VkaXQtY2VsbC1kZWZhdWx0JztcbmltcG9ydCB7IERlZmF1bHRFZGl0b3IgfSBmcm9tICcuL2NlbGwtZWRpdG9ycy9kZWZhdWx0LWVkaXRvcic7XG5cbmNvbnN0IENFTExfQ09NUE9ORU5UUyA9IFtcbiAgQ2VsbENvbXBvbmVudCxcbiAgRWRpdENlbGxEZWZhdWx0LFxuICBEZWZhdWx0RWRpdG9yLFxuICBDdXN0b21FZGl0Q29tcG9uZW50LFxuICBEZWZhdWx0RWRpdENvbXBvbmVudCxcbiAgRWRpdENlbGxDb21wb25lbnQsXG4gIENoZWNrYm94RWRpdG9yQ29tcG9uZW50LFxuICBDb21wbGV0ZXJFZGl0b3JDb21wb25lbnQsXG4gIElucHV0RWRpdG9yQ29tcG9uZW50LFxuICBTZWxlY3RFZGl0b3JDb21wb25lbnQsXG4gIFRleHRhcmVhRWRpdG9yQ29tcG9uZW50LFxuICBDdXN0b21WaWV3Q29tcG9uZW50LFxuICBWaWV3Q2VsbENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTmcyQ29tcGxldGVyTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5DRUxMX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5DRUxMX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENlbGxNb2R1bGUgeyB9XG4iXX0=
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { deepExtend, getPageForRowIndex } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';
export class Ng2SmartTableComponent {
    constructor() {
        this.settings = {};
        this.rowSelect = new EventEmitter();
        this.rowDeselect = new EventEmitter();
        this.userRowSelect = new EventEmitter();
        this.delete = new EventEmitter();
        this.edit = new EventEmitter();
        this.create = new EventEmitter();
        this.custom = new EventEmitter();
        this.deleteConfirm = new EventEmitter();
        this.editConfirm = new EventEmitter();
        this.createConfirm = new EventEmitter();
        this.rowHover = new EventEmitter();
        this.defaultSettings = {
            mode: 'inline',
            selectMode: 'single',
            selectedRowIndex: 0,
            switchPageToSelectedRowPage: false,
            hideHeader: false,
            hideSubHeader: false,
            actions: {
                columnTitle: 'Actions',
                add: true,
                edit: true,
                delete: true,
                custom: [],
                position: 'left',
            },
            filter: {
                inputClass: '',
            },
            edit: {
                inputClass: '',
                editButtonContent: 'Edit',
                saveButtonContent: 'Update',
                cancelButtonContent: 'Cancel',
                confirmSave: false,
            },
            add: {
                inputClass: '',
                addButtonContent: 'Add New',
                createButtonContent: 'Create',
                cancelButtonContent: 'Cancel',
                confirmCreate: false,
            },
            delete: {
                deleteButtonContent: 'Delete',
                confirmDelete: false,
            },
            attr: {
                id: '',
                class: '',
            },
            noDataMessage: 'No data found',
            columns: {},
            pager: {
                display: true,
                page: 1,
                perPage: 10,
                showPagesCount: 10
            },
            rowClassFunction: () => '',
        };
        this.isAllSelected = false;
        this.destroyed$ = new Subject();
    }
    ngOnChanges(changes) {
        if (this.grid) {
            if (changes['settings']) {
                this.grid.setSettings(this.prepareSettings());
            }
            if (changes['source']) {
                this.source = this.prepareSource();
                this.grid.setSource(this.source);
            }
        }
        else {
            this.initGrid();
        }
        this.tableId = this.grid.getSetting('attr.id');
        this.tableClass = this.grid.getSetting('attr.class');
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.perPageSelect = this.grid.getSetting('pager.perPageSelect');
        this.showPagesCount = this.grid.getSetting('pager.showPagesCount');
        this.rowClassFunction = this.grid.getSetting('rowClassFunction');
    }
    ngOnDestroy() {
        this.destroyed$.next();
    }
    selectRow(index, switchPageToSelectedRowPage = this.grid.getSetting('switchPageToSelectedRowPage')) {
        if (!this.grid) {
            return;
        }
        this.grid.settings.selectedRowIndex = index;
        if (this.isIndexOutOfRange(index)) {
            // we need to deselect all rows if we got an incorrect index
            this.deselectAllRows();
            return;
        }
        if (switchPageToSelectedRowPage) {
            const source = this.source;
            const paging = source.getPaging();
            const page = getPageForRowIndex(index, paging.perPage);
            index = index % paging.perPage;
            this.grid.settings.selectedRowIndex = index;
            if (page !== paging.page) {
                source.setPage(page);
                return;
            }
        }
        const row = this.grid.getRows()[index];
        if (row) {
            this.onSelectRow(row);
        }
        else {
            // we need to deselect all rows if we got an incorrect index
            this.deselectAllRows();
        }
    }
    deselectAllRows() {
        this.grid.dataSet.deselectAll();
        this.emitDeselectRow(null);
    }
    editRowSelect(row) {
        if (this.grid.getSetting('selectMode') === 'multi') {
            this.onMultipleSelectRow(row);
        }
        else {
            this.onSelectRow(row);
        }
    }
    onUserSelectRow(row) {
        if (this.grid.getSetting('selectMode') !== 'multi') {
            this.grid.selectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
        }
    }
    onRowHover(row) {
        this.rowHover.emit(row);
    }
    multipleSelectRow(row) {
        this.grid.multipleSelectRow(row);
        this.emitUserSelectRow(row);
        this.emitSelectRow(row);
    }
    onSelectAllRows($event) {
        this.isAllSelected = !this.isAllSelected;
        this.grid.selectAllRows(this.isAllSelected);
        this.emitUserSelectRow(null);
        this.emitSelectRow(null);
    }
    onSelectRow(row) {
        this.grid.selectRow(row);
        this.emitSelectRow(row);
    }
    onMultipleSelectRow(row) {
        this.emitSelectRow(row);
    }
    initGrid() {
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
        this.subscribeToOnSelectRow();
        this.subscribeToOnDeselectRow();
    }
    prepareSource() {
        if (this.source instanceof DataSource) {
            return this.source;
        }
        else if (this.source instanceof Array) {
            return new LocalDataSource(this.source);
        }
        return new LocalDataSource();
    }
    prepareSettings() {
        return deepExtend({}, this.defaultSettings, this.settings);
    }
    changePage($event) {
        this.resetAllSelector();
    }
    sort($event) {
        this.resetAllSelector();
    }
    filter($event) {
        this.resetAllSelector();
    }
    resetAllSelector() {
        this.isAllSelected = false;
    }
    emitUserSelectRow(row) {
        const selectedRows = this.grid.getSelectedRows();
        this.userRowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map((r) => r.getData()) : [],
        });
    }
    emitSelectRow(row) {
        const data = {
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
        };
        this.rowSelect.emit(data);
        if (!(row === null || row === void 0 ? void 0 : row.isSelected)) {
            this.rowDeselect.emit(data);
        }
    }
    emitDeselectRow(row) {
        this.rowDeselect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
        });
    }
    isIndexOutOfRange(index) {
        var _a;
        const dataAmount = (_a = this.source) === null || _a === void 0 ? void 0 : _a.count();
        return index < 0 || (typeof dataAmount === 'number' && index >= dataAmount);
    }
    subscribeToOnSelectRow() {
        if (this.onSelectRowSubscription) {
            this.onSelectRowSubscription.unsubscribe();
        }
        this.onSelectRowSubscription = this.grid.onSelectRow()
            .pipe(takeUntil(this.destroyed$))
            .subscribe((row) => {
            this.emitSelectRow(row);
        });
    }
    subscribeToOnDeselectRow() {
        if (this.onDeselectRowSubscription) {
            this.onDeselectRowSubscription.unsubscribe();
        }
        this.onDeselectRowSubscription = this.grid.onDeselectRow()
            .pipe(takeUntil(this.destroyed$))
            .subscribe((row) => {
            this.emitDeselectRow(row);
        });
    }
}
Ng2SmartTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng2-smart-table',
                template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\n\n  <thead ng2-st-thead *ngIf=\"!isHideHeader || !isHideSubHeader\"\n                      [grid]=\"grid\"\n                      [isAllSelected]=\"isAllSelected\"\n                      [source]=\"source\"\n                      [createConfirm]=\"createConfirm\"\n                      (create)=\"create.emit($event)\"\n                      (selectAllRows)=\"onSelectAllRows($event)\"\n                      (sort)=\"sort($event)\"\n                      (filter)=\"filter($event)\">\n  </thead>\n\n  <tbody ng2-st-tbody [grid]=\"grid\"\n                      [source]=\"source\"\n                      [deleteConfirm]=\"deleteConfirm\"\n                      [editConfirm]=\"editConfirm\"\n                      [rowClassFunction]=\"rowClassFunction\"\n                      (edit)=\"edit.emit($event)\"\n                      (delete)=\"delete.emit($event)\"\n                      (custom)=\"custom.emit($event)\"\n                      (userSelectRow)=\"onUserSelectRow($event)\"\n                      (editRowSelect)=\"editRowSelect($event)\"\n                      (multipleSelectRow)=\"multipleSelectRow($event)\"\n                      (rowHover)=\"onRowHover($event)\">\n  </tbody>\n\n</table>\n\n<ng2-smart-table-pager *ngIf=\"isPagerDisplay\"\n                        [source]=\"source\"\n                        [perPageSelect]=\"perPageSelect\"\n                        [showPagesCount]=\"showPagesCount\"\n                        (changePage)=\"changePage($event)\">\n</ng2-smart-table-pager>\n",
                styles: [":host{font-size:1rem}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep button,:host ::ng-deep input,:host ::ng-deep optgroup,:host ::ng-deep select,:host ::ng-deep textarea{color:inherit;font:inherit;margin:0}:host ::ng-deep table{border-collapse:collapse;border-spacing:0;display:table;line-height:1.5em;max-width:100%;overflow:auto;width:100%;word-break:normal;word-break:keep-all}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr section{font-size:.75em;font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host ::ng-deep a{color:#1e6bb8;text-decoration:none}:host ::ng-deep a:hover{text-decoration:underline}"]
            },] }
];
Ng2SmartTableComponent.propDecorators = {
    source: [{ type: Input }],
    settings: [{ type: Input }],
    rowSelect: [{ type: Output }],
    rowDeselect: [{ type: Output }],
    userRowSelect: [{ type: Output }],
    delete: [{ type: Output }],
    edit: [{ type: Output }],
    create: [{ type: Output }],
    custom: [{ type: Output }],
    deleteConfirm: [{ type: Output }],
    editConfirm: [{ type: Output }],
    createConfirm: [{ type: Output }],
    rowHover: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamFleW9uZy9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9uZzItc21hcnQtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBZ0IsWUFBWSxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFPNUUsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQVFXLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFFckIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMvQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsZ0JBQVcs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MEJBQ04sTUFBTTs0QkFDTixNQUFNO3VCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZSwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2xpYi9ncmlkJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuL2xpYi9kYXRhLXNldC9yb3cnO1xuaW1wb3J0IHsgZGVlcEV4dGVuZCwgZ2V0UGFnZUZvclJvd0luZGV4IH0gZnJvbSAnLi9saWIvaGVscGVycyc7XG5pbXBvcnQgeyBMb2NhbERhdGFTb3VyY2UgfSBmcm9tICcuL2xpYi9kYXRhLXNvdXJjZS9sb2NhbC9sb2NhbC5kYXRhLXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZScsXG4gIHN0eWxlVXJsczogWycuL25nMi1zbWFydC10YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTmcyU21hcnRUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSBzb3VyY2U6IGFueTtcbiAgQElucHV0KCkgc2V0dGluZ3M6IE9iamVjdCA9IHt9O1xuXG4gIEBPdXRwdXQoKSByb3dTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHJvd0Rlc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSB1c2VyUm93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY3VzdG9tID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkZWxldGVDb25maXJtID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlZGl0Q29uZmlybSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY3JlYXRlQ29uZmlybSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcm93SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgdGFibGVDbGFzczogc3RyaW5nO1xuICB0YWJsZUlkOiBzdHJpbmc7XG4gIHBlclBhZ2VTZWxlY3Q6IGFueTtcbiAgaXNIaWRlSGVhZGVyOiBib29sZWFuO1xuICBpc0hpZGVTdWJIZWFkZXI6IGJvb2xlYW47XG4gIGlzUGFnZXJEaXNwbGF5OiBib29sZWFuO1xuICBzaG93UGFnZXNDb3VudDogbnVtYmVyO1xuICByb3dDbGFzc0Z1bmN0aW9uOiBGdW5jdGlvbjtcblxuICBncmlkOiBHcmlkO1xuICBkZWZhdWx0U2V0dGluZ3M6IE9iamVjdCA9IHtcbiAgICBtb2RlOiAnaW5saW5lJywgLy8gaW5saW5lfGV4dGVybmFsfGNsaWNrLXRvLWVkaXRcbiAgICBzZWxlY3RNb2RlOiAnc2luZ2xlJywgLy8gc2luZ2xlfG11bHRpXG4gICAgc2VsZWN0ZWRSb3dJbmRleDogMCwgLy8gcG9pbnRzIHRvIGFuIGVsZW1lbnQgaW4gYWxsIGRhdGFcbiAgICBzd2l0Y2hQYWdlVG9TZWxlY3RlZFJvd1BhZ2U6IGZhbHNlLFxuICAgIGhpZGVIZWFkZXI6IGZhbHNlLFxuICAgIGhpZGVTdWJIZWFkZXI6IGZhbHNlLFxuICAgIGFjdGlvbnM6IHtcbiAgICAgIGNvbHVtblRpdGxlOiAnQWN0aW9ucycsXG4gICAgICBhZGQ6IHRydWUsXG4gICAgICBlZGl0OiB0cnVlLFxuICAgICAgZGVsZXRlOiB0cnVlLFxuICAgICAgY3VzdG9tOiBbXSxcbiAgICAgIHBvc2l0aW9uOiAnbGVmdCcsIC8vIGxlZnR8cmlnaHRcbiAgICB9LFxuICAgIGZpbHRlcjoge1xuICAgICAgaW5wdXRDbGFzczogJycsXG4gICAgfSxcbiAgICBlZGl0OiB7XG4gICAgICBpbnB1dENsYXNzOiAnJyxcbiAgICAgIGVkaXRCdXR0b25Db250ZW50OiAnRWRpdCcsXG4gICAgICBzYXZlQnV0dG9uQ29udGVudDogJ1VwZGF0ZScsXG4gICAgICBjYW5jZWxCdXR0b25Db250ZW50OiAnQ2FuY2VsJyxcbiAgICAgIGNvbmZpcm1TYXZlOiBmYWxzZSxcbiAgICB9LFxuICAgIGFkZDoge1xuICAgICAgaW5wdXRDbGFzczogJycsXG4gICAgICBhZGRCdXR0b25Db250ZW50OiAnQWRkIE5ldycsXG4gICAgICBjcmVhdGVCdXR0b25Db250ZW50OiAnQ3JlYXRlJyxcbiAgICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6ICdDYW5jZWwnLFxuICAgICAgY29uZmlybUNyZWF0ZTogZmFsc2UsXG4gICAgfSxcbiAgICBkZWxldGU6IHtcbiAgICAgIGRlbGV0ZUJ1dHRvbkNvbnRlbnQ6ICdEZWxldGUnLFxuICAgICAgY29uZmlybURlbGV0ZTogZmFsc2UsXG4gICAgfSxcbiAgICBhdHRyOiB7XG4gICAgICBpZDogJycsXG4gICAgICBjbGFzczogJycsXG4gICAgfSxcbiAgICBub0RhdGFNZXNzYWdlOiAnTm8gZGF0YSBmb3VuZCcsXG4gICAgY29sdW1uczoge30sXG4gICAgcGFnZXI6IHtcbiAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICBwYWdlOiAxLFxuICAgICAgcGVyUGFnZTogMTAsXG4gICAgICBzaG93UGFnZXNDb3VudDogMTAgXG4gICAgfSxcbiAgICByb3dDbGFzc0Z1bmN0aW9uOiAoKSA9PiAnJyxcbiAgfTtcblxuICBpc0FsbFNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBvblNlbGVjdFJvd1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIG9uRGVzZWxlY3RSb3dTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgaWYgKGNoYW5nZXNbJ3NldHRpbmdzJ10pIHtcbiAgICAgICAgdGhpcy5ncmlkLnNldFNldHRpbmdzKHRoaXMucHJlcGFyZVNldHRpbmdzKCkpO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZXNbJ3NvdXJjZSddKSB7XG4gICAgICAgIHRoaXMuc291cmNlID0gdGhpcy5wcmVwYXJlU291cmNlKCk7XG4gICAgICAgIHRoaXMuZ3JpZC5zZXRTb3VyY2UodGhpcy5zb3VyY2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRHcmlkKCk7XG4gICAgfVxuICAgIHRoaXMudGFibGVJZCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhdHRyLmlkJyk7XG4gICAgdGhpcy50YWJsZUNsYXNzID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2F0dHIuY2xhc3MnKTtcbiAgICB0aGlzLmlzSGlkZUhlYWRlciA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdoaWRlSGVhZGVyJyk7XG4gICAgdGhpcy5pc0hpZGVTdWJIZWFkZXIgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnaGlkZVN1YkhlYWRlcicpO1xuICAgIHRoaXMuaXNQYWdlckRpc3BsYXkgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygncGFnZXIuZGlzcGxheScpO1xuICAgIHRoaXMuaXNQYWdlckRpc3BsYXkgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygncGFnZXIuZGlzcGxheScpO1xuICAgIHRoaXMucGVyUGFnZVNlbGVjdCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdwYWdlci5wZXJQYWdlU2VsZWN0Jyk7XG4gICAgdGhpcy5zaG93UGFnZXNDb3VudCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdwYWdlci5zaG93UGFnZXNDb3VudCcpO1xuICAgIHRoaXMucm93Q2xhc3NGdW5jdGlvbiA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdyb3dDbGFzc0Z1bmN0aW9uJyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICB9XG5cbiAgc2VsZWN0Um93KGluZGV4OiBudW1iZXIsIHN3aXRjaFBhZ2VUb1NlbGVjdGVkUm93UGFnZTogYm9vbGVhbiA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdzd2l0Y2hQYWdlVG9TZWxlY3RlZFJvd1BhZ2UnKSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5ncmlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZ3JpZC5zZXR0aW5ncy5zZWxlY3RlZFJvd0luZGV4ID0gaW5kZXg7XG4gICAgaWYgKHRoaXMuaXNJbmRleE91dE9mUmFuZ2UoaW5kZXgpKSB7XG4gICAgICAvLyB3ZSBuZWVkIHRvIGRlc2VsZWN0IGFsbCByb3dzIGlmIHdlIGdvdCBhbiBpbmNvcnJlY3QgaW5kZXhcbiAgICAgIHRoaXMuZGVzZWxlY3RBbGxSb3dzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN3aXRjaFBhZ2VUb1NlbGVjdGVkUm93UGFnZSkge1xuICAgICAgY29uc3Qgc291cmNlOiBEYXRhU291cmNlID0gdGhpcy5zb3VyY2U7XG4gICAgICBjb25zdCBwYWdpbmc6IHsgcGFnZTogbnVtYmVyLCBwZXJQYWdlOiBudW1iZXIgfSA9IHNvdXJjZS5nZXRQYWdpbmcoKTtcbiAgICAgIGNvbnN0IHBhZ2U6IG51bWJlciA9IGdldFBhZ2VGb3JSb3dJbmRleChpbmRleCwgcGFnaW5nLnBlclBhZ2UpO1xuICAgICAgaW5kZXggPSBpbmRleCAlIHBhZ2luZy5wZXJQYWdlO1xuICAgICAgdGhpcy5ncmlkLnNldHRpbmdzLnNlbGVjdGVkUm93SW5kZXggPSBpbmRleDtcblxuICAgICAgaWYgKHBhZ2UgIT09IHBhZ2luZy5wYWdlKSB7XG4gICAgICAgIHNvdXJjZS5zZXRQYWdlKHBhZ2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCByb3c6IFJvdyA9IHRoaXMuZ3JpZC5nZXRSb3dzKClbaW5kZXhdO1xuICAgIGlmIChyb3cpIHtcbiAgICAgIHRoaXMub25TZWxlY3RSb3cocm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gd2UgbmVlZCB0byBkZXNlbGVjdCBhbGwgcm93cyBpZiB3ZSBnb3QgYW4gaW5jb3JyZWN0IGluZGV4XG4gICAgICB0aGlzLmRlc2VsZWN0QWxsUm93cygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVzZWxlY3RBbGxSb3dzKCk6IHZvaWQge1xuICAgIHRoaXMuZ3JpZC5kYXRhU2V0LmRlc2VsZWN0QWxsKCk7XG4gICAgdGhpcy5lbWl0RGVzZWxlY3RSb3cobnVsbCk7XG4gIH1cblxuICBlZGl0Um93U2VsZWN0KHJvdzogUm93KSB7XG4gICAgaWYgKHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdzZWxlY3RNb2RlJykgPT09ICdtdWx0aScpIHtcbiAgICAgIHRoaXMub25NdWx0aXBsZVNlbGVjdFJvdyhyb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uU2VsZWN0Um93KHJvdyk7XG4gICAgfVxuICB9XG5cbiAgb25Vc2VyU2VsZWN0Um93KHJvdzogUm93KSB7XG4gICAgaWYgKHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdzZWxlY3RNb2RlJykgIT09ICdtdWx0aScpIHtcbiAgICAgIHRoaXMuZ3JpZC5zZWxlY3RSb3cocm93KTtcbiAgICAgIHRoaXMuZW1pdFVzZXJTZWxlY3RSb3cocm93KTtcbiAgICAgIHRoaXMuZW1pdFNlbGVjdFJvdyhyb3cpO1xuICAgIH1cbiAgfVxuXG4gIG9uUm93SG92ZXIocm93OiBSb3cpIHtcbiAgICB0aGlzLnJvd0hvdmVyLmVtaXQocm93KTtcbiAgfVxuXG4gIG11bHRpcGxlU2VsZWN0Um93KHJvdzogUm93KSB7XG4gICAgdGhpcy5ncmlkLm11bHRpcGxlU2VsZWN0Um93KHJvdyk7XG4gICAgdGhpcy5lbWl0VXNlclNlbGVjdFJvdyhyb3cpO1xuICAgIHRoaXMuZW1pdFNlbGVjdFJvdyhyb3cpO1xuICB9XG5cbiAgb25TZWxlY3RBbGxSb3dzKCRldmVudDogYW55KSB7XG4gICAgdGhpcy5pc0FsbFNlbGVjdGVkID0gIXRoaXMuaXNBbGxTZWxlY3RlZDtcbiAgICB0aGlzLmdyaWQuc2VsZWN0QWxsUm93cyh0aGlzLmlzQWxsU2VsZWN0ZWQpO1xuXG4gICAgdGhpcy5lbWl0VXNlclNlbGVjdFJvdyhudWxsKTtcbiAgICB0aGlzLmVtaXRTZWxlY3RSb3cobnVsbCk7XG4gIH1cblxuICBvblNlbGVjdFJvdyhyb3c6IFJvdykge1xuICAgIHRoaXMuZ3JpZC5zZWxlY3RSb3cocm93KTtcbiAgICB0aGlzLmVtaXRTZWxlY3RSb3cocm93KTtcbiAgfVxuXG4gIG9uTXVsdGlwbGVTZWxlY3RSb3cocm93OiBSb3cpIHtcbiAgICB0aGlzLmVtaXRTZWxlY3RSb3cocm93KTtcbiAgfVxuXG4gIGluaXRHcmlkKCkge1xuICAgIHRoaXMuc291cmNlID0gdGhpcy5wcmVwYXJlU291cmNlKCk7XG4gICAgdGhpcy5ncmlkID0gbmV3IEdyaWQodGhpcy5zb3VyY2UsIHRoaXMucHJlcGFyZVNldHRpbmdzKCkpO1xuXG4gICAgdGhpcy5zdWJzY3JpYmVUb09uU2VsZWN0Um93KCk7XG4gICAgdGhpcy5zdWJzY3JpYmVUb09uRGVzZWxlY3RSb3coKTtcbiAgfVxuXG4gIHByZXBhcmVTb3VyY2UoKTogRGF0YVNvdXJjZSB7XG4gICAgaWYgKHRoaXMuc291cmNlIGluc3RhbmNlb2YgRGF0YVNvdXJjZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgcmV0dXJuIG5ldyBMb2NhbERhdGFTb3VyY2UodGhpcy5zb3VyY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgTG9jYWxEYXRhU291cmNlKCk7XG4gIH1cblxuICBwcmVwYXJlU2V0dGluZ3MoKTogT2JqZWN0IHtcbiAgICByZXR1cm4gZGVlcEV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0U2V0dGluZ3MsIHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgY2hhbmdlUGFnZSgkZXZlbnQ6IGFueSkge1xuICAgIHRoaXMucmVzZXRBbGxTZWxlY3RvcigpO1xuICB9XG5cbiAgc29ydCgkZXZlbnQ6IGFueSkge1xuICAgIHRoaXMucmVzZXRBbGxTZWxlY3RvcigpO1xuICB9XG5cbiAgZmlsdGVyKCRldmVudDogYW55KSB7XG4gICAgdGhpcy5yZXNldEFsbFNlbGVjdG9yKCk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0QWxsU2VsZWN0b3IoKSB7XG4gICAgdGhpcy5pc0FsbFNlbGVjdGVkID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGVtaXRVc2VyU2VsZWN0Um93KHJvdzogUm93KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRSb3dzID0gdGhpcy5ncmlkLmdldFNlbGVjdGVkUm93cygpO1xuXG4gICAgdGhpcy51c2VyUm93U2VsZWN0LmVtaXQoe1xuICAgICAgZGF0YTogcm93ID8gcm93LmdldERhdGEoKSA6IG51bGwsXG4gICAgICBpc1NlbGVjdGVkOiByb3cgPyByb3cuZ2V0SXNTZWxlY3RlZCgpIDogbnVsbCxcbiAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICBzZWxlY3RlZDogc2VsZWN0ZWRSb3dzICYmIHNlbGVjdGVkUm93cy5sZW5ndGggPyBzZWxlY3RlZFJvd3MubWFwKChyOiBSb3cpID0+IHIuZ2V0RGF0YSgpKSA6IFtdLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0U2VsZWN0Um93KHJvdzogUm93KSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGRhdGE6IHJvdyA/IHJvdy5nZXREYXRhKCkgOiBudWxsLFxuICAgICAgaXNTZWxlY3RlZDogcm93ID8gcm93LmdldElzU2VsZWN0ZWQoKSA6IG51bGwsXG4gICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgIH07XG4gICAgdGhpcy5yb3dTZWxlY3QuZW1pdChkYXRhKTtcbiAgICBpZiAoIXJvdz8uaXNTZWxlY3RlZCkge1xuICAgICAgdGhpcy5yb3dEZXNlbGVjdC5lbWl0KGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZW1pdERlc2VsZWN0Um93KHJvdzogUm93KTogdm9pZCB7XG4gICAgdGhpcy5yb3dEZXNlbGVjdC5lbWl0KHtcbiAgICAgIGRhdGE6IHJvdyA/IHJvdy5nZXREYXRhKCkgOiBudWxsLFxuICAgICAgaXNTZWxlY3RlZDogcm93ID8gcm93LmdldElzU2VsZWN0ZWQoKSA6IG51bGwsXG4gICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0luZGV4T3V0T2ZSYW5nZShpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGF0YUFtb3VudDogbnVtYmVyID0gdGhpcy5zb3VyY2U/LmNvdW50KCk7XG4gICAgcmV0dXJuIGluZGV4IDwgMCB8fCAodHlwZW9mIGRhdGFBbW91bnQgPT09ICdudW1iZXInICYmIGluZGV4ID49IGRhdGFBbW91bnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb09uU2VsZWN0Um93KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9uU2VsZWN0Um93U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm9uU2VsZWN0Um93U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMub25TZWxlY3RSb3dTdWJzY3JpcHRpb24gPSB0aGlzLmdyaWQub25TZWxlY3RSb3coKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpXG4gICAgICAuc3Vic2NyaWJlKChyb3cpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0U2VsZWN0Um93KHJvdyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9PbkRlc2VsZWN0Um93KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9uRGVzZWxlY3RSb3dTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMub25EZXNlbGVjdFJvd1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLm9uRGVzZWxlY3RSb3dTdWJzY3JpcHRpb24gPSB0aGlzLmdyaWQub25EZXNlbGVjdFJvdygpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHJvdykgPT4ge1xuICAgICAgICB0aGlzLmVtaXREZXNlbGVjdFJvdyhyb3cpO1xuICAgICAgfSk7XG4gIH1cblxufVxuIl19
import { SimpleChange, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { Row } from './lib/data-set/row';
export declare class Ng2SmartTableComponent implements OnChanges, OnDestroy {
    source: any;
    settings: Object;
    rowSelect: EventEmitter<any>;
    rowDeselect: EventEmitter<any>;
    userRowSelect: EventEmitter<any>;
    delete: EventEmitter<any>;
    edit: EventEmitter<any>;
    create: EventEmitter<any>;
    custom: EventEmitter<any>;
    deleteConfirm: EventEmitter<any>;
    editConfirm: EventEmitter<any>;
    createConfirm: EventEmitter<any>;
    rowHover: EventEmitter<any>;
    tableClass: string;
    tableId: string;
    perPageSelect: any;
    isHideHeader: boolean;
    isHideSubHeader: boolean;
    isPagerDisplay: boolean;
    showPagesCount: number;
    rowClassFunction: Function;
    grid: Grid;
    defaultSettings: Object;
    isAllSelected: boolean;
    private onSelectRowSubscription;
    private onDeselectRowSubscription;
    private destroyed$;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
    selectRow(index: number, switchPageToSelectedRowPage?: boolean): void;
    private deselectAllRows;
    editRowSelect(row: Row): void;
    onUserSelectRow(row: Row): void;
    onRowHover(row: Row): void;
    multipleSelectRow(row: Row): void;
    onSelectAllRows($event: any): void;
    onSelectRow(row: Row): void;
    onMultipleSelectRow(row: Row): void;
    initGrid(): void;
    prepareSource(): DataSource;
    prepareSettings(): Object;
    changePage($event: any): void;
    sort($event: any): void;
    filter($event: any): void;
    private resetAllSelector;
    private emitUserSelectRow;
    private emitSelectRow;
    private emitDeselectRow;
    private isIndexOutOfRange;
    private subscribeToOnSelectRow;
    private subscribeToOnDeselectRow;
}

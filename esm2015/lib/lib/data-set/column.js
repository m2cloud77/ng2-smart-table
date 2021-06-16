export class Column {
    constructor(id, settings, dataSet) {
        this.id = id;
        this.settings = settings;
        this.dataSet = dataSet;
        this.title = '';
        this.type = '';
        this.class = '';
        this.width = '';
        this.hide = false;
        this.isSortable = false;
        this.isEditable = true;
        this.isAddable = true;
        this.isFilterable = false;
        this.sortDirection = '';
        this.defaultSortDirection = '';
        this.editor = { type: '', config: {}, component: null };
        this.filter = { type: '', config: {}, component: null };
        this.renderComponent = null;
        this.process();
    }
    getOnComponentInitFunction() {
        return this.onComponentInitFunction;
    }
    getCompareFunction() {
        return this.compareFunction;
    }
    getValuePrepareFunction() {
        return this.valuePrepareFunction;
    }
    getFilterFunction() {
        return this.filterFunction;
    }
    getConfig() {
        return this.editor && this.editor.config;
    }
    getFilterType() {
        return this.filter && this.filter.type;
    }
    getFilterConfig() {
        return this.filter && this.filter.config;
    }
    process() {
        this.title = this.settings['title'];
        this.class = this.settings['class'];
        this.width = this.settings['width'];
        this.hide = !!this.settings['hide'];
        this.type = this.prepareType();
        this.editor = this.settings['editor'];
        this.filter = this.settings['filter'];
        this.renderComponent = this.settings['renderComponent'];
        this.isFilterable = typeof this.settings['filter'] === 'undefined' ? true : !!this.settings['filter'];
        this.defaultSortDirection = ['asc', 'desc']
            .indexOf(this.settings['sortDirection']) !== -1 ? this.settings['sortDirection'] : '';
        this.isSortable = typeof this.settings['sort'] === 'undefined' ? true : !!this.settings['sort'];
        this.isEditable = typeof this.settings['editable'] === 'undefined' ? true : !!this.settings['editable'];
        this.isAddable = typeof this.settings['addable'] === 'undefined' ? true : !!this.settings['addable'];
        this.sortDirection = this.prepareSortDirection();
        this.compareFunction = this.settings['compareFunction'];
        this.valuePrepareFunction = this.settings['valuePrepareFunction'];
        this.filterFunction = this.settings['filterFunction'];
        this.onComponentInitFunction = this.settings['onComponentInitFunction'];
    }
    prepareType() {
        return this.settings['type'] || this.determineType();
    }
    prepareSortDirection() {
        return this.settings['sort'] === 'desc' ? 'desc' : 'asc';
    }
    determineType() {
        // TODO: determine type by data
        return 'text';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYWV5b25nL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjLyIsInNvdXJjZXMiOlsibGliL2xpYi9kYXRhLXNldC9jb2x1bW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLE1BQU07SUFxQmpCLFlBQW1CLEVBQVUsRUFBWSxRQUFhLEVBQVksT0FBZ0I7UUFBL0QsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUFZLGFBQVEsR0FBUixRQUFRLENBQUs7UUFBWSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBbkJsRixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFNBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IseUJBQW9CLEdBQVcsRUFBRSxDQUFDO1FBQ2xDLFdBQU0sR0FBa0QsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ2xHLFdBQU0sR0FBa0QsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ2xHLG9CQUFlLEdBQVEsSUFBSSxDQUFDO1FBTzFCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsMEJBQTBCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3RD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QUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDM0QsQ0FBQztJQUVELGFBQWE7UUFDWCwrQkFBK0I7UUFDL0IsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNldCB9IGZyb20gJy4vZGF0YS1zZXQnO1xuXG5leHBvcnQgY2xhc3MgQ29sdW1uIHtcblxuICB0aXRsZTogc3RyaW5nID0gJyc7XG4gIHR5cGU6IHN0cmluZyA9ICcnO1xuICBjbGFzczogc3RyaW5nID0gJyc7XG4gIHdpZHRoOiBzdHJpbmcgPSAnJztcbiAgaGlkZTogYm9vbGVhbiA9IGZhbHNlO1xuICBpc1NvcnRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIGlzRWRpdGFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBpc0FkZGFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBpc0ZpbHRlcmFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc29ydERpcmVjdGlvbjogc3RyaW5nID0gJyc7XG4gIGRlZmF1bHRTb3J0RGlyZWN0aW9uOiBzdHJpbmcgPSAnJztcbiAgZWRpdG9yOiB7IHR5cGU6IHN0cmluZywgY29uZmlnOiBhbnksIGNvbXBvbmVudDogYW55IH0gPSB7IHR5cGU6ICcnLCBjb25maWc6IHt9LCBjb21wb25lbnQ6IG51bGwgfTtcbiAgZmlsdGVyOiB7IHR5cGU6IHN0cmluZywgY29uZmlnOiBhbnksIGNvbXBvbmVudDogYW55IH0gPSB7IHR5cGU6ICcnLCBjb25maWc6IHt9LCBjb21wb25lbnQ6IG51bGwgfTtcbiAgcmVuZGVyQ29tcG9uZW50OiBhbnkgPSBudWxsO1xuICBjb21wYXJlRnVuY3Rpb246IEZ1bmN0aW9uO1xuICB2YWx1ZVByZXBhcmVGdW5jdGlvbjogRnVuY3Rpb247XG4gIGZpbHRlckZ1bmN0aW9uOiBGdW5jdGlvbjtcbiAgb25Db21wb25lbnRJbml0RnVuY3Rpb246IEZ1bmN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogc3RyaW5nLCBwcm90ZWN0ZWQgc2V0dGluZ3M6IGFueSwgcHJvdGVjdGVkIGRhdGFTZXQ6IERhdGFTZXQpIHtcbiAgICB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuXG4gIGdldE9uQ29tcG9uZW50SW5pdEZ1bmN0aW9uKCk6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5vbkNvbXBvbmVudEluaXRGdW5jdGlvbjtcbiAgfVxuXG4gIGdldENvbXBhcmVGdW5jdGlvbigpOiBGdW5jdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZUZ1bmN0aW9uO1xuICB9XG5cbiAgZ2V0VmFsdWVQcmVwYXJlRnVuY3Rpb24oKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLnZhbHVlUHJlcGFyZUZ1bmN0aW9uO1xuICB9XG5cbiAgZ2V0RmlsdGVyRnVuY3Rpb24oKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLmZpbHRlckZ1bmN0aW9uO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yICYmIHRoaXMuZWRpdG9yLmNvbmZpZztcbiAgfVxuXG4gIGdldEZpbHRlclR5cGUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXIgJiYgdGhpcy5maWx0ZXIudHlwZTtcbiAgfVxuXG4gIGdldEZpbHRlckNvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmZpbHRlciAmJiB0aGlzLmZpbHRlci5jb25maWc7XG4gIH1cblxuICBwcm90ZWN0ZWQgcHJvY2VzcygpIHtcbiAgICB0aGlzLnRpdGxlID0gdGhpcy5zZXR0aW5nc1sndGl0bGUnXTtcbiAgICB0aGlzLmNsYXNzID0gdGhpcy5zZXR0aW5nc1snY2xhc3MnXTtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5zZXR0aW5nc1snd2lkdGgnXTtcbiAgICB0aGlzLmhpZGUgPSAhIXRoaXMuc2V0dGluZ3NbJ2hpZGUnXTtcbiAgICB0aGlzLnR5cGUgPSB0aGlzLnByZXBhcmVUeXBlKCk7XG4gICAgdGhpcy5lZGl0b3IgPSB0aGlzLnNldHRpbmdzWydlZGl0b3InXTtcbiAgICB0aGlzLmZpbHRlciA9IHRoaXMuc2V0dGluZ3NbJ2ZpbHRlciddO1xuICAgIHRoaXMucmVuZGVyQ29tcG9uZW50ID0gdGhpcy5zZXR0aW5nc1sncmVuZGVyQ29tcG9uZW50J107XG5cbiAgICB0aGlzLmlzRmlsdGVyYWJsZSA9IHR5cGVvZiB0aGlzLnNldHRpbmdzWydmaWx0ZXInXSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogISF0aGlzLnNldHRpbmdzWydmaWx0ZXInXTtcbiAgICB0aGlzLmRlZmF1bHRTb3J0RGlyZWN0aW9uID0gWydhc2MnLCAnZGVzYyddXG4gICAgICAuaW5kZXhPZih0aGlzLnNldHRpbmdzWydzb3J0RGlyZWN0aW9uJ10pICE9PSAtMSA/IHRoaXMuc2V0dGluZ3NbJ3NvcnREaXJlY3Rpb24nXSA6ICcnO1xuICAgIHRoaXMuaXNTb3J0YWJsZSA9IHR5cGVvZiB0aGlzLnNldHRpbmdzWydzb3J0J10gPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6ICEhdGhpcy5zZXR0aW5nc1snc29ydCddO1xuICAgIHRoaXMuaXNFZGl0YWJsZSA9IHR5cGVvZiB0aGlzLnNldHRpbmdzWydlZGl0YWJsZSddID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiAhIXRoaXMuc2V0dGluZ3NbJ2VkaXRhYmxlJ107XG4gICAgdGhpcy5pc0FkZGFibGU9dHlwZW9mIHRoaXMuc2V0dGluZ3NbJ2FkZGFibGUnXSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogISF0aGlzLnNldHRpbmdzWydhZGRhYmxlJ107XG4gICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gdGhpcy5wcmVwYXJlU29ydERpcmVjdGlvbigpO1xuXG4gICAgdGhpcy5jb21wYXJlRnVuY3Rpb24gPSB0aGlzLnNldHRpbmdzWydjb21wYXJlRnVuY3Rpb24nXTtcbiAgICB0aGlzLnZhbHVlUHJlcGFyZUZ1bmN0aW9uID0gdGhpcy5zZXR0aW5nc1sndmFsdWVQcmVwYXJlRnVuY3Rpb24nXTtcbiAgICB0aGlzLmZpbHRlckZ1bmN0aW9uID0gdGhpcy5zZXR0aW5nc1snZmlsdGVyRnVuY3Rpb24nXTtcbiAgICB0aGlzLm9uQ29tcG9uZW50SW5pdEZ1bmN0aW9uID0gdGhpcy5zZXR0aW5nc1snb25Db21wb25lbnRJbml0RnVuY3Rpb24nXTtcbiAgfVxuXG4gIHByZXBhcmVUeXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3NbJ3R5cGUnXSB8fCB0aGlzLmRldGVybWluZVR5cGUoKTtcbiAgfVxuXG4gIHByZXBhcmVTb3J0RGlyZWN0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3NbJ3NvcnQnXSA9PT0gJ2Rlc2MnID8gJ2Rlc2MnIDogJ2FzYyc7XG4gIH1cblxuICBkZXRlcm1pbmVUeXBlKCk6IHN0cmluZyB7XG4gICAgLy8gVE9ETzogZGV0ZXJtaW5lIHR5cGUgYnkgZGF0YVxuICAgIHJldHVybiAndGV4dCc7XG4gIH1cbn1cbiJdfQ==
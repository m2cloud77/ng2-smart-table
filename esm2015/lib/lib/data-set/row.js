import { Cell } from './cell';
export class Row {
    constructor(index, data, _dataSet) {
        this.index = index;
        this.data = data;
        this._dataSet = _dataSet;
        this.isSelected = false;
        this.isInEditing = false;
        this.cells = [];
        this.process();
    }
    getCell(column) {
        return this.cells.find(el => el.getColumn() === column);
    }
    getCells() {
        return this.cells;
    }
    getData() {
        return this.data;
    }
    getIsSelected() {
        return this.isSelected;
    }
    getNewData() {
        const values = Object.assign({}, this.data);
        this.getCells().forEach((cell) => values[cell.getColumn().id] = cell.newValue);
        return values;
    }
    setData(data) {
        this.data = data;
        this.process();
    }
    process() {
        this.cells = [];
        this._dataSet.getColumns().forEach((column) => {
            const cell = this.createCell(column);
            this.cells.push(cell);
        });
    }
    createCell(column) {
        const defValue = column.settings.defaultValue ? column.settings.defaultValue : '';
        const value = typeof this.data[column.id] === 'undefined' ? defValue : this.data[column.id];
        return new Cell(value, this, column, this._dataSet);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYWV5b25nL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjLyIsInNvdXJjZXMiOlsibGliL2xpYi9kYXRhLXNldC9yb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUk5QixNQUFNLE9BQU8sR0FBRztJQU9kLFlBQW1CLEtBQWEsRUFBWSxJQUFTLEVBQVksUUFBaUI7UUFBL0QsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFZLFNBQUksR0FBSixJQUFJLENBQUs7UUFBWSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBTGxGLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsVUFBSyxHQUFnQixFQUFFLENBQUM7UUFJdEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxPQUFPLENBQUMsTUFBYztRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxVQUFVO1FBQ1IsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9FLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBUztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDcEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBYztRQUN2QixNQUFNLFFBQVEsR0FBSSxNQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUUsTUFBYyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNwRyxNQUFNLEtBQUssR0FBRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1RixPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi9jZWxsJztcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4vY29sdW1uJztcbmltcG9ydCB7IERhdGFTZXQgfSBmcm9tICcuL2RhdGEtc2V0JztcblxuZXhwb3J0IGNsYXNzIFJvdyB7XG5cbiAgaXNTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBpc0luRWRpdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBjZWxsczogQXJyYXk8Q2VsbD4gPSBbXTtcblxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmRleDogbnVtYmVyLCBwcm90ZWN0ZWQgZGF0YTogYW55LCBwcm90ZWN0ZWQgX2RhdGFTZXQ6IERhdGFTZXQpIHtcbiAgICB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuXG4gIGdldENlbGwoY29sdW1uOiBDb2x1bW4pOiBDZWxsIHtcbiAgICByZXR1cm4gdGhpcy5jZWxscy5maW5kKGVsID0+IGVsLmdldENvbHVtbigpID09PSBjb2x1bW4pO1xuICB9XG5cbiAgZ2V0Q2VsbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2VsbHM7XG4gIH1cblxuICBnZXREYXRhKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIGdldElzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZDtcbiAgfVxuXG4gIGdldE5ld0RhdGEoKTogYW55IHtcbiAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRhdGEpO1xuICAgIHRoaXMuZ2V0Q2VsbHMoKS5mb3JFYWNoKChjZWxsKSA9PiB2YWx1ZXNbY2VsbC5nZXRDb2x1bW4oKS5pZF0gPSBjZWxsLm5ld1ZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgc2V0RGF0YShkYXRhOiBhbnkpOiBhbnkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5wcm9jZXNzKCk7XG4gIH1cblxuICBwcm9jZXNzKCkge1xuICAgIHRoaXMuY2VsbHMgPSBbXTtcbiAgICB0aGlzLl9kYXRhU2V0LmdldENvbHVtbnMoKS5mb3JFYWNoKChjb2x1bW46IENvbHVtbikgPT4ge1xuICAgICAgY29uc3QgY2VsbCA9IHRoaXMuY3JlYXRlQ2VsbChjb2x1bW4pO1xuICAgICAgdGhpcy5jZWxscy5wdXNoKGNlbGwpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlQ2VsbChjb2x1bW46IENvbHVtbik6IENlbGwge1xuICAgIGNvbnN0IGRlZlZhbHVlID0gKGNvbHVtbiBhcyBhbnkpLnNldHRpbmdzLmRlZmF1bHRWYWx1ZSA/IChjb2x1bW4gYXMgYW55KS5zZXR0aW5ncy5kZWZhdWx0VmFsdWUgOiAnJztcbiAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiB0aGlzLmRhdGFbY29sdW1uLmlkXSA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZWYWx1ZSA6IHRoaXMuZGF0YVtjb2x1bW4uaWRdO1xuICAgIHJldHVybiBuZXcgQ2VsbCh2YWx1ZSwgdGhpcywgY29sdW1uLCB0aGlzLl9kYXRhU2V0KTtcbiAgfVxufVxuIl19
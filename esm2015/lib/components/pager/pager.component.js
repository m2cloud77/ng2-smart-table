import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataSource } from '../../lib/data-source/data-source';
export class PagerComponent {
    constructor() {
        this.perPageSelect = [];
        this.changePage = new EventEmitter();
        this.count = 0;
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                this.page = this.source.getPaging().page;
                this.perPage = this.source.getPaging().perPage;
                this.currentPerPage = this.perPage;
                this.count = this.source.count();
                if (this.isPageOutOfBounce()) {
                    this.source.setPage(--this.page);
                }
                this.processPageChange(dataChanges);
                this.initPages();
            });
        }
    }
    /**
     * We change the page here depending on the action performed against data source
     * if a new element was added to the end of the table - then change the page to the last
     * if a new element was added to the beginning of the table - then to the first page
     * @param changes
     */
    processPageChange(changes) {
        if (changes['action'] === 'prepend') {
            this.source.setPage(1);
        }
        if (changes['action'] === 'append') {
            this.source.setPage(this.getLast());
        }
    }
    shouldShow() {
        return this.source.count() > this.perPage;
    }
    paginate(page) {
        this.source.setPage(page);
        this.page = page;
        this.changePage.emit({ page });
        return false;
    }
    next() {
        return this.paginate(this.getPage() + 1);
    }
    prev() {
        return this.paginate(this.getPage() - 1);
    }
    getPage() {
        return this.page;
    }
    getPages() {
        return this.pages;
    }
    getLast() {
        return Math.ceil(this.count / this.perPage);
    }
    isPageOutOfBounce() {
        return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
    }
    initPages() {
        const pagesCount = this.getLast();
        let showPagesCount = 10;
        showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
        this.pages = [];
        if (this.shouldShow()) {
            let middleOne = Math.ceil(showPagesCount / 2);
            middleOne = this.page >= middleOne ? this.page : middleOne;
            let lastOne = middleOne + Math.floor(showPagesCount / 2);
            lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
            const firstOne = lastOne - showPagesCount + 1;
            for (let i = firstOne; i <= lastOne; i++) {
                this.pages.push(i);
            }
        }
    }
    onChangePerPage(event) {
        if (this.currentPerPage) {
            if (typeof this.currentPerPage === 'string' && this.currentPerPage.toLowerCase() === 'all') {
                this.source.getPaging().perPage = null;
            }
            else {
                this.source.getPaging().perPage = this.currentPerPage * 1;
                this.source.refresh();
            }
            this.initPages();
        }
    }
}
PagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng2-smart-table-pager',
                template: `
    <nav *ngIf="shouldShow()" class="ng2-smart-pagination-nav">
      <ul class="ng2-smart-pagination pagination">
        <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
          <a class="ng2-smart-page-link page-link" href="#"
          (click)="getPage() == 1 ? false : paginate(1)" aria-label="First">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">First</span>
          </a>
        </li>
        <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
          <a class="ng2-smart-page-link page-link page-link-prev" href="#"
             (click)="getPage() == 1 ? false : prev()" aria-label="Prev">
            <span aria-hidden="true">&lt;</span>
            <span class="sr-only">Prev</span>
          </a>
        </li>
        <li class="ng2-smart-page-item page-item"
        [ngClass]="{active: getPage() == page}" *ngFor="let page of getPages()">
          <span class="ng2-smart-page-link page-link"
          *ngIf="getPage() == page">{{ page }} <span class="sr-only">(current)</span></span>
          <a class="ng2-smart-page-link page-link" href="#"
          (click)="paginate(page)" *ngIf="getPage() != page">{{ page }}</a>
        </li>

        <li class="ng2-smart-page-item page-item"
            [ngClass]="{disabled: getPage() == getLast()}">
          <a class="ng2-smart-page-link page-link page-link-next" href="#"
             (click)="getPage() == getLast() ? false : next()" aria-label="Next">
            <span aria-hidden="true">&gt;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
        
        <li class="ng2-smart-page-item page-item"
        [ngClass]="{disabled: getPage() == getLast()}">
          <a class="ng2-smart-page-link page-link" href="#"
          (click)="getPage() == getLast() ? false : paginate(getLast())" aria-label="Last">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Last</span>
          </a>
        </li>
      </ul>
    </nav>
    
    <nav *ngIf="perPageSelect && perPageSelect.length > 0" class="ng2-smart-pagination-per-page">
      <label for="per-page">
        Per Page:
      </label>
      <select (change)="onChangePerPage($event)" [(ngModel)]="currentPerPage" id="per-page">
        <option *ngFor="let item of perPageSelect" [value]="item">{{ item }}</option>
      </select>
    </nav>
  `,
                styles: [".ng2-smart-pagination{display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination .sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.ng2-smart-pagination .ng2-smart-page-item{display:inline}.ng2-smart-pagination .ng2-smart-page-link{padding:.75rem .5rem!important}.ng2-smart-pagination .page-link-next,.ng2-smart-pagination .page-link-prev{font-size:10px}:host{display:flex;justify-content:space-between}:host label,:host select{margin:1rem 0 1rem 1rem}:host label{line-height:2.5rem}"]
            },] }
];
PagerComponent.propDecorators = {
    source: [{ type: Input }],
    perPageSelect: [{ type: Input }],
    changePage: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYWV5b25nL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnZXIvcGFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBR2pHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQTREL0QsTUFBTSxPQUFPLGNBQWM7SUExRDNCO1FBNkRXLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBRXpCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBTXJDLFVBQUssR0FBVyxDQUFDLENBQUM7SUE4RzlCLENBQUM7SUF6R0MsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkM7WUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ3RFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDbkMsSUFBSSxDQUFDLEtBQUssR0FB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IEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZS1wYWdlcicsXG4gIHN0eWxlVXJsczogWycuL3BhZ2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5hdiAqbmdJZj1cInNob3VsZFNob3coKVwiIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2luYXRpb24tbmF2XCI+XG4gICAgICA8dWwgY2xhc3M9XCJuZzItc21hcnQtcGFnaW5hdGlvbiBwYWdpbmF0aW9uXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWl0ZW0gcGFnZS1pdGVtXCIgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBnZXRQYWdlKCkgPT0gMX1cIj5cbiAgICAgICAgICA8YSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWxpbmsgcGFnZS1saW5rXCIgaHJlZj1cIiNcIlxuICAgICAgICAgIChjbGljayk9XCJnZXRQYWdlKCkgPT0gMSA/IGZhbHNlIDogcGFnaW5hdGUoMSlcIiBhcmlhLWxhYmVsPVwiRmlyc3RcIj5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZsYXF1bzs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5GaXJzdDwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWl0ZW0gcGFnZS1pdGVtXCIgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBnZXRQYWdlKCkgPT0gMX1cIj5cbiAgICAgICAgICA8YSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWxpbmsgcGFnZS1saW5rIHBhZ2UtbGluay1wcmV2XCIgaHJlZj1cIiNcIlxuICAgICAgICAgICAgIChjbGljayk9XCJnZXRQYWdlKCkgPT0gMSA/IGZhbHNlIDogcHJldigpXCIgYXJpYS1sYWJlbD1cIlByZXZcIj5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZsdDs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtaXRlbSBwYWdlLWl0ZW1cIlxuICAgICAgICBbbmdDbGFzc109XCJ7YWN0aXZlOiBnZXRQYWdlKCkgPT0gcGFnZX1cIiAqbmdGb3I9XCJsZXQgcGFnZSBvZiBnZXRQYWdlcygpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuZzItc21hcnQtcGFnZS1saW5rIHBhZ2UtbGlua1wiXG4gICAgICAgICAgKm5nSWY9XCJnZXRQYWdlKCkgPT0gcGFnZVwiPnt7IHBhZ2UgfX0gPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+KGN1cnJlbnQpPC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgICA8YSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWxpbmsgcGFnZS1saW5rXCIgaHJlZj1cIiNcIlxuICAgICAgICAgIChjbGljayk9XCJwYWdpbmF0ZShwYWdlKVwiICpuZ0lmPVwiZ2V0UGFnZSgpICE9IHBhZ2VcIj57eyBwYWdlIH19PC9hPlxuICAgICAgICA8L2xpPlxuXG4gICAgICAgIDxsaSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWl0ZW0gcGFnZS1pdGVtXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZ2V0UGFnZSgpID09IGdldExhc3QoKX1cIj5cbiAgICAgICAgICA8YSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWxpbmsgcGFnZS1saW5rIHBhZ2UtbGluay1uZXh0XCIgaHJlZj1cIiNcIlxuICAgICAgICAgICAgIChjbGljayk9XCJnZXRQYWdlKCkgPT0gZ2V0TGFzdCgpID8gZmFsc2UgOiBuZXh0KClcIiBhcmlhLWxhYmVsPVwiTmV4dFwiPlxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICBcbiAgICAgICAgPGxpIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtaXRlbSBwYWdlLWl0ZW1cIlxuICAgICAgICBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6IGdldFBhZ2UoKSA9PSBnZXRMYXN0KCl9XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1saW5rIHBhZ2UtbGlua1wiIGhyZWY9XCIjXCJcbiAgICAgICAgICAoY2xpY2spPVwiZ2V0UGFnZSgpID09IGdldExhc3QoKSA/IGZhbHNlIDogcGFnaW5hdGUoZ2V0TGFzdCgpKVwiIGFyaWEtbGFiZWw9XCJMYXN0XCI+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mcmFxdW87PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TGFzdDwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICAgIFxuICAgIDxuYXYgKm5nSWY9XCJwZXJQYWdlU2VsZWN0ICYmIHBlclBhZ2VTZWxlY3QubGVuZ3RoID4gMFwiIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2luYXRpb24tcGVyLXBhZ2VcIj5cbiAgICAgIDxsYWJlbCBmb3I9XCJwZXItcGFnZVwiPlxuICAgICAgICBQZXIgUGFnZTpcbiAgICAgIDwvbGFiZWw+XG4gICAgICA8c2VsZWN0IChjaGFuZ2UpPVwib25DaGFuZ2VQZXJQYWdlKCRldmVudClcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRQZXJQYWdlXCIgaWQ9XCJwZXItcGFnZVwiPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBlclBhZ2VTZWxlY3RcIiBbdmFsdWVdPVwiaXRlbVwiPnt7IGl0ZW0gfX08L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvbmF2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xuICBASW5wdXQoKSBwZXJQYWdlU2VsZWN0OiBhbnlbXSA9IFtdO1xuXG4gIEBPdXRwdXQoKSBjaGFuZ2VQYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY3VycmVudFBlclBhZ2U6IGFueTtcblxuICBwcm90ZWN0ZWQgcGFnZXM6IEFycmF5PGFueT47XG4gIHByb3RlY3RlZCBwYWdlOiBudW1iZXI7XG4gIHByb3RlY3RlZCBjb3VudDogbnVtYmVyID0gMDtcbiAgcHJvdGVjdGVkIHBlclBhZ2U6IG51bWJlcjtcblxuICBwcm90ZWN0ZWQgZGF0YUNoYW5nZWRTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuc291cmNlKSB7XG4gICAgICBpZiAoIWNoYW5nZXMuc291cmNlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZWRTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YUNoYW5nZWRTdWIgPSB0aGlzLnNvdXJjZS5vbkNoYW5nZWQoKS5zdWJzY3JpYmUoKGRhdGFDaGFuZ2VzKSA9PiB7XG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBhZ2U7XG4gICAgICAgIHRoaXMucGVyUGFnZSA9IHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2U7XG4gICAgICAgIHRoaXMuY3VycmVudFBlclBhZ2UgPSB0aGlzLnBlclBhZ2U7XG4gICAgICAgIHRoaXMuY291bnQgPSB0aGlzLnNvdXJjZS5jb3VudCgpO1xuICAgICAgICBpZiAodGhpcy5pc1BhZ2VPdXRPZkJvdW5jZSgpKSB7XG4gICAgICAgICAgdGhpcy5zb3VyY2Uuc2V0UGFnZSgtLXRoaXMucGFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb2Nlc3NQYWdlQ2hhbmdlKGRhdGFDaGFuZ2VzKTtcbiAgICAgICAgdGhpcy5pbml0UGFnZXMoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjaGFuZ2UgdGhlIHBhZ2UgaGVyZSBkZXBlbmRpbmcgb24gdGhlIGFjdGlvbiBwZXJmb3JtZWQgYWdhaW5zdCBkYXRhIHNvdXJjZVxuICAgKiBpZiBhIG5ldyBlbGVtZW50IHdhcyBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSB0YWJsZSAtIHRoZW4gY2hhbmdlIHRoZSBwYWdlIHRvIHRoZSBsYXN0XG4gICAqIGlmIGEgbmV3IGVsZW1lbnQgd2FzIGFkZGVkIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHRhYmxlIC0gdGhlbiB0byB0aGUgZmlyc3QgcGFnZVxuICAgKiBAcGFyYW0gY2hhbmdlc1xuICAgKi9cbiAgcHJvY2Vzc1BhZ2VDaGFuZ2UoY2hhbmdlczogYW55KSB7XG4gICAgaWYgKGNoYW5nZXNbJ2FjdGlvbiddID09PSAncHJlcGVuZCcpIHtcbiAgICAgIHRoaXMuc291cmNlLnNldFBhZ2UoMSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydhY3Rpb24nXSA9PT0gJ2FwcGVuZCcpIHtcbiAgICAgIHRoaXMuc291cmNlLnNldFBhZ2UodGhpcy5nZXRMYXN0KCkpO1xuICAgIH1cbiAgfVxuXG4gIHNob3VsZFNob3coKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlLmNvdW50KCkgPiB0aGlzLnBlclBhZ2U7XG4gIH1cblxuICBwYWdpbmF0ZShwYWdlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICB0aGlzLnNvdXJjZS5zZXRQYWdlKHBhZ2UpO1xuICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgdGhpcy5jaGFuZ2VQYWdlLmVtaXQoeyBwYWdlIH0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG5leHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdGUodGhpcy5nZXRQYWdlKCkgKyAxKTtcbiAgfVxuXG4gIHByZXYoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdGUodGhpcy5nZXRQYWdlKCkgLSAxKTtcbiAgfVxuXG4gIGdldFBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlO1xuICB9XG5cbiAgZ2V0UGFnZXMoKTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZXM7XG4gIH1cblxuICBnZXRMYXN0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLmNvdW50IC8gdGhpcy5wZXJQYWdlKTtcbiAgfVxuXG4gIGlzUGFnZU91dE9mQm91bmNlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5wYWdlICogdGhpcy5wZXJQYWdlKSA+PSAodGhpcy5jb3VudCArIHRoaXMucGVyUGFnZSkgJiYgdGhpcy5wYWdlID4gMTtcbiAgfVxuXG4gIGluaXRQYWdlcygpIHtcbiAgICBjb25zdCBwYWdlc0NvdW50ID0gdGhpcy5nZXRMYXN0KCk7XG4gICAgbGV0IHNob3dQYWdlc0NvdW50ID0gMTA7XG4gICAgc2hvd1BhZ2VzQ291bnQgPSBwYWdlc0NvdW50IDwgc2hvd1BhZ2VzQ291bnQgPyBwYWdlc0NvdW50IDogc2hvd1BhZ2VzQ291bnQ7XG4gICAgdGhpcy5wYWdlcyA9IFtdO1xuXG4gICAgaWYgKHRoaXMuc2hvdWxkU2hvdygpKSB7XG5cbiAgICAgIGxldCBtaWRkbGVPbmUgPSBNYXRoLmNlaWwoc2hvd1BhZ2VzQ291bnQgLyAyKTtcbiAgICAgIG1pZGRsZU9uZSA9IHRoaXMucGFnZSA+PSBtaWRkbGVPbmUgPyB0aGlzLnBhZ2UgOiBtaWRkbGVPbmU7XG5cbiAgICAgIGxldCBsYXN0T25lID0gbWlkZGxlT25lICsgTWF0aC5mbG9vcihzaG93UGFnZXNDb3VudCAvIDIpO1xuICAgICAgbGFzdE9uZSA9IGxhc3RPbmUgPj0gcGFnZXNDb3VudCA/IHBhZ2VzQ291bnQgOiBsYXN0T25lO1xuXG4gICAgICBjb25zdCBmaXJzdE9uZSA9IGxhc3RPbmUgLSBzaG93UGFnZXNDb3VudCArIDE7XG5cbiAgICAgIGZvciAobGV0IGkgPSBmaXJzdE9uZTsgaSA8PSBsYXN0T25lOyBpKyspIHtcbiAgICAgICAgdGhpcy5wYWdlcy5wdXNoKGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlUGVyUGFnZShldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFBlclBhZ2UpIHtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmN1cnJlbnRQZXJQYWdlID09PSAnc3RyaW5nJyAmJiB0aGlzLmN1cnJlbnRQZXJQYWdlLnRvTG93ZXJDYXNlKCkgPT09ICdhbGwnKSB7XG4gICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2UgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGVyUGFnZSA9IHRoaXMuY3VycmVudFBlclBhZ2UgKiAxO1xuICAgICAgICB0aGlzLnNvdXJjZS5yZWZyZXNoKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmluaXRQYWdlcygpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=
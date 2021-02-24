import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { CompleterService } from 'ng2-completer';
import { DefaultFilter } from './default-filter';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
export class CompleterFilterComponent extends DefaultFilter {
    constructor(completerService) {
        super();
        this.completerService = completerService;
        this.completerContent = new Subject();
    }
    ngOnInit() {
        const config = this.column.getFilterConfig().completer;
        config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
        config.dataService.descriptionField(config.descriptionField);
        this.changesSubscription = this.completerContent
            .pipe(map((ev) => (ev && ev.title) || ev || ''), distinctUntilChanged(), debounceTime(this.delay))
            .subscribe((search) => {
            this.query = search;
            this.setFilter();
        });
    }
    inputTextChanged(event) {
        // workaround to trigger the search event when the home/end buttons are clicked
        // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
        // so here it gets called manually
        if (event === '') {
            this.completerContent.next(event);
        }
    }
}
CompleterFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'completer-filter',
                template: `
    <ng2-completer [(ngModel)]="query"
                   (ngModelChange)="inputTextChanged($event)"
                   [dataService]="column.getFilterConfig().completer.dataService"
                   [minSearchLength]="column.getFilterConfig().completer.minSearchLength || 0"
                   [pause]="column.getFilterConfig().completer.pause || 0"
                   [placeholder]="column.getFilterConfig().completer.placeholder || 'Start typing...'"
                   (selected)="completerContent.next($event)">
    </ng2-completer>
  `
            },] }
];
CompleterFilterComponent.ctorParameters = () => [
    { type: CompleterService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2phZXlvbmcvcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLXR5cGVzL2NvbXBsZXRlci1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFlekUsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGFBQWE7SUFJekQsWUFBb0IsZ0JBQWtDO1FBQ3BELEtBQUssRUFBRSxDQUFDO1FBRFUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUZ0RCxxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO0lBSXRDLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxTQUFTLENBQUM7UUFDdkQsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQjthQUM3QyxJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUM5QyxvQkFBb0IsRUFBRSxFQUN0QixZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUN6QjthQUNBLFNBQVMsQ0FBQyxDQUFDLE1BQWMsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFhO1FBQzVCLCtFQUErRTtRQUMvRSxpR0FBaUc7UUFDakcsa0NBQWtDO1FBQ2xDLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7OztHQVNUO2FBQ0Y7OztZQWpCUSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29tcGxldGVyU2VydmljZSB9IGZyb20gJ25nMi1jb21wbGV0ZXInO1xuXG5pbXBvcnQgeyBEZWZhdWx0RmlsdGVyIH0gZnJvbSAnLi9kZWZhdWx0LWZpbHRlcic7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZGVib3VuY2VUaW1lLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbXBsZXRlci1maWx0ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZzItY29tcGxldGVyIFsobmdNb2RlbCldPVwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImlucHV0VGV4dENoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgW2RhdGFTZXJ2aWNlXT1cImNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS5jb21wbGV0ZXIuZGF0YVNlcnZpY2VcIlxuICAgICAgICAgICAgICAgICAgIFttaW5TZWFyY2hMZW5ndGhdPVwiY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmNvbXBsZXRlci5taW5TZWFyY2hMZW5ndGggfHwgMFwiXG4gICAgICAgICAgICAgICAgICAgW3BhdXNlXT1cImNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS5jb21wbGV0ZXIucGF1c2UgfHwgMFwiXG4gICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS5jb21wbGV0ZXIucGxhY2Vob2xkZXIgfHwgJ1N0YXJ0IHR5cGluZy4uLidcIlxuICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZCk9XCJjb21wbGV0ZXJDb250ZW50Lm5leHQoJGV2ZW50KVwiPlxuICAgIDwvbmcyLWNvbXBsZXRlcj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29tcGxldGVyRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEZpbHRlciBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29tcGxldGVyQ29udGVudCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBsZXRlclNlcnZpY2U6IENvbXBsZXRlclNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuY29tcGxldGVyO1xuICAgIGNvbmZpZy5kYXRhU2VydmljZSA9IHRoaXMuY29tcGxldGVyU2VydmljZS5sb2NhbChjb25maWcuZGF0YSwgY29uZmlnLnNlYXJjaEZpZWxkcywgY29uZmlnLnRpdGxlRmllbGQpO1xuICAgIGNvbmZpZy5kYXRhU2VydmljZS5kZXNjcmlwdGlvbkZpZWxkKGNvbmZpZy5kZXNjcmlwdGlvbkZpZWxkKTtcblxuICAgIHRoaXMuY2hhbmdlc1N1YnNjcmlwdGlvbiA9IHRoaXMuY29tcGxldGVyQ29udGVudFxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoZXY6IGFueSkgPT4gKGV2ICYmIGV2LnRpdGxlKSB8fCBldiB8fCAnJyksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIGRlYm91bmNlVGltZSh0aGlzLmRlbGF5KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoc2VhcmNoOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHNlYXJjaDtcbiAgICAgICAgdGhpcy5zZXRGaWx0ZXIoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgaW5wdXRUZXh0Q2hhbmdlZChldmVudDogc3RyaW5nKSB7XG4gICAgLy8gd29ya2Fyb3VuZCB0byB0cmlnZ2VyIHRoZSBzZWFyY2ggZXZlbnQgd2hlbiB0aGUgaG9tZS9lbmQgYnV0dG9ucyBhcmUgY2xpY2tlZFxuICAgIC8vIHdoZW4gdGhpcyBoYXBwZW5zIHRoZSBbKG5nTW9kZWwpXT1cInF1ZXJ5XCIgaXMgc2V0IHRvIFwiXCIgYnV0IHRoZSAoc2VsZWN0ZWQpIG1ldGhvZCBpcyBub3QgY2FsbGVkXG4gICAgLy8gc28gaGVyZSBpdCBnZXRzIGNhbGxlZCBtYW51YWxseVxuICAgIGlmIChldmVudCA9PT0gJycpIHtcbiAgICAgIHRoaXMuY29tcGxldGVyQ29udGVudC5uZXh0KGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
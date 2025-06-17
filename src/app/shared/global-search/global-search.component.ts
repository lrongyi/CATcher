import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.css']
})
export class GlobalSearchComponent {
  searchValue = '';
  @Output() search = new EventEmitter<string>();

  onSearchChange(value: string) {
    this.searchValue = value;
    this.search.emit(this.searchValue);
  }
}

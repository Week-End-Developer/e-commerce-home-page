import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-categories-side-bar',
    templateUrl: './categories-side-bar.component.html',
    styleUrls: ['./categories-side-bar.component.css']
})
export class CategoriesSideBarComponent implements OnInit {

    //
    @Output() onSelectChange = new EventEmitter();

    //
    activeMenu = 1;

    //
    constructor() { }

    //
    ngOnInit(): void { }

    onSelectCategory(categoryId: number) {
        this.onSelectChange.emit(categoryId)
    }

}

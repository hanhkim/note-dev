import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note/note.service';
import { Router } from '@angular/router'
import * as $ from 'jquery';

@Component({
    selector: 'app-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
    group: string;
    listGroup: any[] = [];
    titleGroupEdit: boolean = false;
    rowClick: number;

    notes: any;

    constructor(
        private noteService: NoteService,
        private router: Router
    ) { 
        
    }

    ngOnInit() {
        this.loadListGroup();
    }

    loadListGroup() {
        this.noteService.loadListGroup()
            .subscribe(data => {
                this.listGroup = data;
            }, err => console.log(err))
    }

    createNewGroup() {
        this.noteService.createNewGroup(this.group)
            .subscribe(data => {
                this.loadListGroup();
            }, err =>console.log(err))
    }

    deleteGroup(group) {
        this.noteService.deleteGroup(group._id)
            .subscribe(data => {
                this.loadListGroup();
            }, err => console.log(err))
    }

    changeTitleGroup(gr) {
        this.titleGroupEdit = false;
        this.noteService.updateTitleGroup(gr)
            .subscribe(data => {
                this.loadListGroup();
            }, err => console.log(err))
    }

    loadNoteOfGroup(idGroup) {
        this.noteService.loadNotesOfGroup(idGroup)
            .subscribe(data => {
                this.notes = data;
            }, err => console.log(err))
    }

    showChild(e, gr) {
        var t = $(e.target);
        t.toggleClass("down");  // transform icon chervon 90deg
        
        // show or hide note in group
        $(e.target.parentNode).siblings().toggleClass("show");

        this.loadNoteOfGroup(gr._id);
    }

    createNote(gr) {
        this.router.navigate([`/note/${gr._id}`]);
    }
}

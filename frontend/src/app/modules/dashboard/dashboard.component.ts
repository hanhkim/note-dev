import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../services/note/note.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    note = {
        id: "",
        idGroup: "",
        title: "",
        content: ""
    }

    booleanEditAction: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private noteService: NoteService
    ) { 
        route.params.subscribe(url => {
            this.note.idGroup = url.idGroup;
            this.note.id = url.id;    
            this.loadNote(); // load note
        })
    }

    ngOnInit() {
        // this.note.idGroup = this.route.snapshot.paramMap.get("idGroup");
        // this.note.id = this.route.snapshot.paramMap.get("id");
        // this.loadNote(); // load note
    }

    loadNote() {
        this.noteService.loadNote(this.note.idGroup, this.note.id)
            .subscribe(data => {
                this.note.title = data[0].title;
                this.note.content = data[0].content;
            }, err => console.log(err))
    }

    editNote() {
        this.booleanEditAction = true;
    }

    saveNote() {
        if (this.booleanEditAction) {
            this.noteService.updateNote(this.note)
                .subscribe(data => {
                    this.booleanEditAction = false;

                }, err => console.log(err))
        }
    }

    deleteNote() {
        this.noteService.deleteNote(this.note)
            .subscribe(data => {
                this.router.navigate(["/"]);
                alert("Delete ok")

            }, err => console.log(err))
    }
}

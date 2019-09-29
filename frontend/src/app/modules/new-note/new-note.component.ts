import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../../services/note/note.service';

@Component({
    selector: 'app-new-note',
    templateUrl: './new-note.component.html',
    styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {
    note = {
        idGroup: "",
        title: "",
        content: ""
    }
    constructor(
        private route: ActivatedRoute,
        private noteService: NoteService
    ) { }

    ngOnInit() {
    }

    getIdGroup() {
        this.note.idGroup = this.route.snapshot.paramMap.get("idGroup");
    }

    createNote() {
        this.getIdGroup();

        this.noteService.createNote(this.note)
            .subscribe(data => {
                console.log(data)
            })
    }
}

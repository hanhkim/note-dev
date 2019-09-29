import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

    constructor(
        private httpService: HttpService
    ) { }
    
    loadListGroup() {
        return this.httpService.get('group');
    }

    createNewGroup(name: string) {
        return this.httpService.post('group', name);
    }

    deleteGroup(id: string) {
        return this.httpService.delete('group', id);
    }

    updateTitleGroup(group: any) {
        return this.httpService.put('group', group)
    }

    createNote(note: any) {
        return this.httpService.post('note', note);
    }

    loadNotesOfGroup(idGroup: string) {
        return this.httpService.getParams('note', idGroup);
    }

    loadNote(idGroup, idNote) {
        return this.httpService.get(`note/${idGroup}/${idNote}`);
    }
}

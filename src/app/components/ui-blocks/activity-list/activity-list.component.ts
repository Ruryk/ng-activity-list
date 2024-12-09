import { Component } from '@angular/core';
import { TimelineComponent } from '../timeline/timeline.component';
import { NotesFormComponent } from '../../form-fields/notes-form/notes-form.component';

@Component({
  selector: 'app-activity-list',
  standalone: true,
  imports: [
    TimelineComponent,
    NotesFormComponent
  ],
  templateUrl: './activity-list.component.html',
  styleUrl: './activity-list.component.scss'
})
export class ActivityListComponent {

}

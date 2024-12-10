import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

// Components
import { IconComponent } from '../icon/icon.component';

// Models
import { INote } from '../../../core/interfaces/notes.interfaces';

// Configs
import { CActionsText } from '../../../core/constants/notes.constants';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [
    IconComponent,
    MatTooltip
  ],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteComponent {
  @Input() note: INote;

  @Output() deleteNote = new EventEmitter<string>();

  get actionText(): string {
    return CActionsText[this.note.type];
  }

  public onDeleteNote(): void {
    this.deleteNote.emit(this.note.id);
  }
}

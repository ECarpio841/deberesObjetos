// child.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzCardModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() parentMessageInput: string = String();
  @Output() childMessageEventOutput = new EventEmitter<string>();
  parentMessageViewChild = String();

  sendMessage() {
    this.childMessageEventOutput.emit('Señor, esa no es la canción que ibamos a tocar en el evento de JAZZ!!!! LO ODIO FLETCHER!!');
  }
}

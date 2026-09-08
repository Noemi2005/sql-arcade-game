import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crt-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crt-overlay.component.html'
})
export class CrtOverlayComponent {
  crtEnabled = signal<boolean>(true);

  toggleCrt(): void {
    this.crtEnabled.update(v => !v);
  }
}

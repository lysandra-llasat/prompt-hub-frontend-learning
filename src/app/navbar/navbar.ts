import { Component, signal } from '@angular/core'
import { ButtonModule } from 'primeng/button';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [ButtonModule,NgOptimizedImage],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isDark = signal(false)

  toggleDarckMode(){
    this.isDark.update(value=> !value)
    document.documentElement.classList.toggle('app-dark',this.isDark())
  }
}

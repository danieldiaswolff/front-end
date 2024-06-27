import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private contactService: ContactService) {}

  contacts: any = [];

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.contactService.getData().subscribe({
      next: (response) => {
        this.contacts = response;
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }
}

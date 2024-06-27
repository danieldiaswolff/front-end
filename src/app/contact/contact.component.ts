import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  data: any = [];
  currentPage: number = 1;
  showCreate: boolean = false;
  contactForm: FormGroup;

  constructor(private contactService: ContactService, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: [
        '',
        [Validators.required],
      ],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnChanges(): void {
    this.getData();
  }


  ngOnInit() {
    this.getData();
  }

  getData() {
    this.contactService.getData().subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }

  save() {
    if (this.contactForm.valid) {
      const contact: Contact = this.contactForm.value;
      if (!contact.id) {
        this.postData(contact);
      } else {
        this.putData(contact);
      }
    }
  }

  postData(contact: Contact) {
    this.contactService.postData(contact).subscribe({
      next: (response) => {
        this.showCreate = false;
        this.clean();
        this.getData();
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }

  clean() {
    this.contactForm.reset();
  }

  putData(contact: Contact) {
    this.contactService.putData(contact).subscribe({
      next: (response) => {
        this.showCreate = false;
        this.clean();
        this.getData();
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }

  delete(contact: any) {
    this.contactService.deleteData(contact.id).subscribe({
      next: (response) => {
        this.getData();
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }

  edit(contact: Contact) {
    this.contactForm.patchValue(contact);
    this.showCreate = true;
  }
}

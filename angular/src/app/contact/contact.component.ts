import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  templateUrl: 'contact.component.html',
  styleUrls: [
    'contact.component.css',
    'aos.css',
    'style.css',
    'magnific-popup.css'
  ],
})

export class ContactComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit() { }
}

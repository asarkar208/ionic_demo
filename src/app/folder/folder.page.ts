import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Validators, FormControl,FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

RegisterForm: FormGroup;

  valuefromuser:any;
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}
submit(){
  console.log('value is =', this.valuefromuser)
}
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.RegisterForm = new FormGroup({

      name: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(8),
      ])
    });
  }
}

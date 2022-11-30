import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage implements OnInit {

  code: number = 500;
  title: string = `Something has gone terribly wrong.`
  message: string = `I'm not sure what happened but you shouldn't be seeing this message.`;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const {
      snapshot: {
        data: {
          code = this.code,
          title = this.title,
          message = this.message
        } = {}
      } = {}
    } = this.activatedRoute;

    this.code = code;
    this.title = title;
    this.message = message;
  }
}

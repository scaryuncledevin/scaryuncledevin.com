import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-cache',
  templateUrl: './google-cache.page.html',
  styleUrls: ['./google-cache.page.scss'],
})
export class GoogleCachePage implements OnInit {

  url = '';

  constructor() { }

  ngOnInit() {
  }

  checkCache() {
    let cacheUrl = this.url.trim().replace(/http(s?):\/\//, '');
    window.location.href = `https://webcache.googleusercontent.com/search?q=cache:${cacheUrl}`;
  }
}

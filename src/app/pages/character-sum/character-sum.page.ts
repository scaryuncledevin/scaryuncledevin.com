import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-sum',
  templateUrl: './character-sum.page.html',
  styleUrls: ['./character-sum.page.scss'],
})
export class CharacterSumPage implements OnInit {

  input = '';

  results: Map<string, string> = new Map();

  constructor() { }

  ngOnInit() {
  }

  convert() {
    const input = this.input.trim();

		if (input.length === 0 || this.results.has(input)) {
			return;
		}

    const output = input.split('').reduce((sum, char) => {
			return sum + char.charCodeAt(0);
		}, 0).toString().split('').map((char) => {
			return char.charCodeAt(0);
		}).join('');

    this.results.set(input, output);

    this.input = '';
  }
}

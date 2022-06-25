import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onContinue():void{
    this.router.navigateByUrl('facesnaps')
  }

}

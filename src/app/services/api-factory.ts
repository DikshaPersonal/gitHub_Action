import { Injectable } from "@angular/core";

@Injectable()
export class ApiFactory {
  BASE_URL:any;

  constructor() {
    this.BASE_URL = "https://cbus-qa1.ticketsimply.co.in/";
  }
}
import { Injectable } from '@angular/core';
import * as alertyfy from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertfyService {

constructor() { }

  success(message: string){
    alertyfy.success(message)
  }

  error(message: string){
    alertyfy.error(message)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IKeyValuePair } from '../model/ikeyvaluepair';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getAllCities(): Observable<string[]> {
    return this.http.get<string[]>('https://localhost:7102/api/city');
  }

  getAllProperties(SellRent?: number): Observable<Property[]> {
    return this.http.get<Property[]>(
      'https://localhost:7102/api/property/list/' + SellRent?.toString()
    );
  }

  addProperty(property: Property) {
    const httpOptions = {
      headers: new HttpHeaders({
          Authorization: 'Bearer '+ localStorage.getItem('token')
      })
  };
  return this.http.post('https://localhost:7102/api/property/add', property, httpOptions);
}

  newPropID() {
    const storedPID = localStorage.getItem('PID');
    if (storedPID !== null) {
      localStorage.setItem('PID', String(+storedPID + 1));
      return +storedPID + 1;
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }

  getProperty(id: number) {
    return this.http.get<Property>(
      'https://localhost:7102/api/property/detail/' + id.toString()
    );
  }

  getPropertyAge(dateofEstablishment: any): string {
    const today = new Date();
    const estDate = new Date(dateofEstablishment);
    let age = today.getFullYear() - estDate.getFullYear();
    const m = today.getMonth() - estDate.getMonth();

    // Current month smaller than establishment month or
    // Same month but current date smaller than establishment date
    if (m < 0 || (m === 0 && today.getDate() < estDate.getDate())) {
      age--;
    }

    // Establshment date is future date
    if (today < estDate) {
      return '0';
    }

    // Age is less than a year
    if (age === 0) {
      return 'Less than a year';
    }

    return age.toString();
  }

  getPropertyTypes(): Observable<IKeyValuePair[]> {
    return this.http.get<IKeyValuePair[]>(
      'https://localhost:7102/api/propertytype/list'
    );
  }

  getFurnishingTypes(): Observable<IKeyValuePair[]> {
    return this.http.get<IKeyValuePair[]>(
      'https://localhost:7102/api/furnishingtype/list'
    );
  }
}

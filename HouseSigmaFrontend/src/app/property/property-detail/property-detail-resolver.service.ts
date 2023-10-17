import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs'; // Import 'of' here
import { catchError } from 'rxjs/operators';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService implements Resolve<Property | null> {

  constructor(private housingService: HousingService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Property | null> {
    const propId = route.params['id'];
    return this.housingService.getProperty(+propId).pipe(
      catchError(error => {
        this.router.navigate(['/']);
        return of(null); // Use 'of' from 'rxjs' to create an observable with 'null'
      })
    );
  }
}

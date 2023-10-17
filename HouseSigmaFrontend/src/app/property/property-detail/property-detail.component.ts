import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { Property } from 'src/app/model/property'; // Import the correct type
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
})
export class PropertyDetailComponent implements OnInit {
  public propertyId?: number;
  property?: Property;
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private housingService: HousingService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.propertyId = +params['id'];
      this.property = this.route.snapshot.data['prp'];

      if (!this.property) {
        this.router.navigate(['/']);
      }
    });

    if (this.property != null){
      this.property.age = this.housingService.getPropertyAge(this.property.estPossessionOn)
    }

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
    ];

    this.galleryImages = [
      {
        small: 'assets/images/internal-1.jpg',
        medium: 'assets/images/internal-1.jpg',
        big: 'assets/images/internal-1.jpg'
      },
      {
        small: 'assets/images/internal-2.jpg',
        medium: 'assets/images/internal-2.jpg',
        big: 'assets/images/internal-2.jpg'
      },
      {
        small: 'assets/images/internal-3.jpg',
        medium: 'assets/images/internal-3.jpg',
        big: 'assets/images/internal-3.jpg'
      },{
        small: 'assets/images/internal-4.jpg',
        medium: 'assets/images/internal-4.jpg',
        big: 'assets/images/internal-4.jpg'
      },
      {
        small: 'assets/images/internal-5.jpg',
        medium: 'assets/images/internal-5.jpg',
        big: 'assets/images/internal-5.jpg'
      }
    ];
  }

}

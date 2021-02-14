import { Observable } from 'rxjs/Observable';
import { RestaurantService } from './../../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.reviews = this.restaurantService.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}

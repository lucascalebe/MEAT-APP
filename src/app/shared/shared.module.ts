import { OrderService } from './../order/order.service';
import { RestaurantService } from './../restaurants/restaurants.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { InputComponent } from './input/input.component';
import { ModuleWithProviders, NgModule } from "@angular/core";
import { RadioComponent } from './radio/radio.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [InputComponent,RadioComponent,RatingComponent],
    imports: [FormsModule, ReactiveFormsModule,CommonModule],
    exports: [InputComponent,RadioComponent,RatingComponent,FormsModule, ReactiveFormsModule,CommonModule]    
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers:[ShoppingCartService, RestaurantService,OrderService]
        }
    }
}
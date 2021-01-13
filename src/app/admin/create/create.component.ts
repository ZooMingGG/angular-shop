import { ProductsService } from './../../shared/services/products/products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private productService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      type: new FormControl('Phone', Validators.required),
      title: new FormControl(null, Validators.required),
      photo: new FormControl(null, Validators.required),
      info: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required)
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const product = {
      type: this.form.value.type,
      title: this.form.value.title,
      photo: this.form.value.photo,
      info: this.form.value.info,
      price: this.form.value.price,
      date: new Date()
    };

    this.productService.create(product).subscribe(() => {
      this.form.reset();
      this.submitted = false;
      this.router.navigate(['/']);
    });
  }

}

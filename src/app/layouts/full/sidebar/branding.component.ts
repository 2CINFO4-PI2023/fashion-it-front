import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a >
        <img
          src="./assets/images/logos/dark-logo.png"
          class="align-middle m-2"
          alt="logo"
          style="height: 100px; width: 100px; margin:10px;"

        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}

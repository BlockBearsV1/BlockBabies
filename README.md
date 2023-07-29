# BlockBabies
The Mini Version Of BlockBearsV1

# Getting Started
Install the latest version of the SDK:
To create the front end for the web app using Angular, you can follow these steps:

1. Set up the Angular project:
   - Install Angular CLI if you haven't already: `npm install -g @angular/cli`
   - Create a new Angular project: `ng new my-app`
   - Navigate to the project directory: `cd my-app`

2. Install the required dependencies:
   - Install the Thirdweb SDK: `npm install @thirdweb-dev/sdk`

3. Create a new component for the web app:
   - Generate a new component: `ng generate component my-component`

4. Update the component's HTML template (my-component.component.html) with the necessary code:
```html
<button (click)="getContract()">Get Contract</button>
```

5. Update the component's TypeScript file (my-component.component.ts) with the necessary code:
```typescript
import { Component } from '@angular/core';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  async getContract() {
    const sdk = new ThirdwebSDK('polygon', { clientId: 'YOUR_CLIENT_ID' });
    // OR
    // const sdk = new ThirdwebSDK('polygon', { secretKey: 'YOUR_SECRET_KEY' });

    const contract = await sdk.getContract('0xcE221D36AC137EDc29335c57c320Ad0Dade6279B');
    console.log(contract);
  }
}
```

6. Update the app module file (app.module.ts) to include the newly created component:
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

7. Update the app component HTML template (app.component.html) to include the newly created component:
```html
<app-my-component></app-my-component>
```

8. Run the Angular development server:
   - Navigate to the project directory if you're not already there: `cd my-app`
   - Start the development server: `ng serve`

Now

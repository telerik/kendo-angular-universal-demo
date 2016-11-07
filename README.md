## What is Universal Rendering

Universal rendering can also be called server-side rendering. The most popular scenario for server-side rendering is to handle the initial render when a user visits the app for the first time. The server will render the Angular application from the server. Once loaded, the client-side application will take over and continue from the server-side rendered state.

## Why Use Server Rendered Content

- Performance - showing static server-rendered view for first-time site visitors can drastically improve the perceived performance. 
- SEO - although some of the search engines will crawl and index dynamic data, there are still many search engines that expect plain HTML. Providing a static server-side rendered content is an efficient way to ensure that all search engines can access your website.

## How Does Universal Rendering Work in Angular

With the Angular 2 Universal rendering, the client loads as usual, but a fully rendered view that the user can see immediately is included in the server response. The rest of the resources will download in the background, and once the client is fully bootstrapped it will take over the page and continue its lifecycle as a standard single-page application.

Angular Universal was originally built to work with a node.js back-end. There are adapters for most popular node.js server-side frameworks such as Express or Hapi.js. On top of that Angular Universal also has [ASP.NET Core support](https://github.com/aspnet/JavaScriptServices).

#### What about user interaction during loading?

What happens with all the user events that occur in this 3-5 seconds time span when the server-rendered view is shown right away, but the client-side code is not ready yet? The Angular team came up with the [preboot](https://github.com/angular/preboot) library in order to solve this problem. The library records and plays back events and even responds immediately to some of them. It also does some sweet stuff like persisting the focus when the page is re-rendered and buffering client-side re-rendering for a smoother transition

## Creating Universal Apps

Apps that run Angular Universal are built as normal Angular 2 applications, with some caveats:

- `window`, `document` and `navigator` objects do not exist on the server, so their usage should be restricted on the server. Use `isBrowser` / `isNode` from the 'angular2-universal' package to restrict where client/server code is executed.

- DOM manipulation - you cannot manipulate the DOM directly, for the same reason mentioned above. Instead use the [Renderer](https://angular.io/docs/ts/latest/api/core/index/Renderer-class.html) class. 
- In order to spare duplication of XHR requests, a caching mechanism should be implemented. A good example can be found in the universal-starter project [here](https://github.com/angular/universal-starter/blob/master/src/backend/cache.ts).
- Using `templateUrl` and `stylesUrl` will require the `angular2-template-loader` to be included in your webpack.config file.

## Using Kendo UI with Universal Rendering

For this tutorial we will use the [angular-universal-starter](https://github.com/angular/universal-starter) seed. You can find a project that includes a Kendo UI Grid and Tabstrip [here](https://github.com/telerik/kendo-angular-universal-demo/tree/master/src).

To run the project, clone the repo, run `npm install` to install dependencies, and run `npm start` to fire up the server.

#### Including the Kendo UI Components

Including the Kendo UI components in the project is as easy as running `npm i -S @progress/kendo-angular-grid @progress/kendo-angular-layout`. Make sure that you have followed the [installation guide](http://www.telerik.com/kendo-angular-ui/getting-started/#installation) in order to setup your Progress npm registry, prior to that.

#### Add the Styles

In this sample app we are using Bootstrap along with the Kendo UI theme that was specifically created for Bootstrap v4 integration.

Let's install the Kendo UI theme by running `npm install -S @telerik/kendo-theme-bootstrap`. And in the `app.component.ts` file you can include the scss file that will load your styles using the `stylesUrl` configuration.

In the scss file that we will use to bundle our styles, we can import all the styles that will be used along the application. For example:

    @import "custom";
    @import '~bootstrap/scss/bootstrap';
    @import '~@telerik/kendo-theme-bootstrap/dist/all';
    @import 'dashboard.style';
If we run the app now, we will get an error message that states we need to have the appropriate loaders. So let's add our loaders in the `webpack.config.js` file:
`{test: /\.scss$/, loaders: ['raw-loader', 'sass'},`

When we run the application this time, we should be able to see the styles loaded as part of the `<head>` section of the application.

#### Fetch Data for the Server-Rendered View

In the `backend/db.ts` file we will need to implement a request to fetch the data that will be used for the server-rendered part of the application from our API - in this case the GitHub API. We will install [request](https://github.com/request/request) which is a simplified HTTP request client by running `npm i -S request` from the console. And then in the `get()` method of the `backend/db.ts` file we will implement our logic to fetch data from GitHub using promises for the data and the total number of issues, this will be needed a little later - for the Grid's paging. The implementation can be seen [here](https://github.com/telerik/kendo-angular-universal-demo/blob/master/src/backend/db.ts).

#### Caching

When the server view is shown to the user it will use the data that we have already fetched on the server. However, during the second rendering, when the client application is bootstrapped we would like to avoid a second fetch of the same data.

For the caching mechanisms all data requests in the application will be redirected to the `/data.json`. These requests will be handled by the [serverApi](https://github.com/telerik/kendo-angular-universal-demo/blob/master/src/backend/api.ts) that will return the cached data if it is already available.

#### Client data

Any subsequent request for data - for example when the Grid pages its data, can be done in a similar way on the client. All we need to do is attach a handler for the Grid's `pageChange` event that will provide the `skip` and `take` parameters in the handler arguments, and then fetch data using Angular's `http` module.
A sample implementation can be found [here](https://github.com/telerik/kendo-angular-universal-demo/blob/master/src/app/services/github.service.ts)

## Troubleshooting

- Check the [universal-starter](https://github.com/angular/universal/issues) repository for any issues that might be related to your problem.
- Have a question regarding Kendo UI for Angular 2? Browse the [StackOverflow kendo-ui-angular2 tag](http://stackoverflow.com/questions/tagged/kendo-ui-angular2).
- Found a Kendo UI bug? Kendo UI for Angular 2 uses GitHub issues as an official bug tracker. The [telerik/kendo-angular2](https://github.com/telerik/kendo-angular2/issues) repository is the right place to share your feedback.

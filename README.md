# Universal Rendering

[Angular Universal library](https://universal.angular.io/) is used to render Angular 2 applications on the server.

> **Important**
>
> Angular Universal does not currently work with Angular 2.1 and later.
> See [angular/universal#603](https://github.com/angular/universal/issues/603)

## Overview

This section provides information on what Angular Universal is and how it works.

### What Is Universal Rendering

Universal rendering can also be called server-side rendering. The most popular scenario for server-side rendering is to handle the initial render when a user visits the application for the first time. The server will render the Angular application and once loaded, the client-side application will take over and continue from the server-side rendered state.

For more information, refer to the [Angular Universal documentation](https://github.com/angular/universal/blob/master/DOCUMENTATION.md).

### Why Use Server-Rendered Content

Basically, the reasons to opt for server-side rendered content are:

- To improve performance&mdash;User experience hugely improves when a static server-rendered view is displayed to first-time website visitors.
- To boost SEO&mdash;Although some of the search engines crawl and index dynamic data, still many of them expect plain HTML. An efficient way to ensure that all search engines can access your website is to provide static server-rendered content.

### How Does Universal Rendering Work in Angular

Angular Universal was originally built to work with a node.js back-end. There are adapters for most popular node.js server-side frameworks such as Express or Hapi.js. On top of that, Angular Universal also provides [ASP.NET Core support](https://github.com/aspnet/JavaScriptServices).

With the Angular 2 Universal rendering the client loads as usual, the user immediately sees a fully rendered view that is included in the server response. The rest of the resources download in the background and once the client is fully bootstrapped, the view continues its lifecycle as a standard single-page application.

### What about User Interaction during Loading

What happens with all the user events that occur in this 3-5 seconds time span when the server-rendered view is shown right away, but the client-side code is not ready yet?

To handle this issue, the Angular team provides the [preboot](https://github.com/angular/preboot) library. The library records events, plays them back, and immediately responds to some of them. It also provides useful options, such as persisting the focus when the page is re-rendered and buffering client-side re-rendering for a smoother transition.

## Known Limitations

Applications that run Angular Universal are built as Angular 2 applications with the following caveats:

- The `window`, `document`, and `navigator` objects do not exist on the server. That is why their usage has to be restricted on the server. To restrict the locations where the client or server code is executed, use the `isBrowser` or `isNode` configuration from the `angular2-universal` package.
- It is not possible to manipulate the DOM directly because of the reason previously mentioned. Use the [`Renderer`](https://angular.io/docs/ts/latest/api/core/index/Renderer-class.html) class instead.
- To spare the duplication of XHR requests, implement a caching mechanism. For a good example on how to do this, refer to the [Angular Universal starter project](https://github.com/angular/universal-starter/blob/master/src/backend/cache.ts).
- If you use `templateUrl` and `stylesUrl`, you have to include the `angular2-template-loader` to in your `webpack.config` file.

## Creating Universally Rendered Applications

To demonstrate how to use Kendo UI to build applications with Angular Universal, the examples provided in this section use the [`angular-universal-starter`](https://github.com/angular/universal-starter) seed.

### Running the Sample Project

For a sample project that includes a Kendo UI Grid and Tabstrip for Angular 2, refer to [this repository](https://github.com/telerik/kendo-angular-universal-demo/tree/master/src). Note that some of the Kendo UI components depend on the DOM and might not work as expected in a server-rendered page.

To run the project:

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to fire up the server.

### Including Kendo UI Components

To add Kendo UI components to the project:

1. Follow the [installation guide](http://www.telerik.com/kendo-angular-ui/getting-started/#installation) to set up your Progress npm registry.
2. Run `npm i -S @progress/kendo-angular-grid @progress/kendo-angular-layout`.

### Adding the Styles

The sample application uses Bootstrap along with the Kendo UI theme that is specifically created for the Bootstrap v4 integration.

To add the styles to the project:

1. Install the Kendo UI theme by running `npm install -S @telerik/kendo-theme-bootstrap`.
2. Create an `app.style.scss` file that you will use to bundle your style.

    ```ts-no-run
    @import "custom";
    @import '~bootstrap/scss/bootstrap';
    @import '~@telerik/kendo-theme-bootstrap/dist/all';
    @import 'dashboard.style';
    ```

3. Register the file in your component directive by `styleUrls: ['./app.style.scss']`.

4. If you run the application at this point, you get an error message which states that you need to have the appropriate loaders. To add the loaders to the `webpack.config.js` file, include `{test: /\.scss$/, loaders: ['raw-loader', 'sass'},`.

5. Run the application again. Now the styles should be available and loaded as part of the `<head>` section.

### Fetching Data for the Server-Rendered View

To fetch the data that will be used for the server-rendered part of the application from the API&mdash;in this case the GitHub API&mdash;implement a request in the `backend/db.ts` file:

* To install the [`request`](https://github.com/request/request), which is a simplified HTTP request client, run `npm i -S request` from the console.
* To implement the logic to fetch data from GitHub, configure the `get()` method of [backend/db.ts](https://github.com/telerik/kendo-angular-universal-demo/blob/master/src/backend/db.ts).

### Caching Data

When the server view is rendered to the user, it will use the data you have already fetched on the server. However, during the second rendering when the client application is bootstrapped, you need to avoid a second fetch of the same data.

All data requests for the caching mechanisms in the application will be redirected to `/data.json`. These requests will be handled by [`serverApi`](https://github.com/telerik/kendo-angular-universal-demo/blob/master/src/backend/api.ts) that will return the cached data if it is already available.

### Requesting Client Data

Any subsequent requests for data&mdash;for example, when the Grid pages its data&mdash;can be done in a similar way on the client. To manage this process, attach a handler for the `pageChange` event of the Grid that will provide the `skip` and `take` parameters in the handler arguments. Then fetch the data using the Angular `http` module.

A sample implementation can be found in [github.service.ts](https://github.com/telerik/kendo-angular-universal-demo/blob/master/src/app/services/github.service.ts)

## Suggested Links

- For issues that might be related to your project, see the [universal-starter](https://github.com/angular/universal/issues) repository.
- For questions about Kendo UI for Angular 2, browse the [StackOverflow `kendo-ui-angular2` tag](http://stackoverflow.com/questions/tagged/kendo-ui-angular2) or the [FAQs]({% slug faq_newsite_kendouiforangular %}).
- Kendo UI for Angular 2 uses GitHub issues as official bug trackers. To report a bug or share your feedback, submit a GitHub issue to the [telerik/kendo-angular2](https://github.com/telerik/kendo-angular2/issues) repository.

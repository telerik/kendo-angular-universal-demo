import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const baseUrl = "https://api.github.com/repos/telerik/kendo-ui-core/issues";

@Injectable()
export class GithubService {
    private headers = new Headers({
        // Generate your own token through
        // https://github.com/settings/tokens
        'Authorization': "token 51bd04fc" +
              "379eb9d4e1d88637acfde27e445b7161"
    });
    constructor(public http: Http) { }

    handleResponse(res: Response): any {
        return res.json();
    }

    getInitialData() {
        return this.http.get(`http://localhost:3000/data.json`)
            .map((res) => {
                return res.json();
            });
    }

    getNextPage(skip, take) {
        const page = (skip / take) + 1
        const issues = `?state=all&page=${page}&per_page=${take}`

        return this.http.get( baseUrl + issues, { headers: this.headers })
            .map(this.handleResponse);
    }
}
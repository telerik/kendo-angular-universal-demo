import { Component, NgModule, Inject, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../services/github.service';
import { GridModule } from '@progress/kendo-angular-grid';
import { CacheService } from '../universal-cache';

import { LabelClass } from './label.directive';
import { MarkdownComponent } from './markdown.component';

@Component({
  selector: 'home',
  providers: [
    GithubService
  ],
  templateUrl:'./home.template.html'
})
export class HomeComponent {
  public issues;
  public view;
  public total;
  public pageSize = 10;
  public skip = 0;

  @HostBinding('class') protected get className(): string {
    return 'issues';
  }

  constructor(public githubService: GithubService) {
    githubService.getInitialData().subscribe((response) => {
      this.total = response[0];
      this.view = this.getView(response[1]);
    })
  }

  onPageChange({skip, take}) {
    this.githubService.getNextPage(skip, take).subscribe(response => {
      this.skip = skip;
      this.view = this.getView(response);
    })
  }

  getView(response) {
    return {
      data: response,
      total: this.total
    }
  }
}

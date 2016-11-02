import { Component, NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubService } from '../services/github.service';
import { IssuesProcessor } from '../services/issues-processor.service';
import { GridModule } from '@progress/kendo-angular-grid';

import { CacheService } from '../universal-cache';


@Component({
selector: 'home',
providers: [
  GithubService,
  IssuesProcessor
],
template: `
  <kendo-grid
    [data]="view"
    [pageSize]="pageSize"
    [pageable]="{ pageSizes: true }"
    [skip]="skip"
    [scrollable]="'none'"
    (pageChange)='onPageChange($event)'
    >
    <kendo-grid-column field="number" title="ID" width="80">
      <template kendoCellTemplate let-dataItem>
        <a href="{{ dataItem.html_url }}">#{{ dataItem.number }}</a>
      </template>
    </kendo-grid-column>
</kendo-grid>
`
})
export class HomeComponent {
  public issues;
  public view;
  public total;
  public pageSize = 10;
  public skip = 0;

  constructor(public githubService: GithubService, public issuesProcessor: IssuesProcessor) {
    githubService.getInitialData().subscribe((data) => {
      this.total = data[0];
      data = data.reduce((agg, curr) => [...agg, ...curr], []).filter(issue => issue.pull_request ? false : true);
      this.applyPaging(this.issuesProcessor.filterByMonth(data, 12))
    })
  }

  applyPaging(data) {
    this.issues = data;
    this.view = this.getView(this.skip, this.pageSize);
  }

  getView(skip, take) {
    return {
      data: this.issues.slice(skip, skip + take),
      total: this.total
    }
  }

  onPageChange(e) {
    this.skip = e.skip;
    this.view = this.getView(e.skip, e.take);
  }
}

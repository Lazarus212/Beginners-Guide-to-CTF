import { Component, inject, OnInit } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { Template, TemplateReference, TemplateService } from "../shared-services/template.service";
import { LMarkdownEditorModule } from "ngx-markdown-editor";
import { FormsModule } from "@angular/forms";
import { AsyncPipe, NgIf } from "@angular/common";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
} from "@angular/material/table";
import { Observable } from "rxjs";
import { MatCard, MatCardHeader } from "@angular/material/card";

@Component({
  selector: "app-templates",
  standalone: true,
  imports: [
    MatButton,
    FormsModule,
    AsyncPipe,
    LMarkdownEditorModule,
    NgIf,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatNoDataRow,
    MatCard,
    MatCardHeader,
  ],
  templateUrl: "./templates.component.html",
  styleUrl: "./templates.component.scss",
})
export class TemplatesComponent implements OnInit {
  private templatesService = inject(TemplateService);
  reflist$: Observable<TemplateReference[]>;
  template: Template;
  displayedColumns: string[] = ["name", "date"];

  clickFetchButton(row: TemplateReference) {
    this.templatesService.loadTemplate(row.name);
  }

  clickUploadButton() {
    this.templatesService.addTemplate("tes34", "this.template.content");
  }

  ngOnInit() {
    this.templatesService.getTemplate().subscribe(data => {
      this.template = data;
    });
    this.templatesService.loadReflist();
    this.reflist$ = this.templatesService.getReflist();
  }
}

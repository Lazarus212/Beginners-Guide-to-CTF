import { Component, inject, OnInit } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { TemplateService } from "../shared-services/template.service";
import { LMarkdownEditorModule } from "ngx-markdown-editor";
import { Observable } from "rxjs";
import { FormsModule } from "@angular/forms";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-templates",
  standalone: true,
  imports: [MatButton, LMarkdownEditorModule, FormsModule, AsyncPipe],
  templateUrl: "./templates.component.html",
  styleUrl: "./templates.component.scss",
})
export class TemplatesComponent implements OnInit {
  private templatesService = inject(TemplateService);
  template: string;
  clickButton() {
    this.templatesService.loadTemplates();
  }

  ngOnInit() {
    this.templatesService.getTemplate().subscribe(data => {
      this.template = data;
    });
  }
}

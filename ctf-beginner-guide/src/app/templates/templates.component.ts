import { Component, inject, OnInit } from "@angular/core";
import {MatButton, MatFabButton, MatIconButton} from "@angular/material/button";
import { TemplateService } from "../shared-services/template.service";
import { LMarkdownEditorModule, MdEditorOption } from "ngx-markdown-editor";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {GH_Template,} from "./templates.types";
import {map} from "rxjs/operators";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatSnackBar} from "@angular/material/snack-bar";


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
    MatIconButton,
    MatFabButton,
    MatIcon,
    MatTooltip,
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule,
  ],
  templateUrl: "./templates.component.html",
  styleUrl: "./templates.component.scss",
})
export class TemplatesComponent implements OnInit {
  private templatesService = inject(TemplateService);
  private snackBar: MatSnackBar = inject(MatSnackBar);

  templateList$: Observable<GH_Template[]> = new Observable<GH_Template[]>();
  template$: Observable<GH_Template>;
  displayedColums = ["name","size"]

  newTemplateFormControl = new FormControl<string|null>("")
  editorOptions: MdEditorOption = {
    resizable: true
  };

  getSelectedTemplate(name:string) {
   this.templatesService.loadSingleTemplate(name)
    this.template$ = this.templatesService.getSingleTemplate().pipe(map(template =>{
      template.content = atob(template.content!)
      return template
    }))
  }

  addNewTemplate(){
    if (this.newTemplateFormControl.getRawValue()){
      this.templatesService.addTemplate(this.newTemplateFormControl.getRawValue()!)
      this.newTemplateFormControl.reset()
    }
    else {
      this.snackBar.open("Please enter a name!","ok",{
        horizontalPosition:"center",
        verticalPosition:"top",
      })
    }
  }

   clickUploadButton() {

  }

  ngOnInit() {
     this.templatesService.loadTemplates();
     this.templateList$ = this.templatesService.getTemplates().pipe(map(templates =>{
      templates.forEach(template =>{
        template.name = template.name.replace(".md","")
      })
      return templates
    }))
  }
}

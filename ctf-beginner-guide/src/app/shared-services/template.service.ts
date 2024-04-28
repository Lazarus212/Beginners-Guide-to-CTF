import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TemplateService {
  private http: HttpClient = inject(HttpClient);
  templates: BehaviorSubject<any[]> = new BehaviorSubject([]);

  loadTemplates() {
    this.http.get(/templates/);
  }
}

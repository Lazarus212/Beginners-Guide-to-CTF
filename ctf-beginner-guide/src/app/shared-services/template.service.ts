import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TemplateService {
  private http: HttpClient = inject(HttpClient);
  templates: BehaviorSubject<string> = new BehaviorSubject<string>("");

  loadTemplates() {
    this.http.get("assets/example.md", { responseType: "text" }).subscribe(data => {
      this.templates.next(data);
    });
  }

  getTemplate(): Observable<string> {
    return this.templates.asObservable();
  }
}

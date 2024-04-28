import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

export type Template = {
  title: string;
  date: string;
  content: string;
};

export type TemplateReference = {
  name: string;
  date: string;
};

@Injectable({
  providedIn: "root",
})
export class TemplateService {
  private http: HttpClient = inject(HttpClient);
  private storedReflist: TemplateReference[] = [];
  reflist$: Subject<TemplateReference[]> = new Subject<TemplateReference[]>();
  templates$: Subject<Template> = new Subject<Template>();

  loadTemplate(name: string) {
    this.http
      .get<Template>("https://beginners-guide-for-ctf-default-rtdb.europe-west1.firebasedatabase.app/" + name + ".json")
      .subscribe(data => {
        this.templates$.next(data);
      });
  }

  addTemplate(name: string, template: string) {
    const newTemplate: Template = {
      title: name,
      date: new Date().toISOString(),
      content: template,
    };
    this.http
      .put<string>(
        "https://beginners-guide-for-ctf-default-rtdb.europe-west1.firebasedatabase.app/" + newTemplate.title + ".json",
        newTemplate
      )
      .subscribe(data => {
        this.storedReflist.push({ name: data, date: newTemplate.date });
        this.updateRefList();
      });
  }

  private updateRefList() {
    this.http
      .put(
        "https://beginners-guide-for-ctf-default-rtdb.europe-west1.firebasedatabase.app/reflist.json",
        this.storedReflist
      )
      .subscribe(() => {
        this.loadReflist();
      });
  }

  loadReflist() {
    this.http
      .get<
        TemplateReference[]
      >("https://beginners-guide-for-ctf-default-rtdb.europe-west1.firebasedatabase.app/reflist.json")
      .subscribe(refs => {
        this.storedReflist = refs;
        this.reflist$.next(refs);
      });
  }

  getReflist() {
    return this.reflist$.asObservable();
  }
  getTemplate(): Observable<Template> {
    return this.templates$.asObservable();
  }
}

import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {GH_Template} from "../templates/templates.types";
import {environment} from "../../environments/environment";

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
  private singeTemplate$: Subject<GH_Template>= new Subject<GH_Template>();
  templates$: BehaviorSubject<GH_Template[]> = new BehaviorSubject<GH_Template[]>([]);

  private baseUrlTemplates = `${environment.baseURL}/${environment.owner}/${environment.repo}/contents/datastorage/templates`


  loadTemplates(){
    this.http.get<GH_Template[]>(this.baseUrlTemplates).subscribe((templates)=>{
      this.templates$.next(templates)
    });
  }

  loadSingleTemplate(name:string){
    this.http.get<GH_Template>(`${this.baseUrlTemplates}/${name}.md`).subscribe((template)=>{
      this.singeTemplate$.next(template)
    });
  }


  addTemplate(name:string) {
    const newTemplate = {
      name: name,
      content: atob(""),
      message: `template ${name} has been created`

    }
    this.http.put(`${this.baseUrlTemplates}/${name}.md`, newTemplate ).subscribe(()=>{
      setTimeout(()=>{
        this.loadTemplates()
      },1000)
    })
  }

  getSingleTemplate(){
    return this.singeTemplate$.asObservable()
  }

  getTemplates(): Observable<GH_Template[]> {
    return this.templates$.asObservable();
  }
}

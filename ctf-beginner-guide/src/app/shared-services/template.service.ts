import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, ReplaySubject, Subject} from "rxjs";
import {GH_Template} from "../templates/templates.types";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn:"root"
  }
)
export class TemplateService {
  private http: HttpClient = inject(HttpClient);
  private singeTemplate$: Subject<GH_Template>= new Subject<GH_Template>();
  templates$: ReplaySubject<GH_Template[]> = new ReplaySubject<GH_Template[]>(1);

  private baseUrlTemplates = `${environment.baseURL}/${environment.owner}/${environment.repo}/contents/datastorage/templates`


  loadTemplates(){
    // this.http.get<GH_Template[]>(this.baseUrlTemplates).subscribe((templates)=>{
    //   this.templates$.next(templates)
    // });
  }

  loadSingleTemplate(name:string){
    this.http.get<GH_Template>(`${this.baseUrlTemplates}/${name}.md`).subscribe((template)=>{
      this.singeTemplate$.next(template)
    });
  }

  getSingleTemplate(){
    return this.singeTemplate$.asObservable()
  }

  getTemplates(): Observable<GH_Template[]> {
    return this.templates$.asObservable();
  }
}

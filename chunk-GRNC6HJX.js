import{a as l}from"./chunk-SZN2TEQK.js";import{Y as o,ca as p,i,k as n}from"./chunk-WZZVB3P6.js";var s={production:!0,owner:"Lazarus212",repo:"Beginners-Guide-to-CTF",baseURL:"https://api.github.com/repos"};var f=(()=>{let t=class t{constructor(){this.http=p(l),this.singeTemplate$=new i,this.templates$=new n(1),this.baseUrlTemplates=`${s.baseURL}/${s.owner}/${s.repo}/contents/datastorage/templates`}loadTemplates(){this.http.get(this.baseUrlTemplates).subscribe(e=>{this.templates$.next(e)})}loadSingleTemplate(e){this.http.get(`${this.baseUrlTemplates}/${e}.md`).subscribe(a=>{this.singeTemplate$.next(a)})}getSingleTemplate(){return this.singeTemplate$.asObservable()}getTemplates(){return this.templates$.asObservable()}};t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{s as a,f as b};

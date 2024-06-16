import{$a as V,A as v,F as $,Fb as P,Gb as C,Gc as F,Ic as ue,Kc as fe,La as h,Ma as d,Nc as U,O as Z,Oa as ne,Oc as W,Qb as S,Qc as I,Rc as A,Sc as K,Ub as T,Va as ie,Vb as ce,Wa as ae,X as b,Xa as E,Zb as he,aa as y,ab as z,ba as _,bb as m,cb as oe,d as M,da as w,db as k,fb as re,i as H,ia as O,ja as j,jb as a,ka as N,kb as r,l as X,la as J,lb as c,na as ee,oc as me,pb as se,qa as te,qb as L,ra as u,rb as de,sb as Q,tb as f,ub as le,vb as pe,wa as R,wb as q,xb as B,xc as ge,z as Y,zb as i}from"./chunk-UZOWFPDL.js";var xe=new b("CdkAccordion");var Fe=0,ye=(()=>{let n=class n{get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}constructor(e,t,o){this.accordion=e,this._changeDetectorRef=t,this._expansionDispatcher=o,this._openCloseAllSubscription=M.EMPTY,this.closed=new u,this.opened=new u,this.destroyed=new u,this.expandedChange=new u,this.id=`cdk-accordion-child-${Fe++}`,this._expanded=!1,this.disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=o.listen((l,p)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===p&&this.id!==l&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}};n.\u0275fac=function(t){return new(t||n)(d(xe,12),d(S),d(F))},n.\u0275dir=w({type:n,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[y.HasDecoratorInputTransform,"expanded","expanded",T],disabled:[y.HasDecoratorInputTransform,"disabled","disabled",T]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],standalone:!0,features:[P([{provide:xe,useValue:void 0}]),E]});let s=n;return s})();var je=["body"],Ne=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],Re=["mat-expansion-panel-header","*","mat-action-row"];function Ve(s,n){}var ze=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Le=["mat-panel-title","mat-panel-description","*"];function Qe(s,n){if(s&1&&(a(0,"span",1),J(),a(1,"svg",2),c(2,"path",3),r()()),s&2){let Ae=de();m("@indicatorRotate",Ae._getExpandedState())}}var ve=new b("MAT_ACCORDION"),_e="225ms cubic-bezier(0.4,0.0,0.2,1)",Ee={indicatorRotate:U("indicatorRotate",[A("collapsed, void",I({transform:"rotate(0deg)"})),A("expanded",I({transform:"rotate(180deg)"})),K("expanded <=> collapsed, void => collapsed",W(_e))]),bodyExpansion:U("bodyExpansion",[A("collapsed, void",I({height:"0px",visibility:"hidden"})),A("expanded",I({height:"*",visibility:""})),K("expanded <=> collapsed, void => collapsed",W(_e))])},Ce=new b("MAT_EXPANSION_PANEL"),qe=(()=>{let n=class n{constructor(e,t){this._template=e,this._expansionPanel=t}};n.\u0275fac=function(t){return new(t||n)(d(ne),d(Ce,8))},n.\u0275dir=w({type:n,selectors:[["ng-template","matExpansionPanelContent",""]],standalone:!0});let s=n;return s})(),Be=0,Se=new b("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),G=(()=>{let n=class n extends ye{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}constructor(e,t,o,l,p,g,D){super(e,t,o),this._viewContainerRef=l,this._animationMode=g,this._hideToggle=!1,this.afterExpand=new u,this.afterCollapse=new u,this._inputChanges=new H,this._headerId=`mat-expansion-panel-header-${Be++}`,this.accordion=e,this._document=p,this._animationsDisabled=g==="NoopAnimations",D&&(this.hideToggle=D.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(Z(null),v(()=>this.expanded&&!this._portal),$(1)).subscribe(()=>{this._portal=new ue(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_animationStarted(e){!we(e)&&!this._animationsDisabled&&this._body&&this._body?.nativeElement.setAttribute("inert","")}_animationDone(e){we(e)||(e.toState==="expanded"?this.afterExpand.emit():e.toState==="collapsed"&&this.afterCollapse.emit(),!this._animationsDisabled&&this._body&&this._body.nativeElement.removeAttribute("inert"))}};n.\u0275fac=function(t){return new(t||n)(d(ve,12),d(S),d(F),d(ie),d(he),d(R,8),d(Se,8))},n.\u0275cmp=_({type:n,selectors:[["mat-expansion-panel"]],contentQueries:function(t,o,l){if(t&1&&le(l,qe,5),t&2){let p;q(p=B())&&(o._lazyContent=p.first)}},viewQuery:function(t,o){if(t&1&&pe(je,5),t&2){let l;q(l=B())&&(o._body=l.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(t,o){t&2&&k("mat-expanded",o.expanded)("_mat-animation-noopable",o._animationsDisabled)("mat-expansion-panel-spacing",o._hasSpacing())},inputs:{hideToggle:[y.HasDecoratorInputTransform,"hideToggle","hideToggle",T],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],standalone:!0,features:[P([{provide:ve,useValue:void 0},{provide:Ce,useExisting:n}]),E,ae,O,C],ngContentSelectors:Re,decls:7,vars:4,consts:[["body",""],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,o){if(t&1){let l=se();Q(Ne),f(0),a(1,"div",1,0),L("@bodyExpansion.start",function(g){return j(l),N(o._animationStarted(g))})("@bodyExpansion.done",function(g){return j(l),N(o._animationDone(g))}),a(3,"div",2),f(4,1),V(5,Ve,0,0,"ng-template",3),r(),f(6,2),r()}t&2&&(h(),m("@bodyExpansion",o._getExpandedState())("id",o.id),z("aria-labelledby",o._headerId),h(4),m("cdkPortalOutlet",o._portal))},dependencies:[fe],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[Ee.bodyExpansion]},changeDetection:0});let s=n;return s})();function we(s){return s.fromState==="void"}var Te=(()=>{let n=class n{constructor(e,t,o,l,p,g,D){this.panel=e,this._element=t,this._focusMonitor=o,this._changeDetectorRef=l,this._animationMode=g,this._parentChangeSubscription=M.EMPTY,this.tabIndex=0;let De=e.accordion?e.accordion._stateChanges.pipe(v(x=>!!(x.hideToggle||x.togglePosition))):X;this.tabIndex=parseInt(D||"")||0,this._parentChangeSubscription=Y(e.opened,e.closed,De,e._inputChanges.pipe(v(x=>!!(x.hideToggle||x.disabled||x.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(v(()=>e._containsFocus())).subscribe(()=>o.focusVia(t,"program")),p&&(this.expandedHeight=p.expandedHeight,this.collapsedHeight=p.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:me(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}};n.\u0275fac=function(t){return new(t||n)(d(G,1),d(te),d(ge),d(S),d(Se,8),d(R,8),ee("tabindex"))},n.\u0275cmp=_({type:n,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(t,o){t&1&&L("click",function(){return o._toggle()})("keydown",function(p){return o._keydown(p)}),t&2&&(z("id",o.panel._headerId)("tabindex",o.disabled?-1:o.tabIndex)("aria-controls",o._getPanelId())("aria-expanded",o._isExpanded())("aria-disabled",o.panel.disabled),oe("height",o._getHeaderHeight()),k("mat-expanded",o._isExpanded())("mat-expansion-toggle-indicator-after",o._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",o._getTogglePosition()==="before")("_mat-animation-noopable",o._animationMode==="NoopAnimations"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[y.HasDecoratorInputTransform,"tabIndex","tabIndex",e=>e==null?0:ce(e)]},standalone:!0,features:[E,C],ngContentSelectors:Le,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(t,o){t&1&&(Q(ze),a(0,"span",0),f(1),f(2,1),f(3,2),r(),V(4,Qe,3,1,"span",1)),t&2&&(k("mat-content-hide-toggle",!o._showToggle()),h(4),re(4,o._showToggle()?4:-1))},styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color);display:inline-block;display:var(--mat-expansion-legacy-header-indicator-display, inline-block)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color);display:none;display:var(--mat-expansion-header-indicator-display, none)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[Ee.indicatorRotate]},changeDetection:0});let s=n;return s})();var Ie=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=w({type:n,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"],standalone:!0});let s=n;return s})();var Ft=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=_({type:n,selectors:[["app-guide"]],standalone:!0,features:[C],decls:103,vars:4,consts:[[1,"guide-spacing"],[1,"mat-h1"],[3,"expanded"],[1,"mat-h3",2,"font-weight","bold"],[2,"font-weight","bold"],["href","https://play.picoctf.org/login?redirect=/practice"],["href","https://ctf101.org/"]],template:function(t,o){t&1&&(a(0,"div",0)(1,"h1",1),i(2,"Guide"),r(),a(3,"span"),i(4,`Staring with CTFs can be quite overwhelming for new players. Having some reference points especially in the first few events can help to decrease the barrier for entry.
`),c(5,"br"),i(6,` It has to be said however that this guide can provide only reference points and not definite answers on what works best for you. Mostly everything surrounding CTF-Events is highly subjective and dependent on personal preferences.
`),r(),c(7,"br")(8,"br"),a(9,"mat-expansion-panel",2)(10,"mat-expansion-panel-header")(11,"mat-panel-title"),i(12," Selection Stage "),r()(),a(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),i(16,"TL;DR"),r()(),a(17,"p"),i(18,"Choosing an event can be difficult and depends mostly on personal preference. However for the first or first few events the best way to go is choosing an event that fulfills the following criteria:"),r(),a(19,"ul")(20,"li"),i(21,"Is held online"),r(),a(22,"li"),i(23,"Has mostly tasks in a category that you like (e.g. Webexploitation)"),r(),a(24,"li"),i(25,"Has a good rating from previous years (e.g. is not to difficult and has some easy tasks)"),r(),a(26,"li"),i(27,"Optional: Is recommended by experienced players"),r()()(),c(28,"br"),a(29,"p"),i(30,"Choosing which event is the right one to start can be difficult. There are many CTFs that are not suited for beginners for many reasons."),r(),a(31,"h3",3),i(32,"Selecting the right event"),r(),a(33,"p"),i(34,"An event can be broken down into three aspects:"),r(),a(35,"ol")(36,"li"),i(37,"Where the event is being held"),r(),a(38,"li"),i(39,"What is the main task category"),r(),a(40,"li"),i(41,"What is the rating"),r()(),a(42,"p"),i(43,"These aspects are not a definitive list on what to look for in events. There are different aspects that can be relevant, for example the date and length of an event."),r(),a(44,"h3",4),i(45,"1. Where the event is being held"),r(),a(46,"p"),i(47,"Most of the events fall in one of two categories:"),r(),a(48,"ol")(49,"li"),i(50,"Onsite events"),r(),a(51,"li"),i(52,"Online events"),r()(),a(53,"p"),i(54,"For beginners it is most likely the best option to choose an event that is held online as it doesn't require the commitment to travel somewhere. "),c(55,"br"),i(56," Another point for online events is that they don't require a participation fee, at leas most of the times. "),c(57,"br")(58,"br"),i(59," There are however scenarios where it can be a bonus to participate onsite, yet these are mostly when you have participated in at least one event and already know that CTFs are fun for you."),r(),a(60,"p"),i(61,"A honorable mention for online CTFs is "),a(62,"a",5),i(63,"picoCTFs picoGym"),r(),i(64,` they provide a platform where every tasks of previous CTFs
is playable at all times. This is a great place to see how tasks are structured and what a live CTF can look like`),r(),a(65,"h3",4),i(66,"2. What is the main task category"),r(),a(67,"p"),i(68," There are many category in which a task can be placed, sometimes it is not clear in from which category it is as it combines mutliple categorys. "),c(69,"br"),i(70," A great source to see the different categorys is "),a(71,"a",6),i(72,"ctf101"),r(),i(73,". There mostly every category can be found with some corresponding tasks and tools. "),c(74,"br")(75,"br"),i(76," However in the events there are mostly not only tasks from one category but instead have a focus on some. Choosing the right category is something that everyone has to do for themselves. There is no harder or easier category that can be recommended for starting, it always highly depends on your personal preference and/or experience. "),r(),a(77,"p"),i(78,"A recommendation for finding a category you like is to look at the tasks in "),a(79,"a",5),i(80,"picoCTFs picoGym"),r(),i(81," there most of the categories have at least one task. "),r()(),c(82,"br"),a(83,"mat-expansion-panel",2)(84,"mat-expansion-panel-header")(85,"mat-panel-title"),i(86," Preparation Stage "),r()(),a(87,"p"),i(88,"Test Content"),r()(),c(89,"br"),a(90,"mat-expansion-panel",2)(91,"mat-expansion-panel-header")(92,"mat-panel-title"),i(93," Playing Stage "),r()(),a(94,"p"),i(95,"Test Content"),r()(),c(96,"br"),a(97,"mat-expansion-panel",2)(98,"mat-expansion-panel-header")(99,"mat-panel-title"),i(100," Follow up Stage "),r()(),a(101,"p"),i(102,"Test Content"),r()()()),t&2&&(h(9),m("expanded",!1),h(74),m("expanded",!1),h(7),m("expanded",!1),h(7),m("expanded",!1))},dependencies:[Te,G,Ie],styles:[".guide-spacing[_ngcontent-%COMP%]{margin-left:20px;margin-top:20px;width:95%}.mat-h1[_ngcontent-%COMP%]{font-weight:700;text-decoration:underline}"]});let s=n;return s})();export{Ft as GuideComponent};

!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{tmrb:function(n,i,a){"use strict";a.r(i),a.d(i,"Tab1PageModule",(function(){return D}));var o,b,r,c=a("TEn/"),s=a("ofXK"),u=a("3Pt+"),l=a("qtYk"),d=a("tyNb"),f=a("fXoL"),m=[{path:"",component:(o=function(){function n(){var e=this;t(this,n),this.startDate=this.modToday(),this.endDate=this.modToday(),this.interval=setInterval((function(){e.today=new Date}),1e3)}var i,a,o;return i=n,(a=[{key:"modToday",value:function(){this.today=new Date;var t=new Date(this.today);return t.setMinutes(this.today.getMinutes()-this.today.getMinutes()%5),t.setSeconds(0),t.setMilliseconds(0),t}},{key:"changeInitDate",value:function(t){this.startDate=new Date(t.detail.value)}},{key:"changeEndDate",value:function(t){this.endDate=new Date(t.detail.value)}},{key:"changeStartDay",value:function(t){this.startDate.setDate(this.startDate.getDate()+t)}},{key:"refreshStartDate",value:function(){this.startDate=this.modToday()}},{key:"refreshEndDate",value:function(){var t=this;setTimeout((function(){t.endDate=t.modToday()}))}},{key:"diff",get:function(){var t=Math.abs(Math.floor(this.endDate.getTime()/6e4)-Math.floor(this.startDate.getTime()/6e4)),e=Math.floor(t/60),n=Math.floor(t%60);return"".concat(e<10?"0"+e:""+e,":").concat(n<10?"0"+n:""+n)}}])&&e(i.prototype,a),o&&e(i,o),n}(),o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=f.Bb({type:o,selectors:[["app-tab1"]],decls:57,vars:19,consts:[[3,"translucent"],[2,"text-align","right"],[3,"fullscreen"],["collapse","condense"],["size","large"],["slot","start"],["slot","start","size","small",3,"click"],["name","refresh"],["slot","end"],[3,"click"],["name","chevron-back"],["name","chevron-forward"],["displayFormat","MM / DD / YYYY","pickerFormat","MM DD YYYY",3,"value","max","ionChange"],["displayFormat","HH:mm","pickerFormat","HH:mm","minuteValues","0,5,10,15,20,25,30,35,40,45,50,55",3,"value","ionChange"],["displayFormat","MM / DD / YYYY","pickerFormat","MM DD YYYY",3,"value","min","ionChange"],[1,"diff"]],template:function(t,e){1&t&&(f.Kb(0,"ion-header",0),f.Kb(1,"ion-toolbar"),f.Kb(2,"ion-title",1),f.Kb(3,"h2"),f.Kb(4,"b"),f.bc(5),f.Tb(6,"date"),f.Jb(),f.Jb(),f.Kb(7,"h3"),f.bc(8),f.Tb(9,"date"),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Kb(10,"ion-content",2),f.Kb(11,"ion-header",3),f.Kb(12,"ion-toolbar"),f.Kb(13,"ion-title",4),f.bc(14,"Tab 1"),f.Jb(),f.Jb(),f.Jb(),f.Kb(15,"ion-list"),f.Kb(16,"ion-item-group"),f.Kb(17,"ion-item"),f.Kb(18,"ion-buttons",5),f.Kb(19,"ion-button",6),f.Rb("click",(function(){return e.refreshStartDate()})),f.Ib(20,"ion-icon",7),f.Jb(),f.Jb(),f.Kb(21,"ion-buttons",8),f.Kb(22,"ion-button",9),f.Rb("click",(function(){return e.changeStartDay(-1)})),f.Ib(23,"ion-icon",10),f.Jb(),f.Kb(24,"ion-button",9),f.Rb("click",(function(){return e.changeStartDay(1)})),f.Ib(25,"ion-icon",11),f.Jb(),f.Jb(),f.Jb(),f.Kb(26,"ion-item"),f.Kb(27,"ion-label"),f.bc(28,"Start Date:"),f.Jb(),f.Kb(29,"ion-datetime",12),f.Rb("ionChange",(function(t){return e.changeInitDate(t)})),f.Jb(),f.Jb(),f.Kb(30,"ion-item"),f.Kb(31,"ion-label"),f.bc(32,"Start Time:"),f.Jb(),f.Kb(33,"ion-datetime",13),f.Rb("ionChange",(function(t){return e.changeInitDate(t)})),f.Jb(),f.Jb(),f.Jb(),f.Ib(34,"ion-item-divider"),f.Kb(35,"ion-item-group"),f.Kb(36,"ion-item"),f.Kb(37,"ion-buttons",5),f.Kb(38,"ion-button",6),f.Rb("click",(function(){return e.refreshEndDate()})),f.Ib(39,"ion-icon",7),f.Jb(),f.Jb(),f.Jb(),f.Kb(40,"ion-item"),f.Kb(41,"ion-label"),f.bc(42,"End Date:"),f.Jb(),f.Kb(43,"ion-datetime",14),f.Rb("ionChange",(function(t){return e.changeEndDate(t)})),f.Jb(),f.Jb(),f.Kb(44,"ion-item"),f.Kb(45,"ion-label"),f.bc(46,"End Time:"),f.Jb(),f.Kb(47,"ion-datetime",13),f.Rb("ionChange",(function(t){return e.changeEndDate(t)})),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Kb(48,"ion-footer"),f.Kb(49,"ion-toolbar"),f.Kb(50,"ion-item"),f.Kb(51,"ion-label"),f.Kb(52,"b"),f.bc(53,"Total Hours:"),f.Jb(),f.Jb(),f.Kb(54,"h3",15),f.Kb(55,"b"),f.bc(56),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Jb()),2&t&&(f.Xb("translucent",!0),f.xb(5),f.cc(f.Ub(6,13,e.today,"h:mm a")),f.xb(3),f.cc(f.Ub(9,16,e.today,"HH:mm")),f.xb(2),f.Xb("fullscreen",!0),f.xb(19),f.Xb("value",e.startDate.toUTCString())("max",e.endDate.toISOString()),f.xb(4),f.Xb("value",e.startDate.toUTCString()),f.xb(10),f.Xb("value",e.endDate.toUTCString())("min",e.startDate.toISOString()),f.xb(4),f.Xb("value",e.endDate.toUTCString()),f.xb(7),f.zb("back-time",e.endDate<e.startDate),f.xb(2),f.cc(e.diff))},directives:[c.g,c.q,c.p,c.d,c.m,c.k,c.i,c.c,c.b,c.h,c.l,c.e,c.u,c.j,c.f],pipes:[s.d],styles:["ion-datetime[_ngcontent-%COMP%]{font-size:1.4rem}.diff[_ngcontent-%COMP%]{font-size:2rem}.diff.back-time[_ngcontent-%COMP%]{color:red}ion-item[_ngcontent-%COMP%]{padding-top:.4rem;padding-bottom:.4rem}"]}),o)}],h=((r=function e(){t(this,e)}).\u0275mod=f.Fb({type:r}),r.\u0275inj=f.Eb({factory:function(t){return new(t||r)},imports:[[d.i.forChild(m)],d.i]}),r),D=((b=function e(){t(this,e)}).\u0275mod=f.Fb({type:b}),b.\u0275inj=f.Eb({factory:function(t){return new(t||b)},imports:[[c.r,s.b,u.a,l.a,h]]}),b)}}])}();
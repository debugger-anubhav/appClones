(function(g){var window=this;var O5=function(a,b){var c="ytp-miniplayer-button-bottom-right",d={D:"svg",O:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},L:[{D:"g",O:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},L:[{D:"g",O:{transform:"translate(-1.000000, -3.000000)"},L:[{D:"polygon",O:{points:"0 0 24 0 24 24 0 24"}},{D:"path",O:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Open video page";a.N().Z("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d={D:"svg",O:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},L:[{D:"g",O:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},L:[{D:"g",O:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},L:[{D:"path",O:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.V.call(this,{D:"button",da:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],O:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},L:[d]});this.G=a;this.ia("click",this.onClick,this);this.ka("title",g.EX(a,e,"i"));g.$f(this,g.cY(b.zb(),this.element))},P5=function(a){g.V.call(this,{D:"div",
I:"ytp-miniplayer-ui"});this.Ag=!1;this.player=a;this.K(a,"minimized",this.Hi);this.K(a,"onStateChange",this.HP)},Q5=function(a){g.AS.call(this,a);
this.o=new P5(this.player);this.o.hide();g.jP(this.player,this.o.element,4);a.app.visibility.o&&(this.load(),g.J(a.getRootNode(),"ytp-player-minimized",!0))};
g.u(O5,g.V);O5.prototype.onClick=function(){this.G.la("onExpandMiniplayer")};g.u(P5,g.V);g.k=P5.prototype;
g.k.show=function(){this.hd=new g.nn(this.Po,null,this);this.hd.start();if(!this.Ag){this.tooltip=new g.o_(this.player,this);g.C(this,this.tooltip);g.jP(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Ab=new g.XX(this.player);g.C(this,this.Ab);this.Oj=new g.V({D:"div",I:"ytp-miniplayer-scrim"});g.C(this,this.Oj);this.Oj.Y(this.element);this.K(this.Oj.element,"click",this.DD);var a=new g.V({D:"button",da:["ytp-miniplayer-close-button","ytp-button"],O:{"aria-label":"Close"},L:[g.fN()]});
g.C(this,a);a.Y(this.Oj.element);this.K(a.element,"click",this.Jm);a=new O5(this.player,this);g.C(this,a);a.Y(this.Oj.element);this.kk=new g.V({D:"div",I:"ytp-miniplayer-controls"});g.C(this,this.kk);this.kk.Y(this.Oj.element);this.K(this.kk.element,"click",this.DD);var b=new g.V({D:"div",I:"ytp-miniplayer-button-container"});g.C(this,b);b.Y(this.kk.element);a=new g.V({D:"div",I:"ytp-miniplayer-play-button-container"});g.C(this,a);a.Y(this.kk.element);var c=new g.V({D:"div",I:"ytp-miniplayer-button-container"});
g.C(this,c);c.Y(this.kk.element);this.aE=new g.qZ(this.player,this,!1);g.C(this,this.aE);this.aE.Y(b.element);b=new g.nZ(this.player,this);g.C(this,b);b.Y(a.element);this.nextButton=new g.qZ(this.player,this,!0);g.C(this,this.nextButton);this.nextButton.Y(c.element);this.Wg=new g.d_(this.player,this);g.C(this,this.Wg);this.Wg.Y(this.Oj.element);this.Ec=new g.uZ(this.player,this);g.C(this,this.Ec);g.jP(this.player,this.Ec.element,4);this.Tr=new g.V({D:"div",I:"ytp-miniplayer-buttons"});g.C(this,this.Tr);
g.jP(this.player,this.Tr.element,4);a=new g.V({D:"button",da:["ytp-miniplayer-close-button","ytp-button"],O:{"aria-label":"Close"},L:[g.fN()]});g.C(this,a);a.Y(this.Tr.element);this.K(a.element,"click",this.Jm);a=new g.V({D:"button",da:["ytp-miniplayer-replay-button","ytp-button"],O:{"aria-label":"Close"},L:[g.tN()]});g.C(this,a);a.Y(this.Tr.element);this.K(a.element,"click",this.KN);this.K(this.player,"presentingplayerstatechange",this.Kb);this.K(this.player,"appresize",this.La);this.K(this.player,
"fullscreentoggled",this.La);this.La();this.Ag=!0}0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Ec.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.hd&&(this.hd.dispose(),this.hd=void 0);g.V.prototype.hide.call(this);this.player.app.visibility.o||(this.Ag&&this.Ec.hide(),this.player.loadModule("annotations_module"))};
g.k.V=function(){this.hd&&(this.hd.dispose(),this.hd=void 0);g.V.prototype.V.call(this)};
g.k.Jm=function(){this.player.stopVideo();this.player.la("onCloseMiniplayer")};
g.k.KN=function(){this.player.playVideo()};
g.k.DD=function(a){if(a.target===this.Oj.element||a.target===this.kk.element)g.R(this.player.N().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.aL(g.sI(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.la("onExpandMiniplayer")};
g.k.Hi=function(){g.J(this.player.getRootNode(),"ytp-player-minimized",this.player.app.visibility.o)};
g.k.Bd=function(){this.Ec.wc();this.Wg.wc()};
g.k.Po=function(){this.Bd();this.hd&&this.hd.start()};
g.k.Kb=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.La=function(){this.Ec.setPosition(0,g.LG(this.player).getPlayerSize().width,!1);this.Ec.ay()};
g.k.HP=function(a){this.player.app.visibility.o&&(0===a?this.hide():this.show())};
g.k.zb=function(){return this.tooltip};
g.k.pd=function(){return!1};
g.k.Cf=function(){return!1};
g.k.Cg=function(){return!1};
g.k.wx=function(){};
g.k.mk=function(){};
g.k.Ln=function(){};
g.k.yk=function(){return null};
g.k.li=function(){return new g.eg(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Pm=function(a,b,c,d,e){var f=0,h=d=0,l=g.Bg(a);if(b){c=g.wn(b,"ytp-prev-button")||g.wn(b,"ytp-next-button");var m=g.wn(b,"ytp-play-button"),n=g.wn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.yg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.wn(b,"ytp-miniplayer-button-top-left"),f=g.yg(b,this.element),b=g.Bg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=g.LG(this.player).getPlayerSize().width;e=f+(e||0);l=g.Zd(h,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Li=function(){};
g.k.ii=function(){return!1};g.u(Q5,g.AS);Q5.prototype.create=function(){};
Q5.prototype.Sg=function(){return!1};
Q5.prototype.load=function(){this.player.hideControls();this.o.show()};
Q5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.qX.miniplayer=Q5;})(_yt_player);

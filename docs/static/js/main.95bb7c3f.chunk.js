(this["webpackJsonpreact-tetris"]=this["webpackJsonpreact-tetris"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/tetris-bg.4ae866dc.mp3"},function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),o=a(8),r=a.n(o),s=(a(16),a(0)),c=a(9),l=a(3),h=a(2),u=a(5),p=a(4);a(17);function f(e){var t=["pixel"];return e.isFilled&&t.push("pixel--filled"),i.a.createElement("div",{className:t.join(" ")})}f.defaultProps={isFilled:!1};var v=f;a(18);function d(e){for(var t=e.rows,a=e.cols,n=e.pixelMap,o=[],r=0;r<t;r++){for(var s=[],c=0;c<a;c++)s.push(i.a.createElement(v,{key:"".concat(r,",").concat(c),isFilled:n[r][c]}));o.push(i.a.createElement("div",{key:"row-".concat(r)},s))}return i.a.createElement("div",{className:"grid"},o)}d.defaultProps={rows:20,cols:10};var m=d,w=a(6),b=function e(){Object(s.a)(this,e),this.size=0,this.orientations=null},O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).size=2,a.orientations=[[[1,1],[1,1]]],a}return Object(p.a)(t,e),t}(b),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).size=4,a.orientations=[[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]]],a}return Object(p.a)(t,e),t}(b),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).size=3,a.orientations=[[[0,0,1],[0,0,1],[0,1,1]],[[1,0,0],[1,1,1],[0,0,0]],[[1,1,0],[1,0,0],[1,0,0]],[[1,1,1],[0,0,1],[0,0,0]]],a}return Object(p.a)(t,e),t}(b),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).size=3,a.orientations=[[[1,0,0],[1,0,0],[1,1,0]],[[0,0,1],[1,1,1],[0,0,0]],[[0,1,1],[0,0,1],[0,0,1]],[[1,1,1],[1,0,0],[0,0,0]]],a}return Object(p.a)(t,e),t}(b),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).size=3,a.orientations=[[[0,1,1],[1,1,0],[0,0,0]],[[0,1,0],[0,1,1],[0,0,1]]],a}return Object(p.a)(t,e),t}(b),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).size=3,a.orientations=[[[0,1,0],[1,1,1],[0,0,0]],[[0,1,0],[0,1,1],[0,1,0]],[[0,0,0],[1,1,1],[0,1,0]],[[0,1,0],[1,1,0],[0,1,0]]],a}return Object(p.a)(t,e),t}(b),M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).size=3,a.orientations=[[[1,1,0],[0,1,1],[0,0,0]],[[0,0,1],[0,1,1],[0,1,0]]],a}return Object(p.a)(t,e),t}(b),S=0,y=1,E=2,R=3,C=4,G=5,z=6,T=function e(){var t=this;Object(s.a)(this,e),this.getShape=function(e){switch(e){case S:return new O;case y:return new x;case E:return new k;case R:return new M;case C:return new j;case G:return new P;case z:return new g;default:return new j}},this.getRandomShape=function(){var e=Math.floor(7*Math.random());return t.getShape(e)}},I=function e(t,a){var n=this;Object(s.a)(this,e),this.deregisterView=function(){n.view=null},this.initGame=function(){n.shape=null,n.shapePosition=[0,0],n.shapeRotation=0,n.unclearPixelMap=n.getEmptyPixelMap(),n.isSpeedUp=!1,n.isGameEnded=!1,n.timer=null},this.startGame=function(){n.timer=setTimeout(n.doGameTick,500),n.getNextShape()},this.endGame=function(){n.isGameEnded=!0,alert("Game Over!")},this.doGameTick=function(){n.isGameEnded?(n.initGame(),n.startGame()):(n.moveShapeDown(),n.timer=setTimeout(n.doGameTick,n.tickInterval))},this.updateView=function(e){n.view&&n.view.setState({pixelMap:e})},this.getEmptyPixelMap=function(){for(var e=[],t=0;t<n.rows;t++){for(var a=[],i=0;i<n.cols;i++)a.push(!1);e.push(a)}return e},this.addShapeToUnclearPixelMap=function(){for(var e=n.shape.orientations[n.shapeRotation],t=n.shape.size,a=Object(w.a)(n.shapePosition,2),i=a[0],o=a[1],r=0;r<t;r++)for(var s=0;s<t;s++)if(1===e[r][s]){var c=i+s,l=o+r;c>=0&&c<n.cols&&l>=0&&l<n.rows&&(n.unclearPixelMap[l][c]=!0)}},this.calculatePixelMap=function(){for(var e=n.getEmptyPixelMap(),t=n.shape.orientations[n.shapeRotation],a=n.shape.size,i=Object(w.a)(n.shapePosition,2),o=i[0],r=i[1],s=0;s<n.rows;s++)for(var c=0;c<n.cols;c++)e[s][c]=n.unclearPixelMap[s][c];for(s=0;s<a;s++)for(c=0;c<a;c++)if(1===t[s][c]){var l=o+c,h=r+s;l>=0&&l<n.cols&&h>=0&&h<n.rows&&(e[h][l]=!0)}return e},this.hasCollision=function(e,t){for(var a=n.shape.orientations[t],i=n.shape.size,o=Object(w.a)(e,2),r=o[0],s=o[1],c=0;c<i;c++)for(var l=0;l<i;l++)if(1===a[c][l]){var h=r+l,u=s+c;if(u<0)continue;if(u>=n.rows)return!0;if(h<0||h>=n.cols)return!0;if(!0===n.unclearPixelMap[u][h])return!0}return!1},this.isGameOver=function(){for(var e=n.shape.orientations[n.shapeRotation],t=n.shape.size,a=n.shapePosition[1],i=0;i<t;i++)for(var o=0;o<t;o++){if(1===e[i][o])if(a+i<0)return!0}return!1},this.findRowsToClear=function(){for(var e=[],t=0;t<n.rows;t++){for(var a=!0,i=0;i<n.cols;i++)a&=n.unclearPixelMap[t][i];a&&e.push(t)}return e},this.clearRows=function(e){for(var t=e.length-1;t>=0;t--)n.unclearPixelMap.splice(e[t],1);for(var a=0;a<e.length;a++){for(var i=[],o=0;o<n.cols;o++)i.push(!1);n.unclearPixelMap.unshift(i)}},this.getNextShape=function(){n.shape=n.shapeFactory.getRandomShape(),n.shapeRotation=Math.floor(Math.random()*n.shape.orientations.length),n.shapePosition=[Math.floor((n.cols-n.shape.size)/2),-n.shape.size]},this.moveShapeDown=function(){var e=[n.shapePosition[0],n.shapePosition[1]+1];if(n.hasCollision(e,n.shapeRotation))if(n.isGameOver())n.endGame();else{n.addShapeToUnclearPixelMap();var t=n.findRowsToClear();n.clearRows(t),n.getNextShape()}else n.shapePosition=[].concat(e);n.redraw()},this.moveShapeLeft=function(){var e=[n.shapePosition[0]-1,n.shapePosition[1]];n.hasCollision(e,n.shapeRotation)||(n.shapePosition=[].concat(e),n.redraw())},this.moveShapeRight=function(){var e=[n.shapePosition[0]+1,n.shapePosition[1]];n.hasCollision(e,n.shapeRotation)||(n.shapePosition=[].concat(e),n.redraw())},this.rotateShape=function(){var e=n.shape.orientations.length,t=(n.shapeRotation+1)%e;n.hasCollision(n.shapePosition,t)||(n.shapeRotation=t,n.redraw())},this.redraw=function(){var e=n.calculatePixelMap();n.updateView(e)};var i=a.rows,o=a.cols,r=a.tickInterval,c=a.speedUpSpeed;this.view=t,this.shapeFactory=new T,this.rows=i,this.cols=o,this.tickInterval=r,this.speedUpSpeed=c},D=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).handleKeyDown=function(e){switch(e.keyCode){case 32:case 38:a.gameController.rotateShape();break;case 37:a.gameController.moveShapeLeft();break;case 39:a.gameController.moveShapeRight();break;case 40:a.gameController.moveShapeDown()}};var n=e.rows,i=e.cols,o=e.tickInterval;return a.gameController=new I(Object(u.a)(a),{rows:n,cols:i,tickInterval:o}),a.gameController.initGame(),a.state={},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.gameController.startGame(),document.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown),this.gameController.deregisterView()}},{key:"render",value:function(){var e=this.state.pixelMap;return i.a.createElement("div",null,e&&i.a.createElement(m,{pixelMap:e}))}}]),t}(i.a.Component);D.defaultProps={rows:20,cols:10,tickInterval:400,speedUpSpeed:5};var U=D,N=a(10),F=a.n(N);a(19);var L=function(){return i.a.createElement("div",{className:"app"},i.a.createElement(U,{rows:20,cols:10,tickInterval:400}),i.a.createElement("audio",{src:F.a,type:"audio/mpeg",autoPlay:!0,loop:!0}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.95bb7c3f.chunk.js.map
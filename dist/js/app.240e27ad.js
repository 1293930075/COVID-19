(function(e){function t(t){for(var r,i,l=t[0],u=t[1],s=t[2],p=0,f=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/covid-19./";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{ref:"mapBox",staticStyle:{width:"100%",height:"800px",margin:"0 auto"}})])},o=[],i=(n("d81d"),n("b0c0"),n("313e")),l=n.n(i),u=(n("3139"),n("f2e8")),s=n.n(u),c={title:{text:"疫情感染分布图",link:"https://github.com/1293930075/COVID-19",subtext:"点击此处跳转至Github仓库，数据来源与网络，仅供学习参考。",sublink:"https://github.com/1293930075/COVID-19"},tooltip:{trigger:"item"},series:[{name:"确诊人数",type:"map",map:"china",zoom:1.2,roam:!0,label:{show:!0,color:"#333",fontSize:10},itemStyle:{areaColor:"#eee",borderColor:"#999"},emphasis:{label:{color:"white"},itemStyle:{areaColor:"#00a4ff"}},data:[]}],toolbox:{show:!0,orient:"vertical",left:"right",top:"bottom",feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},visualMap:[{type:"piecewise",show:!0,splitNumber:6,pieces:[{min:1e4,label:"> 10000 人"},{min:1e3,max:9999,label:"1000 - 9999 人"},{min:500,max:999,label:"500 - 999 人"},{min:100,max:499,label:"100 - 499 人"},{min:10,max:99,label:"10 - 99 人"},{min:1,max:9,label:"1 - 9 人"}],inRange:{symbol:"rect",color:["#faaa2a","#d43d1e","#b40200","#700000","#470102","#0d0100"]},itemWidth:20,itemHeight:10}]},p={name:"about",mounted:function(){this.getMapData(),this.Myecharts=l.a.init(this.$refs.mapBox),this.Myecharts.setOption(c)},methods:{getMapData:function(){var e=this;s()("https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427",{},(function(t,n){if(!t){var r=n.data.list.map((function(e){return{name:e.name,value:e.value}}));c.series[0].data=r,c.title.text="".concat(n.data.times,"疫情感染分布图"),e.Myecharts.setOption(c)}}))}}},f=p,d=n("2877"),m=Object(d["a"])(f,a,o,!1,null,null,null),h=m.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(h)}}).$mount("#app")}});
//# sourceMappingURL=app.240e27ad.js.map
import{f as F,a5 as L,a6 as N,Z as V,Y as j,q as A,j as E,C as I,al as R,T as d,a0 as W,s as z,a7 as D,W as H,k as O,o as n,c as h,w as o,d as a,i as e,a as r,t as u,g as y,h as Z,F as G,l as J,a4 as K,n as M}from"./app-22f896e9.js";import{_ as Q}from"./YunCard.vue_vue_type_style_index_0_lang-a165ad0e.js";import{_ as U}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-0e046257.js";import{_ as X}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-4739c0dc.js";const ee={class:"yun-text-light",text:"center",p:"2"},te={class:"justify-center items-end",flex:"~ wrap",gap:"1"},se=["onClick"],ne={"inline-flex":""},oe={"inline-flex":"",text:"xs"},me=F({__name:"tags",setup(ae){L([N({"@type":"CollectionPage"})]);const v=V(),x=j(),C=A(),{t:m}=E(),i=I(),{tags:_,getTagStyle:w}=R({primary:C.value.colors.primary}),s=d(()=>v.query.tag||""),S=W(),T=d(()=>S.postList.filter(t=>t.tags?typeof t.tags=="string"?t.tags===s.value:t.tags.includes(s.value):!1)),f=z(),{show:k}=D(f);function b(l){x.push({query:{tag:l}}),k()}const P=H(i);return(l,t)=>{const p=X,Y=O("router-view"),$=U,B=Q,q=K;return n(),h(q,null,{"main-header":o(()=>[a(p,{title:e(P)||e(m)("menu.tags"),icon:e(i).icon||"i-ri-tag-line",color:e(i).color},null,8,["title","icon","color"])]),"main-content":o(()=>[r("div",ee,u(e(m)("counter.tags",Array.from(e(_)).length)),1),r("div",te,[(n(!0),y(G,null,Z(Array.from(e(_)).sort(),([c,g])=>(n(),y("span",{key:c,"inline-flex":"",my:"2",class:"post-tag cursor-pointer items-baseline leading-4",style:M(e(w)(g.count)),p:"1",onClick:re=>b(c.toString())},[r("span",ne,"#"+u(c),1),r("span",oe,"["+u(g.count)+"]",1)],12,se))),128))]),a(Y)]),"main-nav-before":o(()=>[s.value?(n(),h(B,{key:0,ref_key:"collapse",ref:f,m:"t-4",w:"full"},{default:o(()=>[a(p,{title:s.value,icon:"i-ri-hashtag"},null,8,["title"]),a($,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:T.value},null,8,["posts"])]),_:1},512)):J("v-if",!0)]),_:1})}}});export{me as default};
import{f as h,j as $,U as x,T as f,o as a,g as r,a as s,t as m,i as n,l as c,s as S,F as z,h as P,n as T,m as k,c as d,Z as V,G as B,C as L,ai as j,a5 as M,aj as U,w as g,d as y,r as F,a4 as N}from"./app-22f896e9.js";import{a as A,b as H,_ as R}from"./YunPostMeta.vue_vue_type_style_index_0_lang-4970c474.js";const W={class:"post-copyright"},q={class:"post-copyright-author"},D={key:0,class:"post-copyright-link"},E=["href"],G={class:"post-copyright-license"},I=["innerHTML"],O=h({__name:"ValaxyCopyright",props:{url:{default:""}},setup(v){const{t:e,locale:o}=$(),t=x(),l=t.value.license.type==="zero"?"1.0":"4.0",_=t.value.license.type==="zero"?"publicdomain":"licenses",p=f(()=>{const u=t.value.license.language?t.value.license.language:o.value==="zh-CN"?"zh":"en";return`https://creativecommons.org/${_}/${t.value.license.type}/${l}/deed.${u}`}),i=f(()=>e("post.copyright.license_content",[`<a href="${p.value}" target="_blank" rel="noopener" title="CC ${`${t.value.license.type.toUpperCase()} ${l}`} ">CC ${t.value.license.type.toUpperCase()}</a>`]));return(u,C)=>(a(),r("ul",W,[s("li",q,[s("strong",null,m(n(e)("post.copyright.author")+n(e)("symbol.colon")),1),s("span",null,m(n(t).author.name),1)]),u.url?(a(),r("li",D,[s("strong",null,m(n(e)("post.copyright.link")+n(e)("symbol.colon")),1),s("a",{href:u.url},m(u.url),9,E)])):c("v-if",!0),s("li",G,[s("strong",null,m(n(e)("post.copyright.license_title")+n(e)("symbol.colon")),1),s("span",{innerHTML:i.value},null,8,I)])]))}});const Q={class:"yun-sponsor-container flex-center flex-col"},Z=["title"],J=s("div",{"i-ri-heart-line":""},null,-1),K=[J],X={key:0,class:"sponsor-description",mb:"4",text:"sm"},ee={class:"flex justify-around"},te=["href"],ne=["src","title"],se=h({__name:"YunSponsor",setup(v){const{t:e}=$(),o=x(),t=S(!1),l=f(()=>{var _;return((_=o.value.sponsor)==null?void 0:_.title)??e("reward.donate")});return(_,p)=>(a(),r("div",Q,[s("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:l.value,text:"red-400",onClick:p[0]||(p[0]=i=>t.value=!t.value)},K,8,Z),s("div",{class:k(["qrcode-container qrcode flex-center flex-col",t.value&&"show"]),m:"y-4"},[n(o).sponsor.description?(a(),r("div",X,m(n(o).sponsor.description),1)):c("v-if",!0),s("div",ee,[(a(!0),r(z,null,P(n(o).sponsor.methods,(i,u)=>(a(),r("a",{key:u,class:"flex-center flex-col animate-iteration-1 animate-fade-in",href:i.url,target:"_blank",style:T(`color:${i.color}`)},[s("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:i.url,title:i.name},null,8,ne),s("div",{text:"xl",m:"2",class:k(i.icon)},null,2)],12,te))),128))])],2)]))}});const oe={class:"inline-flex",text:"sm",py:"1"},ae={key:1,mx:"2"},le=h({__name:"YunPostCategoriesAndTags",props:{frontmatter:{}},setup(v){return(e,o)=>{const t=A,l=H;return a(),r("div",oe,[e.frontmatter.categories?(a(),d(t,{key:0,categories:e.frontmatter.categories},null,8,["categories"])):c("v-if",!0),e.frontmatter.categories&&e.frontmatter.tags?(a(),r("span",ae,"-")):c("v-if",!0),e.frontmatter.tags?(a(),d(l,{key:2,tags:e.frontmatter.tags},null,8,["tags"])):c("v-if",!0)])}}}),re={key:0,flex:"~",text:"sm",py:"1"},ie=["title"],ce=s("div",{"inline-flex":"","i-ri-eye-line":""},null,-1),ue=["data-path"],_e=["title"],pe=s("div",{"inline-flex":"","i-ri-chat-4-line":""},null,-1),me=["data-path"],de=h({__name:"YunWalineMeta",setup(v){const e=V(),o=B(),t=f(()=>o.value.addons["valaxy-addon-waline"]),{t:l}=$();return(_,p)=>t.value&&t.value.options?(a(),r("div",re,[t.value.options.pageview?(a(),r("div",{key:0,"inline-flex":"",justify:"center",items:"center",mx:"2",title:n(l)("post.pageview_count")},[ce,s("span",{"ml-1":"","inline-flex":"",class:"waline-pageview-count","data-path":n(e).path},null,8,ue)],8,ie)):c("v-if",!0),t.value.options.comment?(a(),r("div",{key:1,"inline-flex":"",justify:"center",items:"center",mx:"2",title:n(l)("post.comment_count")},[pe,s("span",{"ml-1":"","inline-flex":"",class:"waline-comment-count","data-path":n(e).path},null,8,me)],8,_e)):c("v-if",!0)])):c("v-if",!0)}}),ve=h({__name:"post",setup(v){const e=x(),o=L(),t=j(),l=f(()=>typeof o.value.sponsor=="boolean"?o.value.sponsor:e.value.sponsor.enable);return M(U({"@type":"BlogPosting",headline:o.value.title,description:o.value.description,author:[{name:e.value.author.name,url:e.value.author.link}]})),(_,p)=>{const i=R,u=de,C=le,b=se,w=O,Y=N;return a(),d(Y,null,{"main-header-after":g(()=>[y(i,{frontmatter:n(o)},null,8,["frontmatter"]),y(u),y(C,{frontmatter:n(o)},null,8,["frontmatter"])]),"main-content-after":g(()=>[l.value?(a(),d(b,{key:0,m:"t-6"})):c("v-if",!0),n(o).copyright||n(e).license.enabled?(a(),d(w,{key:1,url:n(t),m:"y-4"},null,8,["url"])):c("v-if",!0)]),"aside-custom":g(()=>[F(_.$slots,"aside-custom")]),_:3})}}});export{ve as default};

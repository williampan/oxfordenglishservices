import{j as n,E as o,R as c,l as h,i as l,S as p,o as u,a0 as d,f as a,af as f}from"./G0_wRagb.js";const m="img",S=n({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const t=r,i=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=c(h(l().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return p(e,t.src)}return t.src});return(s,e)=>(u(),d(f(a(m)),{src:a(i),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{S as default};
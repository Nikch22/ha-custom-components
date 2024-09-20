import{j as T}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const S=({label:s,size:v="normal",allCaps:z=!1,color:k="text-primary",fontColor:L,backgroundColor:B="transparent"})=>T.jsx("span",{className:`${v} ${k} label`,style:{color:L,backgroundColor:B},children:z?s.toUpperCase():s});S.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Display a text as label"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Label size",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize the all the characters",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Select one of the pre-set color",defaultValue:{value:"'text-primary'",computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:"Set a custom color"},backgroundColor:{required:!1,tsType:{name:"string"},description:"Set a custom color",defaultValue:{value:"'transparent'",computed:!1}}}};const M={title:"UI/LABELS/MyLabel",component:S,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"},backgroundColor:{control:"color"}}},e={args:{label:"My Label Component"}},a={args:{label:"AllCaps",size:"h1",allCaps:!0}},r={args:{label:"Secondary",color:"text-secondary"}},o={args:{label:"CustomColor",fontColor:"#9a0a6a",size:"h1"}},t={args:{label:"Background Color",color:"text-tertiary",backgroundColor:"#ffe6d4",size:"h1"}};var l,n,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'My Label Component'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,u,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'AllCaps',
    size: 'h1',
    allCaps: true
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,d,C;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Secondary',
    color: 'text-secondary'
  }
}`,...(C=(d=r.parameters)==null?void 0:d.docs)==null?void 0:C.source}}};var y,g,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'CustomColor',
    fontColor: '#9a0a6a',
    size: 'h1'
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,h,x;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Background Color',
    color: 'text-tertiary',
    backgroundColor: '#ffe6d4',
    size: 'h1'
  }
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const V=["Basic","AllCaps","Secondary","CustomColor","CustomBackgroundColor"];export{a as AllCaps,e as Basic,t as CustomBackgroundColor,o as CustomColor,r as Secondary,V as __namedExportsOrder,M as default};

import{_ as p,ai as u,d as o,b as s,m as l,t as n,w as v,r as h,o as a,F as f,x as y,u as g,v as k,e as L}from"./index.de89cf21.js";const $={name:"PaymentList",mounted(){this.init()},computed:{paymentList(){return this.$store.state.user.paymentList}},data(){return{txNetWork:"https://bscscan.com/tx/",loading:!1,error:!1,finished:!1}},watch:{"$store.state.authorization"(t){t&&this.init()}},methods:{getAmount(t){return u(t)},async init(){this.loading=!0,await this.$store.dispatch("getPaymentListAction")?this.finished=!0:this.error=!0,this.loading=!1}}},N={class:"trade-list"},x={class:"header"},b={class:"table"},w={class:"trade-table-th"},A={class:"th-1"},B={class:"th-2"},D={class:"th-3"},H={class:"th-4"},U={class:"trade-td"},C={class:"td-1"},P=["href"],Y={class:"td-2"},F={class:"trade-content"},I={key:0},M={key:1},T={class:"trade-date"},V={class:"td-3"},z={key:0},E={key:1},S={class:"td-4"},W={key:0,class:"used"},j={key:1,class:"unused"};function J(t,d,R,q,i,r){const _=h("van-nav-bar"),c=h("van-empty"),m=h("van-list");return a(),o("div",N,[s("div",x,[l(_,{onClickLeft:d[0]||(d[0]=e=>t.$router.push({name:"UserInfo"})),"left-arrow":"",fixed:"","safe-area-inset-top":"","z-index":"2",title:t.$t("paymentRecords")},null,8,["title"])]),s("div",b,[s("div",w,[s("div",A,n(t.$t("txHash")),1),s("div",B,n(t.$t("paymentItem")),1),s("div",D,n(t.$t("amount")),1),s("div",H,n(t.$t("status")),1)]),l(m,{loading:i.loading,"onUpdate:loading":d[1]||(d[1]=e=>i.loading=e),"loading-text":t.$t("loading"),finished:i.finished,"finished-text":t.$t("noMore"),error:i.error,"onUpdate:error":d[2]||(d[2]=e=>i.error=e),"error-text":t.$t("errorText"),onLoad:r.init},{default:v(()=>[(a(!0),o(f,null,y(r.paymentList,(e,G)=>(a(),o("div",U,[s("div",C,[s("a",{href:`${i.txNetWork}${e.txHash}`,target:"_blank"},n(t.$f.formatAddress(e.txHash,4)),9,P)]),s("div",Y,[s("div",F,[e.paymentType==1?(a(),o("span",I,n(t.$t("violationPenalty")),1)):(a(),o("span",M,n(t.$t("adminPurchase")),1))]),s("div",T,n(t.$dayjs.unix(e.txTime).format("YYYY-MM-DD HH:mm")),1)]),s("div",V,[e.tokenName=="JF"?(a(),o("span",z,n(r.getAmount(e.amount))+n(e.tokenName),1)):e.tokenName=="BNB"?(a(),o("span",E,n(r.getAmount(e.amount))+n(e.tokenName),1)):L("",!0)]),s("div",S,[e.status==1?(a(),o("div",W,n(t.$t("paymentUsed")),1)):(a(),o("div",j,n(t.$t("paymentUnused")),1))])]))),256)),g(l(c,{class:"empty",description:t.$t("emptyData")},null,8,["description"]),[[k,r.paymentList&&r.paymentList.length===0&&!i.loading]])]),_:1},8,["loading","loading-text","finished","finished-text","error","error-text","onLoad"])])])}const O=p($,[["render",J],["__scopeId","data-v-3c65d2f5"]]);export{O as default};

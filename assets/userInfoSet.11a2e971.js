import{_ as b,o as C,d as y,b as a,f as v,t as i,m as s,w as c,r as l,p as _,g as k,k as I,T as A,F as w,y as B}from"./index.10c3bac0.js";import{D as M}from"./dialogBase.f1d16a12.js";import{E as T}from"./editAvatar.a01bac42.js";const N={name:"CountryCode",props:{countryCode:{type:String,default:""}},computed:{countryCodeNew:{get(){return this.countryCode},set(e){this.$emit("update:countryCode",e)}},language(){return this.$store.state.lang.language}},watch:{searchKey:function(){let e=String(this.searchKey);e=e.replace(/\s*/g,"");const t=new RegExp(e,"ig");this.codeOptions=this.options.filter(m=>m.text.match(t)!=null)}},data(){return{countryOptions:[{short:"AD",name:"\u5B89\u9053\u5C14\u5171\u548C\u56FD",en:"Andorra",tel:"376"},{short:"AE",name:"\u963F\u62C9\u4F2F\u8054\u5408\u914B\u957F\u56FD",en:"UnitedArabEmirates",tel:"971"},{short:"AF",name:"\u963F\u5BCC\u6C57",en:"Afghanistan",tel:"93"},{short:"AG",name:"\u5B89\u63D0\u74DC\u548C\u5DF4\u5E03\u8FBE",en:"AntiguaandBarbuda",tel:"1268"},{short:"AI",name:"\u5B89\u572D\u62C9\u5C9B",en:"Anguilla",tel:"1264"},{short:"AL",name:"\u963F\u5C14\u5DF4\u5C3C\u4E9A",en:"Albania",tel:"355"},{short:"AM",name:"\u4E9A\u7F8E\u5C3C\u4E9A",en:"Armenia",tel:"374"},{short:"",name:"\u963F\u68EE\u677E",en:"Ascension",tel:"247"},{short:"AO",name:"\u5B89\u54E5\u62C9",en:"Angola",tel:"244"},{short:"AR",name:"\u963F\u6839\u5EF7",en:"Argentina",tel:"54"},{short:"AT",name:"\u5965\u5730\u5229",en:"Austria",tel:"43"},{short:"AU",name:"\u6FB3\u5927\u5229\u4E9A",en:"Australia",tel:"61"},{short:"AZ",name:"\u963F\u585E\u62DC\u7586",en:"Azerbaijan",tel:"994"},{short:"BB",name:"\u5DF4\u5DF4\u591A\u65AF",en:"Barbados",tel:"1246"},{short:"BD",name:"\u5B5F\u52A0\u62C9\u56FD",en:"Bangladesh",tel:"880"},{short:"BE",name:"\u6BD4\u5229\u65F6",en:"Belgium",tel:"32"},{short:"BF",name:"\u5E03\u57FA\u7EB3\u6CD5\u7D22",en:"Burkina-faso",tel:"226"},{short:"BG",name:"\u4FDD\u52A0\u5229\u4E9A",en:"Bulgaria",tel:"359"},{short:"BH",name:"\u5DF4\u6797",en:"Bahrain",tel:"973"},{short:"BI",name:"\u5E03\u9686\u8FEA",en:"Burundi",tel:"257"},{short:"BJ",name:"\u8D1D\u5B81",en:"Benin",tel:"229"},{short:"BL",name:"\u5DF4\u52D2\u65AF\u5766",en:"Palestine",tel:"970"},{short:"BM",name:"\u767E\u6155\u5927\u7FA4\u5C9B",en:"BermudaIs.",tel:"1441"},{short:"BN",name:"\u6587\u83B1",en:"Brunei",tel:"673"},{short:"BO",name:"\u73BB\u5229\u7EF4\u4E9A",en:"Bolivia",tel:"591"},{short:"BR",name:"\u5DF4\u897F",en:"Brazil",tel:"55"},{short:"BS",name:"\u5DF4\u54C8\u9A6C",en:"Bahamas",tel:"1242"},{short:"BW",name:"\u535A\u8328\u74E6\u7EB3",en:"Botswana",tel:"267"},{short:"BY",name:"\u767D\u4FC4\u7F57\u65AF",en:"Belarus",tel:"375"},{short:"BZ",name:"\u4F2F\u5229\u5179",en:"Belize",tel:"501"},{short:"CA",name:"\u52A0\u62FF\u5927",en:"Canada",tel:"1"},{short:"",name:"\u5F00\u66FC\u7FA4\u5C9B",en:"CaymanIs.",tel:"1345"},{short:"CF",name:"\u4E2D\u975E\u5171\u548C\u56FD",en:"CentralAfricanRepublic",tel:"236"},{short:"CG",name:"\u521A\u679C",en:"Congo",tel:"242"},{short:"CH",name:"\u745E\u58EB",en:"Switzerland",tel:"41"},{short:"CK",name:"\u5E93\u514B\u7FA4\u5C9B",en:"CookIs.",tel:"682"},{short:"CL",name:"\u667A\u5229",en:"Chile",tel:"56"},{short:"CM",name:"\u5580\u9EA6\u9686",en:"Cameroon",tel:"237"},{short:"CN",name:"\u4E2D\u56FD",en:"China",tel:"86"},{short:"CO",name:"\u54E5\u4F26\u6BD4\u4E9A",en:"Colombia",tel:"57"},{short:"CR",name:"\u54E5\u65AF\u8FBE\u9ECE\u52A0",en:"CostaRica",tel:"506"},{short:"CS",name:"\u6377\u514B",en:"Czech",tel:"420"},{short:"CU",name:"\u53E4\u5DF4",en:"Cuba",tel:"53"},{short:"CY",name:"\u585E\u6D66\u8DEF\u65AF",en:"Cyprus",tel:"357"},{short:"CZ",name:"\u6377\u514B",en:"CzechRepublic",tel:"420"},{short:"DE",name:"\u5FB7\u56FD",en:"Germany",tel:"49"},{short:"DJ",name:"\u5409\u5E03\u63D0",en:"Djibouti",tel:"253"},{short:"DK",name:"\u4E39\u9EA6",en:"Denmark",tel:"45"},{short:"DO",name:"\u591A\u7C73\u5C3C\u52A0\u5171\u548C\u56FD",en:"DominicaRep.",tel:"1890"},{short:"DZ",name:"\u963F\u5C14\u53CA\u5229\u4E9A",en:"Algeria",tel:"213"},{short:"EC",name:"\u5384\u74DC\u591A\u5C14",en:"Ecuador",tel:"593"},{short:"EE",name:"\u7231\u6C99\u5C3C\u4E9A",en:"Estonia",tel:"372"},{short:"EG",name:"\u57C3\u53CA",en:"Egypt",tel:"20"},{short:"ES",name:"\u897F\u73ED\u7259",en:"Spain",tel:"34"},{short:"ET",name:"\u57C3\u585E\u4FC4\u6BD4\u4E9A",en:"Ethiopia",tel:"251"},{short:"FI",name:"\u82AC\u5170",en:"Finland",tel:"358"},{short:"FJ",name:"\u6590\u6D4E",en:"Fiji",tel:"679"},{short:"FR",name:"\u6CD5\u56FD",en:"France",tel:"33"},{short:"GA",name:"\u52A0\u84EC",en:"Gabon",tel:"241"},{short:"GB",name:"\u82F1\u56FD",en:"UnitedKiongdom",tel:"44"},{short:"GD",name:"\u683C\u6797\u7EB3\u8FBE",en:"Grenada",tel:"1809"},{short:"GE",name:"\u683C\u9C81\u5409\u4E9A",en:"Georgia",tel:"995"},{short:"GF",name:"\u6CD5\u5C5E\u572D\u4E9A\u90A3",en:"FrenchGuiana",tel:"594"},{short:"GH",name:"\u52A0\u7EB3",en:"Ghana",tel:"233"},{short:"GI",name:"\u76F4\u5E03\u7F57\u9640",en:"Gibraltar",tel:"350"},{short:"GM",name:"\u5188\u6BD4\u4E9A",en:"Gambia",tel:"220"},{short:"GN",name:"\u51E0\u5185\u4E9A",en:"Guinea",tel:"224"},{short:"GR",name:"\u5E0C\u814A",en:"Greece",tel:"30"},{short:"GT",name:"\u5371\u5730\u9A6C\u62C9",en:"Guatemala",tel:"502"},{short:"GU",name:"\u5173\u5C9B",en:"Guam",tel:"1671"},{short:"GY",name:"\u572D\u4E9A\u90A3",en:"Guyana",tel:"592"},{short:"HK",name:"\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A",en:"Hongkong",tel:"852"},{short:"HN",name:"\u6D2A\u90FD\u62C9\u65AF",en:"Honduras",tel:"504"},{short:"HT",name:"\u6D77\u5730",en:"Haiti",tel:"509"},{short:"HU",name:"\u5308\u7259\u5229",en:"Hungary",tel:"36"},{short:"ID",name:"\u5370\u5EA6\u5C3C\u897F\u4E9A",en:"Indonesia",tel:"62"},{short:"IE",name:"\u7231\u5C14\u5170",en:"Ireland",tel:"353"},{short:"IL",name:"\u4EE5\u8272\u5217",en:"Israel",tel:"972"},{short:"IN",name:"\u5370\u5EA6",en:"India",tel:"91"},{short:"IQ",name:"\u4F0A\u62C9\u514B",en:"Iraq",tel:"964"},{short:"IR",name:"\u4F0A\u6717",en:"Iran",tel:"98"},{short:"IS",name:"\u51B0\u5C9B",en:"Iceland",tel:"354"},{short:"IT",name:"\u610F\u5927\u5229",en:"Italy",tel:"39"},{short:"",name:"\u79D1\u7279\u8FEA\u74E6",en:"IvoryCoast",tel:"225"},{short:"JM",name:"\u7259\u4E70\u52A0",en:"Jamaica",tel:"1876"},{short:"JO",name:"\u7EA6\u65E6",en:"Jordan",tel:"962"},{short:"JP",name:"\u65E5\u672C",en:"Japan",tel:"81"},{short:"KE",name:"\u80AF\u5C3C\u4E9A",en:"Kenya",tel:"254"},{short:"KG",name:"\u5409\u5C14\u5409\u65AF\u5766",en:"Kyrgyzstan",tel:"331"},{short:"KH",name:"\u67EC\u57D4\u5BE8",en:"Kampuchea(Cambodia)",tel:"855"},{short:"KP",name:"\u671D\u9C9C",en:"NorthKorea",tel:"850"},{short:"KR",name:"\u97E9\u56FD",en:"Korea",tel:"82"},{short:"KT",name:"\u79D1\u7279\u8FEA\u74E6\u5171\u548C\u56FD",en:"RepublicofIvoryCoast",tel:"225"},{short:"KW",name:"\u79D1\u5A01\u7279",en:"Kuwait",tel:"965"},{short:"KZ",name:"\u54C8\u8428\u514B\u65AF\u5766",en:"Kazakstan",tel:"327"},{short:"LA",name:"\u8001\u631D",en:"Laos",tel:"856"},{short:"LB",name:"\u9ECE\u5DF4\u5AE9",en:"Lebanon",tel:"961"},{short:"LC",name:"\u5723\u5362\u897F\u4E9A",en:"St.Lucia",tel:"1758"},{short:"LI",name:"\u5217\u652F\u6566\u58EB\u767B",en:"Liechtenstein",tel:"423"},{short:"LK",name:"\u65AF\u91CC\u5170\u5361",en:"SriLanka",tel:"94"},{short:"LR",name:"\u5229\u6BD4\u91CC\u4E9A",en:"Liberia",tel:"231"},{short:"LS",name:"\u83B1\u7D22\u6258",en:"Lesotho",tel:"266"},{short:"LT",name:"\u7ACB\u9676\u5B9B",en:"Lithuania",tel:"370"},{short:"LU",name:"\u5362\u68EE\u5821",en:"Luxembourg",tel:"352"},{short:"LV",name:"\u62C9\u8131\u7EF4\u4E9A",en:"Latvia",tel:"371"},{short:"LY",name:"\u5229\u6BD4\u4E9A",en:"Libya",tel:"218"},{short:"MA",name:"\u6469\u6D1B\u54E5",en:"Morocco",tel:"212"},{short:"MC",name:"\u6469\u7EB3\u54E5",en:"Monaco",tel:"377"},{short:"MD",name:"\u6469\u5C14\u591A\u74E6",en:"Moldova,Republicof",tel:"373"},{short:"MG",name:"\u9A6C\u8FBE\u52A0\u65AF\u52A0",en:"Madagascar",tel:"261"},{short:"ML",name:"\u9A6C\u91CC",en:"Mali",tel:"223"},{short:"MM",name:"\u7F05\u7538",en:"Burma",tel:"95"},{short:"MN",name:"\u8499\u53E4",en:"Mongolia",tel:"976"},{short:"MO",name:"\u6FB3\u95E8",en:"Macao",tel:"853"},{short:"MS",name:"\u8499\u7279\u585E\u62C9\u7279\u5C9B",en:"MontserratIs",tel:"1664"},{short:"MT",name:"\u9A6C\u8033\u4ED6",en:"Malta",tel:"356"},{short:"",name:"\u9A6C\u91CC\u4E9A\u90A3\u7FA4\u5C9B",en:"MarianaIs",tel:"1670"},{short:"",name:"\u9A6C\u63D0\u5C3C\u514B",en:"Martinique",tel:"596"},{short:"MU",name:"\u6BDB\u91CC\u6C42\u65AF",en:"Mauritius",tel:"230"},{short:"MV",name:"\u9A6C\u5C14\u4EE3\u592B",en:"Maldives",tel:"960"},{short:"MW",name:"\u9A6C\u62C9\u7EF4",en:"Malawi",tel:"265"},{short:"MX",name:"\u58A8\u897F\u54E5",en:"Mexico",tel:"52"},{short:"MY",name:"\u9A6C\u6765\u897F\u4E9A",en:"Malaysia",tel:"60"},{short:"MZ",name:"\u83AB\u6851\u6BD4\u514B",en:"Mozambique",tel:"258"},{short:"NA",name:"\u7EB3\u7C73\u6BD4\u4E9A",en:"Namibia",tel:"264"},{short:"NE",name:"\u5C3C\u65E5\u5C14",en:"Niger",tel:"977"},{short:"NG",name:"\u5C3C\u65E5\u5229\u4E9A",en:"Nigeria",tel:"234"},{short:"NI",name:"\u5C3C\u52A0\u62C9\u74DC",en:"Nicaragua",tel:"505"},{short:"NL",name:"\u8377\u5170",en:"Netherlands",tel:"31"},{short:"NO",name:"\u632A\u5A01",en:"Norway",tel:"47"},{short:"NP",name:"\u5C3C\u6CCA\u5C14",en:"Nepal",tel:"977"},{short:"",name:"\u8377\u5C5E\u5B89\u7684\u5217\u65AF",en:"NetheriandsAntilles",tel:"599"},{short:"NR",name:"\u7459\u9C81",en:"Nauru",tel:"674"},{short:"NZ",name:"\u65B0\u897F\u5170",en:"NewZealand",tel:"64"},{short:"OM",name:"\u963F\u66FC",en:"Oman",tel:"968"},{short:"PA",name:"\u5DF4\u62FF\u9A6C",en:"Panama",tel:"507"},{short:"PE",name:"\u79D8\u9C81",en:"Peru",tel:"51"},{short:"PF",name:"\u6CD5\u5C5E\u73BB\u5229\u5C3C\u897F\u4E9A",en:"FrenchPolynesia",tel:"689"},{short:"PG",name:"\u5DF4\u5E03\u4E9A\u65B0\u51E0\u5185\u4E9A",en:"PapuaNewCuinea",tel:"675"},{short:"PH",name:"\u83F2\u5F8B\u5BBE",en:"Philippines",tel:"63"},{short:"PK",name:"\u5DF4\u57FA\u65AF\u5766",en:"Pakistan",tel:"92"},{short:"PL",name:"\u6CE2\u5170",en:"Poland",tel:"48"},{short:"PR",name:"\u6CE2\u591A\u9ECE\u5404",en:"PuertoRico",tel:"1787"},{short:"PT",name:"\u8461\u8404\u7259",en:"Portugal",tel:"351"},{short:"PY",name:"\u5DF4\u62C9\u572D",en:"Paraguay",tel:"595"},{short:"QA",name:"\u5361\u5854\u5C14",en:"Qatar",tel:"974"},{short:"",name:"\u7559\u5C3C\u65FA",en:"Reunion",tel:"262"},{short:"RO",name:"\u7F57\u9A6C\u5C3C\u4E9A",en:"Romania",tel:"40"},{short:"RU",name:"\u4FC4\u7F57\u65AF",en:"Russia",tel:"7"},{short:"SA",name:"\u6C99\u7279\u963F\u62C9\u4F2F",en:"SaudiArabia",tel:"966"},{short:"SB",name:"\u6240\u7F57\u95E8\u7FA4\u5C9B",en:"SolomonIs",tel:"677"},{short:"SC",name:"\u585E\u820C\u5C14",en:"Seychelles",tel:"248"},{short:"SD",name:"\u82CF\u4E39",en:"Sudan",tel:"249"},{short:"SE",name:"\u745E\u5178",en:"Sweden",tel:"46"},{short:"SG",name:"\u65B0\u52A0\u5761",en:"Singapore",tel:"65"},{short:"SI",name:"\u65AF\u6D1B\u6587\u5C3C\u4E9A",en:"Slovenia",tel:"386"},{short:"SK",name:"\u65AF\u6D1B\u4F10\u514B",en:"Slovakia",tel:"421"},{short:"SL",name:"\u585E\u62C9\u5229\u6602",en:"SierraLeone",tel:"232"},{short:"SM",name:"\u5723\u9A6C\u529B\u8BFA",en:"SanMarino",tel:"378"},{short:"",name:"\u4E1C\u8428\u6469\u4E9A(\u7F8E)",en:"SamoaEastern",tel:"684"},{short:"",name:"\u897F\u8428\u6469\u4E9A",en:"SanMarino",tel:"685"},{short:"SN",name:"\u585E\u5185\u52A0\u5C14",en:"Senegal",tel:"221"},{short:"SO",name:"\u7D22\u9A6C\u91CC",en:"Somali",tel:"252"},{short:"SR",name:"\u82CF\u91CC\u5357",en:"Suriname",tel:"597"},{short:"ST",name:"\u5723\u591A\u7F8E\u548C\u666E\u6797\u897F\u6BD4",en:"SaoTomeandPrincipe",tel:"239"},{short:"SV",name:"\u8428\u5C14\u74E6\u591A",en:"EISalvador",tel:"503"},{short:"SY",name:"\u53D9\u5229\u4E9A",en:"Syria",tel:"963"},{short:"SZ",name:"\u65AF\u5A01\u58EB\u5170",en:"Swaziland",tel:"268"},{short:"TD",name:"\u4E4D\u5F97",en:"Chad",tel:"235"},{short:"TG",name:"\u591A\u54E5",en:"Togo",tel:"228"},{short:"TH",name:"\u6CF0\u56FD",en:"Thailand",tel:"66"},{short:"TJ",name:"\u5854\u5409\u514B\u65AF\u5766",en:"Tajikstan",tel:"992"},{short:"TM",name:"\u571F\u5E93\u66FC\u65AF\u5766",en:"Turkmenistan",tel:"993"},{short:"TN",name:"\u7A81\u5C3C\u65AF",en:"Tunisia",tel:"216"},{short:"TO",name:"\u6C64\u52A0",en:"Tonga",tel:"676"},{short:"TR",name:"\u571F\u8033\u5176",en:"Turkey",tel:"90"},{short:"TT",name:"\u7279\u7ACB\u5C3C\u8FBE\u548C\u591A\u5DF4\u54E5",en:"TrinidadandTobago",tel:"1809"},{short:"TW",name:"\u53F0\u6E7E\u7701",en:"Taiwan",tel:"886"},{short:"TZ",name:"\u5766\u6851\u5C3C\u4E9A",en:"Tanzania",tel:"255"},{short:"UA",name:"\u4E4C\u514B\u5170",en:"Ukraine",tel:"380"},{short:"UG",name:"\u4E4C\u5E72\u8FBE",en:"Uganda",tel:"256"},{short:"US",name:"\u7F8E\u56FD",en:"UnitedStatesofAmerica",tel:"1"},{short:"UY",name:"\u4E4C\u62C9\u572D",en:"Uruguay",tel:"598"},{short:"UZ",name:"\u4E4C\u5179\u522B\u514B\u65AF\u5766",en:"Uzbekistan",tel:"233"},{short:"VC",name:"\u5723\u6587\u68EE\u7279\u5C9B",en:"SaintVincent",tel:"1784"},{short:"VE",name:"\u59D4\u5185\u745E\u62C9",en:"Venezuela",tel:"58"},{short:"VN",name:"\u8D8A\u5357",en:"Vietnam",tel:"84"},{short:"YE",name:"\u4E5F\u95E8",en:"Yemen",tel:"967"},{short:"YU",name:"\u5357\u65AF\u62C9\u592B",en:"Yugoslavia",tel:"381"},{short:"ZA",name:"\u5357\u975E",en:"SouthAfrica",tel:"27"},{short:"ZM",name:"\u8D5E\u6BD4\u4E9A",en:"Zambia",tel:"260"},{short:"ZR",name:"\u624E\u4F0A\u5C14",en:"Zaire",tel:"243"},{short:"ZW",name:"\u6D25\u5DF4\u5E03\u97E6",en:"Zimbabwe",tel:"263"}],showPicker:!1,searchKey:"",codeOptions:[],options:[]}},mounted(){this.codeOptions=[];for(let e of this.countryOptions)this.language=="en"?this.options.push({text:"+"+e.tel+" ("+e.en+")",value:e.tel}):this.options.push({text:"+"+e.tel+" ("+e.name+")",value:e.tel});this.codeOptions=this.options},methods:{openPicker(){this.showPicker=!0},onConfirm(e){this.countryCodeNew=e.value,this.showPicker=!1},onCancel(){this.showPicker=!1}}},U=e=>(_("data-v-b2882650"),e=e(),k(),e),V={class:"country-code"},G=U(()=>a("span",null,"+",-1));function L(e,t,m,d,n,r){const f=l("van-icon"),p=l("van-field"),h=l("van-picker"),g=l("van-popup");return C(),y("div",V,[a("div",{onClick:t[0]||(t[0]=(...u)=>r.openPicker&&r.openPicker(...u))},[G,v(i(r.countryCodeNew)+" ",1),s(f,{class:"icon",name:"arrow-down"})]),s(g,{class:"picker",show:n.showPicker,"onUpdate:show":t[2]||(t[2]=u=>n.showPicker=u),position:"bottom"},{default:c(()=>[s(h,{columns:n.codeOptions,onConfirm:r.onConfirm,onCancel:r.onCancel,"confirm-button-text":e.$t("confirm"),"cancel-button-text":e.$t("cancel")},{title:c(()=>[s(p,{class:"search",modelValue:n.searchKey,"onUpdate:modelValue":t[1]||(t[1]=u=>n.searchKey=u),clearable:""},null,8,["modelValue"])]),_:1},8,["columns","onConfirm","onCancel","confirm-button-text","cancel-button-text"])]),_:1},8,["show"])])}const E=b(N,[["render",L],["__scopeId","data-v-b2882650"]]);const P={name:"UserInfoSet",components:{DialogBase:M,EditAvatar:T,CountryCode:E},setup(){return{formatterSpace:t=>t.trim()}},watch:{"$store.state.user.userAddress"(){this.initUserInfo(),this.isFirst=!0},"$store.state.user.image"(){this.userInfo.image=this.$store.state.user.image},userInfo:{handler:function(e,t){this.userInfo=e,this.isFirst||(this.isEdit=!0),this.isFirst=!1},deep:!0}},data(){return{isFirst:!0,isEdit:!1,tipVisable:!1,showLabelImg:!1,userInfo:{},imgUrl:"",imgFile:void 0,type:null}},mounted(){this.initUserInfo()},methods:{initUserInfo(){this.userInfo={lastImageNicknameTime:this.$store.state.user.lastImageNicknameTime,userAddress:this.$store.state.user.userAddress,image:this.$store.state.user.image,nickname:this.$store.state.user.nickname,countryCode:this.$store.state.user.countryCode,mobile:this.$store.state.user.mobile,website:this.$store.state.user.website,email:this.$store.state.user.email,bio:this.$store.state.user.bio}},emailValidator(e){return e?/^(?:[a-z\d]+[_\-\+\.]?)*[a-z\d]+@(?:([a-z\d]+\-?)*[a-z\d]+\.)+([a-z]{2,})+$/i.test(e):!0},getImgFile(e){this.imgFile=e,this.tipVisable=!0,this.type=0},async uploadAvatar(){let e=this.$toast.loading({message:"Loading...",forbidClick:!0,duration:0});try{(await I.user.updateLogo(this.imgFile)).status==1&&await this.$store.dispatch("getUserInfoAction")}catch(t){console.log(t)}finally{e.clear(),this.tipVisable=!1}},finish(){if(!!this.emailValidator(this.userInfo.email)&&this.isEdit){let e=this.userInfo.nickname;e==this.$store.state.user.nickname?this.uploadInfo(e):(this.tipVisable=!0,this.type=1)}},async uploadInfo(e){let t=A.loading({message:"Loading...",forbidClick:!0,duration:0});try{let m=this.userInfo.mobile,d=this.userInfo.countryCode,n=await I.user.updateInfo(e,this.userInfo.email,d,m,this.userInfo.website,this.userInfo.bio);console.log(n),n.status==1&&(this.$store.dispatch("getUserInfoAction"),this.isEdit=!1,this.$router.push({name:"UserInfo"})),n.status==-4013&&(this.userInfo.nickname=this.$store.state.user.nickname)}catch(m){console.log(m)}finally{t.clear(),this.tipVisable=!1}},async submit(){if(this.type==0)this.uploadAvatar();else if(this.type==1){let e=this.userInfo.nickname;this.uploadInfo(e)}},completeWebsiteFn(){this.userInfo.website=this.$f.formatLink(this.userInfo.website)}}},F={class:"userinfo-set"},K={class:"set-content"},R={class:"form-item"},z={class:"form-item"},O={class:"phone-box"},D={class:"form-item"},Z={class:"form-item"},x={class:"form-item"},$={class:"tip-info"};function H(e,t,m,d,n,r){const f=l("van-nav-bar"),p=l("EditAvatar"),h=l("van-field"),g=l("CountryCode"),u=l("van-form"),S=l("DialogBase");return C(),y(w,null,[a("div",F,[a("div",null,[s(f,{"left-text":e.$t("cancel"),onClickLeft:t[1]||(t[1]=o=>e.$router.push({name:"UserInfo"})),fixed:"","safe-area-inset-top":"","z-index":"2",title:e.$t("editUserInfo")},{right:c(()=>[a("span",{class:"finish",onClick:t[0]||(t[0]=(...o)=>r.finish&&r.finish(...o)),style:B({color:n.isEdit?"#9505f9":"#999"})},i(e.$t("submit")),5)]),_:1},8,["left-text","title"])]),a("div",K,[s(p,{image:n.userInfo.image,lastImageNicknameTime:n.userInfo.lastImageNicknameTime,address:n.userInfo.userAddress,onGetImgFile:r.getImgFile},null,8,["image","lastImageNicknameTime","address","onGetImgFile"]),s(u,{class:"form-box"},{default:c(()=>[a("div",R,[a("label",null,[a("div",null,i(e.$t("nickname")),1),a("div",null,i(e.$t("editUserInfoLimit")),1)]),s(h,{modelValue:n.userInfo.nickname,"onUpdate:modelValue":t[2]||(t[2]=o=>n.userInfo.nickname=o),maxlength:"50",formatter:d.formatterSpace},null,8,["modelValue","formatter"])]),a("div",z,[a("label",null,i(e.$t("mobile")),1),a("div",O,[s(g,{countryCode:n.userInfo.countryCode,"onUpdate:countryCode":t[3]||(t[3]=o=>n.userInfo.countryCode=o)},null,8,["countryCode"]),s(h,{modelValue:n.userInfo.mobile,"onUpdate:modelValue":t[4]||(t[4]=o=>n.userInfo.mobile=o),type:"number",maxlength:"30"},null,8,["modelValue"])])]),a("div",D,[a("label",null,i(e.$t("website")),1),s(h,{modelValue:n.userInfo.website,"onUpdate:modelValue":t[5]||(t[5]=o=>n.userInfo.website=o),onBlur:t[6]||(t[6]=o=>r.completeWebsiteFn()),maxlength:"300",type:"text"},null,8,["modelValue"])]),a("div",Z,[a("label",null,i(e.$t("email")),1),s(h,{modelValue:n.userInfo.email,"onUpdate:modelValue":t[7]||(t[7]=o=>n.userInfo.email=o),maxlength:"100",type:"email",rules:[{validator:r.emailValidator,message:e.$t("inputRightEmail")}]},null,8,["modelValue","rules"])]),a("div",x,[a("label",null,i(e.$t("bio")),1),s(h,{modelValue:n.userInfo.bio,"onUpdate:modelValue":t[8]||(t[8]=o=>n.userInfo.bio=o),formatter:d.formatterSpace,rows:"3",autosize:"",type:"textarea",maxlength:"300","show-word-limit":""},null,8,["modelValue","formatter"])])]),_:1})])]),s(S,{visible:n.tipVisable,"onUpdate:visible":t[9]||(t[9]=o=>n.tipVisable=o),title:e.$t("tips"),showConfirmButton:!0,showCancelButton:!0,autoClose:!1,onOnConfirm:r.submit},{default:c(()=>[a("div",$,i(e.$t("editUserInfoTips")),1)]),_:1},8,["visible","title","onOnConfirm"])],64)}const j=b(P,[["render",H],["__scopeId","data-v-93f62245"]]);export{j as default};

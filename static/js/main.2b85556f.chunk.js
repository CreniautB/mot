(this.webpackJsonpcodechiffre=this.webpackJsonpcodechiffre||[]).push([[0],{14:function(E,A,O){},15:function(E,A,O){},16:function(E,A,O){},20:function(E,A,O){"use strict";O.r(A);var I=O(1),R=O.n(I),e=O(8),N=O.n(e),S=(O(14),O(15),O(2)),t=O(9),T=(O(16),O(5)),U=O.n(T),L=O(0);var n=function(E){var A=E.content,O=E.color,I=E.fontColor;return Object(L.jsx)("div",{className:"square",style:{background:O,color:I},children:A})};var c=function(E,A){for(var O=[],I=-1;-1!==(I=E.indexOf(A,I+1));)O.push(I);return O};var r=function(E){var A=E.level,O=E.guess,R=Object(I.useState)([]),e=Object(S.a)(R,2),N=e[0],T=e[1],r=Object(I.useState)(1),s=Object(S.a)(r,2),M=s[0],o=s[1],C=Object(I.useState)(!1),i=Object(S.a)(C,2),G=i[0],a=i[1],l=Object(I.useRef)(null);function B(E){if(""!==l.current.value&&l.current.value.length===A){var I=l.current.value.toUpperCase().split(""),R=[];U.a.isEqual(U.a.sortBy(O),U.a.sortBy(I))&&a(!0);for(var e=0;e<I.length;e++)O.includes(I[e])||R.push({item:I[e],color:"orange",fontColor:"white"}),O.includes(I[e])&&(c(O,I[e]).includes(e)?R.push({item:I[e],color:"rgba(17, 209, 69, 0.95)",fontColor:"white"}):R.push({item:I[e],color:"white",fontColor:"black"}));T((function(E){return[].concat(Object(t.a)(E),[R])})),o(M+1)}}if(G){var u=function(E){return 1===E?20:2===E?18:3===E?16:4===E?14:5===E?12:6===E?10:7===E?8:8===E?6:9===E?4:10===E?2:void 0}(M);return Object(L.jsxs)("h1",{children:["F\xe9licitation vous avez r\xe9ussit \xe0 devniez le mot !",Object(L.jsx)("br",{})," Vous avez obtenu ",u," / 20 "]})}return 11===M?Object(L.jsxs)("h1",{children:["Vous n'avez pas r\xe9ussi \xe0 deviner le mot",Object(L.jsx)("br",{}),"Qui \xe9tait : ",Object(L.jsx)("strong",{className:"code",children:O})]}):Object(L.jsxs)("div",{className:"level",children:[Object(L.jsxs)("h1",{children:["Devnier le mot \xe0 ",A," lettres"]}),Object(L.jsxs)("div",{className:"tourCount",children:["Essai ",M," / 10"]}),Object(L.jsxs)("div",{className:"inputContainer",children:[Object(L.jsx)("input",{ref:l,onKeyPress:function(E){return function(E){"Enter"===E.key&&B()}(E)}}),Object(L.jsx)("br",{}),Object(L.jsx)("button",{onClick:function(E){return B()},className:"button",children:"Valider votre choix"})]}),Object(L.jsx)("div",{className:"arrayContainer",children:N.map((function(E,A){return Object(L.jsx)("div",{className:"colonne",children:E.map((function(E,A){return Object(L.jsx)(n,{content:E.item,color:E.color,fontColor:E.fontColor},A)}))},A)}))})]})},s=(O(7),[["KYSTE"],["VERSO"],["VOICI"],["FAGOT"],["JOULE"],["JATTE"],["YACHT"],["AMUSE"],["VERTE"],["NULLE"],["OASIS"],["VOILA"],["WAGON"],["DEGEL"],["DOUCE"],["VESTE"],["EXCLU"],["FABLE"],["XENON"],["GOMME"],["HAMAC"],["VOILE"],["HELAS"],["YACKS"],["AGATE"],["DOLCE"],["ESSAI"],["VEULE"],["FLUOR"],["GRAND"],["ZONAT"],["HAVRE"],["OGIVE"],["HONTE"],["IDOLE"],["ORAGE"],["DENSE"],["DOTER"],["ERODE"],["FORCE"],["GLOBE"],["HYMNE"],["ISSUE"],["MEGOT"],["BOULE"],["DURER"],["EXIGU"],["FAUNE"],["GLAND"],["IMAGE"],["LIGNE"],["METRO"],["ATOUT"],["CHIOT"],["ETALE"],["FIGUE"],["GOULU"],["ISOLE"],["LIVRE"],["LIBRE"],["MOTTE"],["AZOTE"],["CANAL"],["CHAUD"],["FRUIT"],["GIFLE"],["INDEX"],["LOPIN"],["MULET"],["MOTEL"],["ORVET"],["ALORS"],["BILLE"],["CARPE"],["FAUVE"],["GERME"],["LATTE"],["MINOU"],["MATCH"],["ANNEE"],["CETTE"],["EMULE"],["FONTE"],["INTER"],["LATEX"],["ARIDE"],["BRAME"],["EGOUT"],["FEMME"],["LEMME"],["NATTE"],["OUBLI"],["BACON"],["BOVIN"],["CAVAS"],["ECART"],["LUNDI"],["NANTI"],["ORQUE"],["ORTIE"],["BOGUE"],["CHAPE"],["GAZON"],["JAUNE"],["MEULE"],["NEUVE"],["BANJO"],["CHOIX"],["HIVER"],["JAMBE"],["NOYER"],["OZONE"],["OSIER"],["GAZON"],["PANDA"],["RENDU"],["RUBAN"],["SABLE"],["FILIN"],["SAULE"],["TABAC"],["FILLE"],["TARTE"],["NUQUE"],["OPALE"],["GENOU"],["FRAIE"],["PAROI"],["PERTE"],["RICIN"],["RUBIS"],["SUPER"],["FRANC"],["TEINT"],["UNION"],["OBOLE"],["DIODE"],["OPIUM"],["ECULE"],["EXTRA"],["PARME"],["PERSE"],["CHANT"],["QUAND"],["FRAIS"],["SOBRE"],["TOISE"],["TIARE"],["DOUZE"],["TAPER"],["OXYDE"],["GAROU"],["DOUVE"],["EPINE"],["PANEL"],["ECRAN"],["QUANT"],["RECIF"],["SAUNA"],["TALON"],["USAGE"],["OPTER"],["EMAIL"],["BIDON"],["PIEUX"],["QUASI"],["QUEUE"],["SONNE"],["SBIRE"],["TAROT"],["VANTE"],["OZONE"],["BANDE"],["PAGNE"],["PICOT"],["RUINE"],["RECTO"],["SAUGE"],["TALUS"],["URINE"],["ORGIE"],["BELLE"],["BLANC"],["PENNE"],["QUELS"],["RUSER"],["RECIT"],["TIBIA"],["TAPAS"],["VIGNE"],["OMEGA"],["BOIRE"],["PENNY"],["QUINT"],["REGLE"],["RECUL"],["SOCLE"],["SCALP"],["TELLE"],["TARSE"]]),M=[["ECZEMA"],["ONDULE"],["NOTION"],["ORACLE"],["FACHOS"],["OSMOSE"],["FRUITS"],["ODORAT"],["EFFACE"],["NUAGES"],["ORANGE"],["FOUFOU"],["ONGLET"],["ESSAIS"],["OSSEUX"],["FLAMBE"],["OEDIPE"],["NOTICE"],["OURSON"],["ABOULE"],["ORACLE"],["ADMIRE"],["FOURMI"],["OURSIN"],["FRERES"],["ORAGES"],["NOTONS"],["CIGARE"],["ALLURE"],["ORALES"],["BALAIS"],["NOYONS"],["ONGLES"],["FOURRE"],["FRUSTE"],["OEDEME"],["BIDULE"],["BETYLE"],["NUANCE"],["BOUSES"],["FACIES"],["GOLFES"],["ENIVRE"],["ENJEUX"],["NUQUES"],["GRIFFE"],["AMORAL"],["ACCRUE"],["PATINE"],["FREMIR"],["PHASES"],["GOLDEN"],["QUITTE"],["BERGES"],["RELUIT"],["NURSES"],["PATOIS"],["COLERE"],["FLAMME"],["PHASME"],["CIERGE"],["PATIOS"],["VISION"],["NUMERO"],["REMAKE"],["GATEAU"],["NEVEUX"],["VENTER"],["PARVIS"],["ACTION"],["WHISKY"],["PATRIE"],["LIVRES"],["VISITE"],["GRIEFS"],["PHOBIE"],["VIOLET"],["BALLET"],["OURSIN"],["MIOCHE"],["RELEVE"],["ZEPHYR"],["BETONS"],["VENTES"],["PATRON"],["FOURME"],["SIROCO"],["CANINS"],["PICORE"],["JONGLE"],["PARURE"],["GOITRE"],["SCRIBE"],["MAIRIE"],["REGIME"],["COPTES"],["FOUDRE"],["SIROPS"],["HABILE"],["MINUTE"],["SCRIPT"],["ADEPTE"],["REGION"],["ADHERE"],["HIDEUX"],["SPHERE"],["LIVRET"],["VISAGE"],["BEVUES"],["REGENT"],["BUFFLE"],["USAGER"],["HILARE"],["FOURNI"],["SPIDER"],["DRAGUE"],["HABITE"],["TOMATE"],["JONQUE"],["VOLUTE"],["MINUIT"],["ESPOIR"],["SPHINX"],["MAJORE"],["FRUGAL"],["GATEUX"],["HINDOU"],["LIVRER"],["BOURSE"],["CLIMAT"],["HIBOUX"],["MAISON"],["FOUETS"],["ALLUME"],["MIGNON"],["FACILE"],["BIFACE"],["MIRAGE"],["MAJEUR"],["DIACRE"],["GOMBOS"],["GATERA"],["DEBRIS"],["HIPPIE"],["FUGUER"],["AGONIE"],["AIMONS"],["MICHES"],["BERGER"],["ESSAIM"],["ADMISE"],["MICRON"],["DEDAIN"],["ACCROC"],["FUGACE"],["MICMAC"],["BETELS"],["EFFACE"],["MIETTE"],["AHURIR"],["BUVARD"],["HAMEAU"],["MAZOUT"],["BUDGET"],["BARQUE"],["INGERE"],["COPRAH"],["HOQUET"],["MICROS"],["BALADE"],["MAITRE"],["CIGALE"],["DRAGON"],["HONTES"],["MIENNE"],["EVOLUE"],["ESPECE"],["AMORCE"],["HAMMAM"],["COLORE"],["DEXTRE"],["BIELLE"],["INHIBE\xa0"],["ABROGE"],["ABRUPT"],["MA\xc7ONS"],["ACTIVE"],["BRAMER"],["HONORE"],["BERLUE"],["DEDALE"],["ETIOLE"],["ESPERE"],["HORDES"],["BUVANT"],["ETOILE"],["BAROUF"],["BUFFET"],["COMBAT"],["INHALE"]],o=[["BAGNARD"],["PAGODES"],["SAUCENT"],["DUMPING"],["ROSIERS"],["KIMONOS"],["RECOLLE"],["LUNAIRE"],["PARSEME"],["AMADOUE"],["SAISONS"],["JERSEYS"],["MIMOSAS"],["QUALITE"],["BAISSER"],["RIZIERE"],["LASCARS"],["ROSETTE"],["MANGENT"],["UTERINE"],["DETRUIT"],["TOUCANS"],["JUPETTE"],["QUANTUM"],["LUXURES"],["VASSALE"],["LIMOGES"],["PARTAGE"],["DERNIER"],["VASQUES"],["LUGUBRE"],["SALACES"],["DESCEND"],["UTOPIES"],["LITHIUM"],["SATYRES"],["CARAMEL"],["SANGSUE"],["JUNIORS"],["TAJINES"],["RAMPANT"],["LUMIERE"],["TEIGNES"],["CARBONE"],["REBELLE"],["TERMITE"],["JUNGLES"],["TOUBIBS"],["BAGNOLE"],["TACHEES"],["LOSANGE"],["REVOQUE"],["INEXACT"],["SALADES"],["KIOSQUE"],["RAVIVER"],["LUSTRES"],["SANGRIA"],["TANGAGE"],["GALLOIS"],["ROTATIF"],["TEXTILE"],["MANETTE"],["SANGUIN"],["TEMPERE"],["GARDONS"],["TACITES"],["LIMOGER"],["RECYCLE"],["TERMINE"],["EGALISE"],["TAISONS"],["MIMIQUE"],["RECLUSE"],["FANFARE"],["SALAGES"],["JETABLE"],["REBIFFE"],["LITOTES"],["SANGLES"],["TEXANES"],["GIROFLE"],["TACTILE"],["MONGOLS"],["REBOURS"],["BALAYER"],["TECKELS"],["LETTRES"],["RECALER"],["AMAIGRI"],["TANDEMS"],["MUETTES"],["SALAIRE"],["TOUAREG"],["AMANDES"],["TEXTURE"],["LASAGNE"],["OISEAUX"],["GARNIES"],["TEMPLES"],["FEINTER"],["TEUTONS"],["LUXUEUX"],["REBOUTE"],["LITIGES"],["SACHETS"],["GARENNE"],["TALENTS"],["CHAMEAU"],["LITIERE"],["SATURES"],["CHAMOIS"],["TERNIES"],["BAGUAGE"],["TOTALES"],["MUEZZIN"],["RECOINS"],["HAMEAUX"],["SACHIEZ"],["TEXTUEL"],["BASIQUE"],["SALAMIS"],["BASKETS"],["MESCLUN"],["DETROIT"],["GALOCHE"],["MILLETS"],["DENTEES"],["GARROTS"],["EMPOTER"],["MOIGNON"],["HORIZON"],["PAPAYER"],["EMBLEME"],["IMPULSE"],["PAPAUTE"],["INCULPE"],["DEVALER"],["SARDINE"],["MESQUIN"],["CHIFFRE"],["GARDEES"],["MILLIER"],["FENDUES"],["GALLONS"],["OXYGENE"],["EMMENER"],["MESSAGE"],["GIROLLE"],["DESIGNS"],["NYMPHEA"],["OGRESSE"],["HORLOGE"],["DOCTEUR"],["MILLION"],["FANIONS"],["BELETTE"],["NOMBRES"],["FENNECS"],["FENOUIL"],["MOINDRE"],["DEVALER"],["INDEXER"],["DENTURE"],["NYMPHES"],["IMPRIME"],["PAPAVER"],["BELOTES"],["EPINEUX"],["OIGNONS"],["HEBERGE"],["INCURIE"],["INCURVE"],["DERMITE"],["MOINEAU"],["EMOTION"],["BELOUGA"],["OGIVALE"],["INCULTE"],["HORMONE"],["NOMBRIL"],["BAMBINS"],["INDEMNE"],["EPINARD"],["HEBREUX"],["BAMBOUS"],["INERTIE"],["BEIGNET"],["INNOVER"],["BANALES"],["BENGALI"],["ELARGIR"],["EPINCER"],["BANANES"],["BANCALE"],["JASMINS"],["BASILIC"],["ASHANTI"],["ACHARDS"],["ACHARNE"]];var C=function(E){var A;5===E&&(A=s),6===E&&(A=M),7===E&&(A=o);var O,I=A[(O=200,Math.floor(Math.random()*O))][0];return I=I.split("")};var i=function(){var E=Object(I.useState)(!1),A=Object(S.a)(E,2),O=A[0],R=A[1];function e(E){R(E)}if(O){var N=C(O);return Object(L.jsx)(r,{level:O,guess:N})}return Object(L.jsxs)("div",{className:"homePage",children:[Object(L.jsxs)("h1",{className:"button titleGame ",children:["Jeux du Code Secret",Object(L.jsx)("br",{})]}),Object(L.jsxs)("h2",{className:"regle",children:["D\xe9chiffrez le code secret",Object(L.jsx)("br",{})," Si la lettre est dans la bonne position la case devient ",Object(L.jsx)("strong",{className:"vert",children:"Verte"}),Object(L.jsx)("br",{}),"Si la lettre est pr\xe9sent dans le code la case devient ",Object(L.jsx)("strong",{children:"Blanche"}),Object(L.jsx)("br",{}),"Sinon elle devient ",Object(L.jsx)("strong",{className:"orange",children:"Orange"})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("button",{className:"button",onClick:function(E){return e(5)},children:"Mot \xe0 5 lettres"},2),Object(L.jsx)("button",{className:"button",onClick:function(E){return e(6)},children:"Mot \xe0 6 lettres"},3),Object(L.jsx)("button",{className:"button",onClick:function(E){return e(7)},children:"Mot \xe0 7 lettres"},4)]})]})};var G=function(){return Object(L.jsxs)("div",{className:"homePage",children:[Object(L.jsx)("img",{src:"img/logo.png",alt:"logo",width:"120px"}),Object(L.jsx)(i,{})]})},a=function(E){E&&E instanceof Function&&O.e(3).then(O.bind(null,21)).then((function(A){var O=A.getCLS,I=A.getFID,R=A.getFCP,e=A.getLCP,N=A.getTTFB;O(E),I(E),R(E),e(E),N(E)}))};N.a.render(Object(L.jsx)(R.a.StrictMode,{children:Object(L.jsx)(G,{})}),document.getElementById("root")),a()},7:function(E,A,O){}},[[20,1,2]]]);
//# sourceMappingURL=main.2b85556f.chunk.js.map
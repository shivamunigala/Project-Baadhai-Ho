(this.webpackJsonpbaadhaiho=this.webpackJsonpbaadhaiho||[]).push([[0],{97:function(A,e,t){"use strict";t.r(e);var a=t(0),n=t.n(a),l=t(14),r=t.n(l),o=t(38),c=t(4),i=t(28),u=t(30),g=t.n(u),m=t(36),s=t.n(m);var B=function(A){return n.a.createElement(s.a,{flipOnHover:!0,flipOnClick:!0,flipDirection:"horizontal",style:{width:"250px",height:"250px"}},n.a.createElement(m.FrontSide,{className:"note",style:{backgroundColor:"white",textAlign:"center",justifyContent:"center",alignItems:"center"}},n.a.createElement("h1",{style:{textAlign:"center",fontSize:"1.5em"}},A.title),n.a.createElement("p",null,A.content)),n.a.createElement(m.BackSide,{className:"note",style:{backgroundColor:"white",textAlign:"center",alignItems:"center",justifyContent:"center"}},n.a.createElement("p",null,"1"==A.sid?"Cuisine:":2==A.sid?"Capacity:":null," ",A.type),n.a.createElement("p",null," ","1"==A.sid?"Cost per plate:":2==A.sid?"Location:":"Cost per hour:"," ",A.cost),n.a.createElement("p",null,"Contact: ",A.tel),n.a.createElement("button",{onClick:function(){A.onDelete(A.id)}},n.a.createElement(g.a,null))))},p=t(41),d=t(55),E=t.n(d),C=t(115),h=t(116),f=t(33),x=t.n(f);var v=function(A){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),l=t[0],r=t[1],o=Object(a.useState)({title:"",tel:"",type:"",cost:"",content:""}),c=Object(i.a)(o,2),u=c[0],m=c[1];function s(A){var e=A.target,t=e.name,a=e.value;m((function(A){return Object(p.a)(Object(p.a)({},A),{},{[t]:a})}))}function B(){r((function(A){return!A}))}return n.a.createElement("div",null,n.a.createElement("form",{className:"create-note"},n.a.createElement("div",{styles:{fontFamily:"Montserrat"}},n.a.createElement("h1",{onClick:B,style:{textAlign:"center",fontFamily:"Montserrat,sans serif"}}," ","Welcome!!"," ")),l&&n.a.createElement("h5",{style:{textAlign:"center",fontFamily:"Montserrat,sans serif"}},"Edit your details below."),l&&n.a.createElement("h5",{style:{textAlign:"center",color:"white",fontFamily:"Montserrat,sans serif"}},"Edit your details below."),l&&n.a.createElement("input",{autoComplete:"off",name:"title",onChange:s,value:u.title,placeholder:"Your company name"}),l&&n.a.createElement("input",{autoComplete:"off",name:"tel",onChange:s,value:u.tel,placeholder:"Enter your contact..."}),l&&"3"!=A.id&&n.a.createElement("input",{autoComplete:"off",name:"type",onChange:s,value:u.type,placeholder:1==A.id?"Cuisines specialised in...":2==A.id?"Seating capacity...":""}),l&&n.a.createElement("input",{autoComplete:"off",name:"cost",onChange:s,value:u.cost,placeholder:1==A.id?"Cost per plate":2==A.id?"Location":"Per hour charge..."}),l&&n.a.createElement("textarea",{name:"content",autoComplete:"off",onChange:s,value:u.content,placeholder:"About your service...",rows:l?3:1}),n.a.createElement(h.a,{in:l},n.a.createElement(C.a,{onClick:function(){A.onDelete(A.id)}},n.a.createElement(g.a,{onClick:B}))),n.a.createElement(h.a,{in:l},n.a.createElement(C.a,{onClick:function(e){A.onAdd(u),e.preventDefault()}},n.a.createElement(E.a,{onClick:B})))))};var y=function(A){var e=Object(a.useState)([]),t=Object(i.a)(e,2),l=t[0],r=t[1];function o(A){var e;"1"==A&&(e="caterer"),"2"==A&&(e="banquet"),"3"==A&&(e="photographer"),x.a.post("/"+e+"/delete","delete").then((function(A){return console.log("sent successfully")})).catch((function(A){return console.log(A)}))}return n.a.createElement("div",null,n.a.createElement(v,{onAdd:function(e){console.log(e),r((function(A){return console.log(A),[e]})),x.a.post("/"+A.type+"/update",e).then((function(A){return console.log("sent successfully")})).catch((function(A){return console.log(A)}))},onDelete:o,id:A.id}),l.map((function(e,t){return n.a.createElement("div",{style:{margin:"25px 25px 25px 15px",float:"left",fontFamily:"McLaren"}},n.a.createElement(B,{key:t,id:t,sid:A.id,title:e.title,content:e.content,cost:e.cost,tel:e.tel,type:e.type,onDelete:o}))})))};var w=function(){return n.a.createElement(y,{id:"1",type:"caterer"})};var N=function(){return n.a.createElement(y,{id:"2",type:"banquet"})};var H=function(){return n.a.createElement(y,{id:"3",type:"photographer"})},b=t(20),F=t(58),Q=t(56);var I=function(A){return n.a.createElement(Q.a,{lg:3,md:6,xs:12},n.a.createElement(b.a,{className:"text-center",style:{margin:"20px 0px 0px 0px"}},n.a.createElement(b.a.Header,null,n.a.createElement(b.a.Title,null,A.Title)),n.a.createElement(b.a.Body,null,n.a.createElement(b.a.Img,{variant:"top",style:{height:"75px",width:"75px"},src:A.img}),n.a.createElement(b.a.Text,null,A.Text),n.a.createElement(c.a,{render:function(e){var t=e.history;return n.a.createElement(F.a,{variant:"outline-dark",onClick:function(){window.location.assign("http://localhost:5000/"+A.variab+"/google"),t.push(A.route)}},"Login for Free")}}))))},T=t(57),D=t(37);var S=function(){return n.a.createElement(T.a,null,n.a.createElement("div",{className:"Container"},n.a.createElement(D.a,null,n.a.createElement("h1",{style:{textAlign:"center",margin:"50px 0px 0px 0px"}},"ONE SINGLE PLATFORM FOR VARIOUS IN-PERSON EVENTS !!")),n.a.createElement(D.a,null,n.a.createElement("div",{style:{textAlign:"center",fontSize:"1.2rem"}},"Hosting a special event? It's never been easier. Plan your next party in style and streamline the planning process with our online party planner.")),n.a.createElement(D.a,null,n.a.createElement(I,{img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAScSURBVHic7Zvbi1VVHMc/c2ZKsxpDQkq6i2DlQySMyEQPYZRUNj0olBckegjTF3uI3iTrX/BJfAiDgiJGaxpM6EJgBIW3seuoNWoXxjvO2HiO08Nvb+ec36y9z/6tfTkzub/we1j7nN93f3+/tfZaa6+1NpQoUeJ6RlvB95sJLAN6gAeBecH1U8BhYBewF/i3YF25ox14GRgCxpvY78B6oNIKoXngVqCX5oFr6wNmt0BvpugEDmAPPrT9SAKnJSrAJ/gHH1ov0/RxWEf64EN7qWDtqXEDcJzsEjAIdBQZQFo8SXbBh/ZEHkLjnq1ZwCbgc+BYYHuAjcFvcXguE3U2zjR6J+Ex4CTRtXEC6I7x3xvj62t7ctTbgG7gcgJBo8DSCI7DOSTgUI56r2Em8IdB1PHAR+NgDgnYn4de3QesBe6OSI4L9wJrHNf/NHAkxSnHtdR6dQJ8Oq9nHdcOevA0g+sRSK1XJ+ABD8L5jmu9HjzN4OJMrVcnoOZB6PLZB/zowRWFI8C3Ce/dDA0+OgG/ehD+EnGTNz24ovAGcNVxPSu917AGe+8cN0/f7sGn7d0C9dKBNN2kZAPEz9FnAF+mCP6LgKMovQAsAs4lIDsHPNyMLAhgh0fw7wE3JeDPWi8ADxE/mTkQ/MeCZcAPCYQOACuN3N564xZF24EXgBVMDB2DyHD0Me5OqRnagEcDzkXAHcH1v5BxfjcTSbIiD70lSpT4n8PVCd6I9MIrkJ5zLrLGB3ARGAa+Az4DPiXZdHQ+8BTy7r4QeSu7Dem4LgFjwAXgLPJ6OwB8BHyfgLsDeAZYDnQBtwO3BL9dAf4J+HYBHwb3isRy4Ci2iUVXDF8P8DXSA/tMhH4GXiR6tOrCNhEaRCrCiU1IbVoEXsW9HrAA+MYzaJftwz2Or8ae3CrwmiZ63iP4ceBth6hVSHPOKvjQziNNXWOrB1eNunWBWcQvKEbZbiY3zdfxb+5Ja2+9umdboMXKNUQw1d7g4TwK3K+EvJJj4PU2xuQ9gvuAEQ+uV0GWm62O7ygBi0m2MpuVnUFGknps8eDpB3vzH6Fx27qCDItFBR/aByoBnciQauE4AfJcWZzeVzfuaUHwoT2utOw0+lfxuKnuiftamAC9W/S0B4fpzzUaDyzMw2/4zMpqwF11em7G2KKtBw9+QqbDIbpp7eGFClLrIS5hXI22itfbU3HT4KKwRJVdW2iRsCZgSJWty2J5YKEqu7bQImFNwN+qfKfRPw/MUWWtMRbWBAyr8lyjfx7Qhx9OW5ytCRhV5U6jfxG4YvmzNQFVVW43+heB2AUPjbQJmIont7TGWFgToF9/x43+RcAUkzUBusmbsl0QrvsEmPqlCvJunRT6mZ+KCbBU6oUKsniZFNOhBVgS0FdB1vHOJnSYignQHXPSBJwENncAvyE7tVuAR+oI2mmc6NSYPMu6bFGaE0ZUeRg5OlNfWeeZ2B2uIsvsb5G84iPRT+vWAkLrTxNA2nf5HSn9s0DLNWyjdbW/k5RfvmX12VwP8oXIPciZIPPxdGSTYgz3ZusYstpTRd73jyKf43zF1JyNlihRYprgP0rgQfP2BZIFAAAAAElFTkSuQmCC",Title:"Customer",Text:"Quickly organize a professional-looking event.",route:"/customer/google",variab:"customer"}),n.a.createElement(I,{img:"data:image/png;base64,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",Title:"Hall Manager",Text:"List your business here for more opportunities.",route:"/banquet/google",variab:"banquet"}),n.a.createElement(I,{img:"data:image/png;base64,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",Title:"Food Caterer",Text:"Take your catering business to the next level.",route:"/caterer/google",variab:"caterer"}),n.a.createElement(I,{img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARnSURBVHic7ZvbbxVFHMc/RbSQlJZyN6QPrS9c6hWBihIa4oMgxIixsajRxP9ACA8CKld95YkQo/HNcGnRSsurJgUNvkIESXjRGC7WtlZqtZxzeJhzwu7szM7Onp2dU3M+yTyc3Znv+f5mZmdnZnfBjgXAPuAnYBSYBH4GjgErLLVWlMtdLeuMApeAvUCrpVYuvAaMACVN+g84CDQYdGYBh4HpGK0RYEfmEVTBO0ABveFg+syg9XlCnQLwdsZxpGI1MEUy05X0rkbrPUudf4CV2YdkRz92pkvAb0CjpNMI/J5C67SzyBIwH3Ftq4z9ClzWnCsBL0laW2PyXkZUmurcv0Czo/iYZTi/BnhYcbwf6AA6gd2ashuk389p8u0q67QDZxXnHwGeNfhMjakClmiOf4kYxUE/6MlldVqV8tNlXRVLNcerxlQB45rjwdaUW7rCmOG3SkvXS0Y1x53TBhSJXpdF4CRwHJhQnC8BOyWttzT5Jso6p2L+a7mj+BJxUWHKlP5GDKBBWoG7KbSGnUWWkBexN31Ao3XIUqcIbHYQkzWfkNz0d6jvHCBG9O8ttI66CCYNDYhF0D3iDZ8BmgxaTUCfQWcasSgyrStyZxXwBXCHB2YngQGiEx8TW4BvEdPditYdxFrB+/Q3CS1kd39eWtarUydnbAaZuYiuapo9ZkERuIUYH7zzCvADyTdEskoFxCRsu/sQ9XxKvkHX1HzgzZRmXaU33IYb5XpGxrNK1yz9zwbWITZXrTdUHquBgFWp3RDwemAPMAj8FSh3DZhjUwEbayBYVXpB8lkJeEgKWJW6VIHO1lTAQ7HV4w/Z748WZZU9QFcBJqYQT3VuxORpADYBvSn/wyvdxHenPRZa5w1aNqlb0q6mLJB+VveLRV7b0TtX0lbA+0S3vFSsJLo3WFOkHQM2ArcRD0fitNuowU2NIGkrAMS2V0dWRnyRx8qupqlXgG8DvqlXgG8DvqlXgG8DvtHNAwq5ukjOPel3F2LB1Y1YKs+LKTtl80cd+F/7e90QAbHg8R1wMF219F/ZEnuV+J6hpddToLrUkyaIajma0mzW6bDrQOPYBlzAz4ORYeBll8HZLFXnAMtIduv8CnH9yVwi2RZZEbiJ5chdK3QR37LP+7OWD0NER+/g7yF/1tyzhvCrbn8AjyJ2j4KVoLo8/hcMEg70g/LxvdLxc17cOeYZwq0/woNnck2E3ysqAWs9eHTKAOEA90nn90vnv8nVnWOeJtz6Y0S3zZuBPwlXgrO3wPPma8KBfajJ95GUT/V6/IzjKaKtr/vqq4VwLygi7hwzGvmTmo8N+Q9I+ftcmnPNasJrhHHM3/y1IN7/D/aCJx16dMoZwq15MGE5+a1xrx9GpUXV+gsSlp1PtBc84cCjU05R3Zr9iFT+ZKbuHLOKcOtPAIstNRYS3rcrAI9n6NEpJwi3XtoXGeUdpxOZuMuBYPefABal1FlE+KOrGXMZdAJXELs2r1ep1YN4MfoKYmDNlftXtHSGr5mhTgAAAABJRU5ErkJggg==",Title:"Photographer",Text:"Are you a photographer?\r Get listed with us.",route:"/photographer/google",variab:"photographer"}))))};var z=function(){var A=(new Date).getFullYear();return n.a.createElement("footer",null,n.a.createElement("p",null,"Copyright \u24d2 ",A))};var U=function(){return n.a.createElement("header",null,n.a.createElement("h1",null,"BaadhaiHo"))};var k=function(){return n.a.createElement(o.a,null,n.a.createElement("div",null,n.a.createElement(U,null),n.a.createElement(c.c,null,n.a.createElement(c.a,{path:"/",exact:!0,component:S}),n.a.createElement(c.a,{path:"/caterer",exact:!0,component:w}),n.a.createElement(c.a,{path:"/banquet",exact:!0,component:N}),n.a.createElement(c.a,{path:"/photographer",exact:!0,component:H})),n.a.createElement(z,null)))};t(96);r.a.render(n.a.createElement(k,null),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.f52c5e81.chunk.js.map
let body=document.body
let div=document.createElement("div")


div.style.background="linear-gradient(red,cyan)"
div.style.height="90vh"
div.style.width="100%"



div.innerHTML +=`<h1>Welcome </h1>
<button onclick="myclick()">click</button>`
body.appendChild(div)



let table=document.createElement("table")

table.style.background="radial-gradient(blue.black)"
body.appendChild(table)

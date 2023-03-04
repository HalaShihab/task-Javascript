var allproducts = document.querySelectorAll(".list li")
var Content = document.querySelector("#content")
var btn = document.querySelector("#btn1")
var price = document.querySelector("#total")
var totalprice = 0
allproducts.forEach(function (item){
  item.onclick = function(){
    totalprice += +(item.getAttribute("price"))
    Content.innerHTML += item.textContent + " /  "
    if(Content.innerHTML !=""){
      btn.style.display="block"
      btn.style.color= "red"
    }
  }

})
btn.onclick=function(){
  price.innerHTML=totalprice +"$"
}
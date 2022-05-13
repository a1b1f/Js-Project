var ls=[];

ls= JSON.parse(localStorage.getItem("myOrders")) || JSON.parse(localStorage.getItem("ls")) ;
   

var container= document.getElementById("container");
window.onload=function(){
for(var i =0;i<ls.length;i++)
{
    
    card=document.createElement("card");
    card.setAttribute("class","card");
        ///// CREATE CARDS IMAGES/////
    //console.log(ls[i]);
    img= document.createElement("img");
    img.setAttribute("src",ls[i].image)
    img.setAttribute("id","toolImg");
    
    //// CREATE CARD TEXT
    var head=document.createElement("h3");
    head.innerHTML= ls[i].toolName;
    head.setAttribute("class","head-prod");

    var par=document.createElement("p");
    par.innerHTML= ls[i].price;

    var remove = document.createElement("button");
    remove.innerHTML="Remove From Cart";
    remove.setAttribute("id",ls[i].id);
    remove.setAttribute("class","remove");

    remove.setAttribute("onclick","removeFromCart(this)");

    card.appendChild(img);
    card.appendChild(head);
    card.appendChild(par);
    card.appendChild(remove);

    container.appendChild(card)
    
}
}
function removeFromCart(self){
    ls.pop();
    localStorage.setItem("ls",JSON.stringify(ls));
    localStorage.removeItem("myOrders");
    location.assign("../cart.html")
}

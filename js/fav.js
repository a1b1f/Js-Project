var nadaFav=[];
var removed=null;
nadaFav = JSON.parse(localStorage.getItem("favourites"));
var container= document.getElementById("container");

for(var i =0;i<nadaFav.length;i++ ){
    card=document.createElement("card");
    card.setAttribute("class","card");
        ///// CREATE CARDS IMAGES/////
    //console.log(ls[i]);
    img= document.createElement("img");
    img.setAttribute("src",nadaFav[i].image)
    img.setAttribute("id","toolImg");
    
    //// CREATE CARD TEXT
    var mood=document.createElement("h3");
    mood.innerHTML= nadaFav[i].toolName;
    mood.setAttribute("class","head-prod");;

    var par=document.createElement("p");
    par.innerHTML= nadaFav[i].price;

    var remove = document.createElement("button");
    remove.innerHTML="Remove From Favourits";
    remove.setAttribute("id",nadaFav[i].id);
    remove.setAttribute("class","remove");

    remove.setAttribute("onclick","removeFromCart(this)");

    card.appendChild(img);
    card.appendChild(mood);
    card.appendChild(par);
    card.appendChild(remove);

    container.appendChild(card)
    
}
function removeFromCart(self){
    nadaFav.pop();
    console.log(nadaFav)
}

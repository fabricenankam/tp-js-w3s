document.getElementById("demo1").innerHTML="Demo ecriture sur une page html avec js";

let x,y,z;
x = 6;
y = 8;
z = x * y;

document.getElementById("demo2").innerHTML=z;

function ecrireDansParagraphe(){
    let monTexte = "ecriture dans un paragraphe apres un click sur un bouton"
    document.getElementById('demo3').innerHTML=monTexte
}

function changerCouleur(){
    document.getElementById("demo4").style.color="black"
}

function afficherMessage(){
    const person = {
        lePrenom : prompt("Entrez votre prénom"),
        leNom : prompt("Entrez votre nom"),
        leComplet: function(){return this.lePrenom + " " + this.leNom}
    }
    alert("Bienvenu "+ person.leComplet() + " sur Demo js w3s ");
}

function afficherDate(){
    document.getElementById("demo5").innerHTML = Date();
}

/*utilisation des evenements js avec la mise en oeuvre du DOM et addEventListener*/

//fonctions js
function changerFormTexte(){
var montexte = document.getElementById("demo6");
montexte.value = montexte.value.toUpperCase();
montexte.style.color = "red"
montexte.style.backgroundColor = "blue"
}

function copierTexte(){
    var montexte2 = document.getElementById("cop")
    montexte2.innerHTML = "texte copié avec succès"
    montexte2.style.color = "green"
}

function imprimerPageCourante(){
    alert("Ce document a été imprimé correctement!");
}

function afficherAlertInvalid(){
    alert("vous devez remplir le formulaire!")
}


//mise en oeuvre du DOM et addEventListener
document.getElementById("demo6").addEventListener("change",changerFormTexte);
document.getElementById("demo7").addEventListener("copy",copierTexte);
window.addEventListener("afterprint",imprimerPageCourante);

document.getElementById("myinput").addEventListener("invalid", afficherAlertInvalid)


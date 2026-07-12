/* ==========================================================
   CINESIS FORMS
   Fichier : sessionDisplay.js

   Affichage des informations de session dans l'en-tête
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


    const parametres =
    new URLSearchParams(window.location.search);



    const formation =
    parametres.get("formation");


    const date =
    parametres.get("date");


    const lieu =
    parametres.get("lieu");



    if(!formation) return;



    const blocsFormation =
    document.querySelectorAll(".formation span");



    if(blocsFormation.length >= 2){


        blocsFormation[0].textContent =
        decodeURIComponent(formation);



        let sessionTexte =
        decodeURIComponent(date || "");



        if(lieu){

            sessionTexte +=
            " - " + decodeURIComponent(lieu);

        }



        blocsFormation[1].textContent =
        sessionTexte;


    }


});
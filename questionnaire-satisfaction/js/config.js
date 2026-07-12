/* ==========================================================
   CINESIS FORMS
   Fichier : config.js

   Configuration générale + récupération session
========================================================== */


const configuration = {


    urlGoogleSheet:

    "https://script.google.com/macros/s/AKfycbyvYkVAml7Hsigv4v3D5yorcAPngk1nMMkzHFQd7XQCMPK5QZbb6J1cvUzi7qFucUAx9w/exec",


    session: {

        formation: "",

        date: "",

        lieu: ""

    }


};



function chargerSession(){


    const parametres =
    new URLSearchParams(window.location.search);



    configuration.session.formation =
    parametres.get("formation") || "";


    configuration.session.date =
    parametres.get("date") || "";


    configuration.session.lieu =
    parametres.get("lieu") || "";



}



chargerSession();
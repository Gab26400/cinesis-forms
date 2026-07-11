/* ==========================================================
   CINESIS FORMS
   Fichier : session.js
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


    const parametres =
    new URLSearchParams(window.location.search);



    const bouton =
    document.getElementById("sessionButton");



    if(!bouton) return;



    const sessionExiste =

    parametres.get("formation")
    ||
    parametres.get("date")
    ||
    parametres.get("lieu");



    if(sessionExiste){


        bouton.style.display="none";


        return;


    }



    bouton.addEventListener(
        "click",
        afficherCreationSession
    );


});





function afficherCreationSession(){


    const card =
    document.querySelector(".card");



    card.innerHTML = `


    <h2>Créer une session</h2>



    <p class="question-description">

    Ces informations seront ajoutées automatiquement
    aux réponses des stagiaires.

    </p>



    <input
    id="formation"
    class="text-input"
    placeholder="Nom de la formation"
    >



    <input
    id="dateFormation"
    class="text-input"
    placeholder="Date de la session"
    >



    <input
    id="lieuFormation"
    class="text-input"
    placeholder="Lieu"
    >



    <button id="genererLien">

        Générer le lien

    </button>



    <textarea
    id="lienSession"
    class="text-input"
    rows="4"
    readonly
    style="display:none;margin-top:20px"
    ></textarea>



    <button
    id="copierLien"
    style="display:none;margin-top:15px">

        Copier le lien

    </button>


    <div
id="qrcode"
style="margin-top:25px;text-align:center;display:none">

</div>

    `;



    document
    .getElementById("genererLien")
    .addEventListener(
        "click",
        genererLien
    );


}







function genererLien(){


    const formation =

    encodeURIComponent(

        document
        .getElementById("formation")
        .value
        .trim()

    );



    const date =

    encodeURIComponent(

        document
        .getElementById("dateFormation")
        .value
        .trim()

    );



    const lieu =

    encodeURIComponent(

        document
        .getElementById("lieuFormation")
        .value
        .trim()

    );



    const url =
    new URL(window.location.href);



    url.searchParams.set(
        "formation",
        formation
    );



    url.searchParams.set(
        "date",
        date
    );



    url.searchParams.set(
        "lieu",
        lieu
    );



    const zone =
    document.getElementById("lienSession");



    zone.style.display="block";

    zone.value=url.toString();



    const boutonCopie =
    document.getElementById("copierLien");


    boutonCopie.style.display="block";

    const zoneQR =
document.getElementById("qrcode");


zoneQR.style.display="block";


zoneQR.innerHTML="";


new QRCode(zoneQR, {

    text: url.toString(),

    width:200,

    height:200

});


    boutonCopie.onclick=()=>{


        navigator.clipboard.writeText(
            zone.value
        )
        .then(()=>{


            boutonCopie.textContent =
            "Lien copié ✓";


            setTimeout(()=>{

                boutonCopie.textContent =
                "Copier le lien";


            },2000);


        });


    };


}
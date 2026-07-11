/* ==========================================================
   CINESIS FORMS
   Version : 0.5.0
   Fichier : app.js
========================================================== */


let etape = 0;

let reponses = {};

let questions = [];



document.addEventListener("DOMContentLoaded", () => {

    questions = questionnaire.questions;


    document
    .getElementById("startButton")
    ?.addEventListener("click", lancerQuestionnaire);

});




function lancerQuestionnaire(){

    const card=document.querySelector(".card");

    card.classList.add("fade-out");


    setTimeout(()=>{

        afficherProfession();

    },300);

}




function afficherProfession(){

    const card=document.querySelector(".card");


    card.classList.remove("fade-out");


    card.innerHTML=`

    <div class="progress">

        <div class="progress-bar" style="width:5%"></div>

    </div>


    <div class="question-counter">

        Étape 1 / ${questions.length+1}

    </div>


    <h2>Votre profession</h2>


    <input
    id="profession"
    class="text-input"
    placeholder="${questionnaire.professionPlaceholder}"
    >


    <button id="nextButton">

        Continuer

    </button>

    `;



    document
    .getElementById("nextButton")
    .onclick=()=>{


        reponses.profession =
        document.getElementById("profession").value.trim();


        afficherQuestion();


    };


}





function afficherQuestion(){


    if(etape >= questions.length){

        envoyerReponses();

        afficherFin();

        return;

    }



    const question = questions[etape];


    const card=document.querySelector(".card");



    let html = `


    <div class="progress">

        <div class="progress-bar"

        style="width:${((etape+2)/(questions.length+1))*100}%">

        </div>

    </div>



    <div class="question-counter">

        Étape ${etape+2} / ${questions.length+1}

    </div>



    <h2>${question.titre}</h2>



    <p class="question-description">

        ${question.description}

    </p>


    `;



    if(question.type==="likert"){


        html+=`

        <div class="scale choix">

        `;



        questionnaire.echelle.forEach((rep,index)=>{


            html+=`

            <div class="carte-reponse 
            ${reponses[question.id]==index+1 ? "selection":""}"

            data-value="${index+1}">


                <span class="emoji">

                    ${rep.substring(0,2)}

                </span>


                <strong>

                    ${index+1}

                </strong>


                <small>

                    ${rep.substring(3)}

                </small>


            </div>


            `;


        });



        html+=`

        </div>


        <button id="previousButton">

            Précédent

        </button>



        <button id="nextButton"
        ${reponses[question.id] ? "" : "disabled"}>

            Continuer

        </button>

        `;


    }





    if(question.type==="texte"){


        html+=`

        <textarea
        id="textAnswer"
        class="text-input"
        rows="5"
        >${reponses[question.id] || ""}</textarea>



        <button id="previousButton">

            Précédent

        </button>



        <button id="nextButton">

            Continuer

        </button>

        `;


    }





    card.innerHTML = html;




    document
    .getElementById("previousButton")
    .onclick=()=>{


        if(etape>0){

            etape--;

            afficherQuestion();

        }

    };




    if(question.type==="likert"){

        activerCartes(question);

    }




    if(question.type==="texte"){


        document
        .getElementById("nextButton")
        .onclick=()=>{


            reponses[question.id] =
            document.getElementById("textAnswer").value;


            etape++;


            afficherQuestion();


        };

    }



}






function activerCartes(question){


    const cartes =
    document.querySelectorAll(".carte-reponse");


    const bouton =
    document.getElementById("nextButton");



    cartes.forEach(carte=>{


        carte.onclick=()=>{


            cartes.forEach(c=>{

                c.classList.remove("selection");

            });


            carte.classList.add("selection");


            reponses[question.id] =
            carte.dataset.value;


            bouton.disabled=false;


        };


    });



    bouton.onclick=()=>{


        etape++;


        afficherQuestion();


    };


}






function envoyerReponses(){


    const donnees = {


        formation: questionnaire.formation,


        session: questionnaire.session,


        profession: reponses.profession || "",


        q1: reponses[1] || "",

        q2: reponses[2] || "",

        q3: reponses[3] || "",

        q4: reponses[4] || "",

        q5: reponses[5] || "",

        q6: reponses[6] || "",

        q7: reponses[7] || "",

        q8: reponses[8] || "",

        q9: reponses[9] || "",

        q10: reponses[10] || "",

        q11: reponses[11] || ""


    };



    fetch(configuration.urlGoogleSheet, {


        method:"POST",


        body:JSON.stringify(donnees)


    })

    .then(()=>{

        console.log("Réponses envoyées");

    })

    .catch((erreur)=>{

        console.log("Erreur envoi :", erreur);

    });


}







function afficherFin(){


    const card=document.querySelector(".card");


    card.innerHTML=`

    <h2>Merci pour votre participation</h2>


    <p class="question-description">

    Votre avis nous aide à améliorer la qualité de nos formations.

    </p>


    `;


    console.log(reponses);


}
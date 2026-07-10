/* ==========================================================
   CINESIS FORMS
   Version : 0.2.0
   Fichier : app.js
   Auteur : ChatGPT + Gabriel

   Moteur principal de l'application
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initialiseApplication();

});

function initialiseApplication() {

    const startButton = document.getElementById("startButton");

    if (!startButton) return;

    startButton.addEventListener("click", lancerQuestionnaire);

}

function lancerQuestionnaire() {

    const card = document.querySelector(".card");

    if (!card) return;

    card.classList.add("fade-out");

    setTimeout(() => {

        afficherChargement();

    }, 350);

}

function afficherChargement() {

    const card = document.querySelector(".card");

    card.innerHTML = `

        <div class="loader">

            <div class="loader-circle"></div>

            <h2>Préparation du questionnaire...</h2>

            <p>Merci de patienter quelques instants.</p>

        </div>

    `;

    setTimeout(() => {

        afficherProfession();

    }, 900);

}

function afficherProfession() {

    const card = document.querySelector(".card");

    card.classList.remove("fade-out");

    card.classList.add("fade");

    card.innerHTML = `

        <div class="progress">

            <div class="progress-bar" style="width:8%;"></div>

        </div>

        <div class="question-counter">

            Étape 1 / 12

        </div>

        <h2>Votre profession</h2>

        <p class="question-description">

            Ce questionnaire est anonyme.

        </p>

        <input
            id="profession"
            class="text-input"
            type="text"
            placeholder="Ex : MK, Ergonome, Podologue..."
        >

        <button id="nextButton">

            Continuer

        </button>

    `;

    document
        .getElementById("nextButton")
        .addEventListener("click", () => {

            const profession =
                document.getElementById("profession").value.trim();

            console.log("Profession :", profession);

            alert(
                "Version 0.2\n\nLe moteur fonctionne correctement.\n\nLa prochaine version affichera automatiquement la question n°1."
            );

        });

}
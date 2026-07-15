/* ==========================================================
   CINESIS FORMS
   Questionnaire Pré / Post Formation
   Fichier : questions.js
========================================================== */


const questionnaire = {


    titre:"Questionnaire pré-formation",


    formation:"Préventeur Santé",


    session:"",



    questions:[


        {

            id:1,

            type:"choix",

            titre:" Qu'est-ce qu'un risque psychosocial (RPS) ?",

            description:"",

            reponseA:"Un risque uniquement lié au stress individuel",

            reponseB:"Un risque pouvant affecter la santé mentale, physique et sociale des salariés en raison de leurs conditions de travail.",

            reponseC:"Un Risque Physique pour la Santé"

        },



        {

            id:2,

            type:"choix",

            titre:"Quelle est l'obligation principale de l'employeur concernant les RPS ? (choisissez la meilleure réponse)",

            description:"",

            reponseA:"Attendre qu'un représentant du personnel signale un problème pour agir",

            reponseB:"Prévenir les risques en mettant en oeuvre des actions adaptées",

            reponseC:"Confier exclusivement la prévention au service des ressources humaines"

        },

 {

            id:3,

            type:"texte",

            titre:"Citez 3 impacts possible des RPS sur les salariés et/ou sur l'organisation ?",

            description:"",

            

        },

 {

            id:4,

            type:"choix",

            titre:"Les risques psychosociaux doivent ils être identifiés dans le DUERP ?",

            description:"",

            reponseA:"Oui",

            reponseB:"Cela dépend de la taille de l'entreprise",

            reponseC:"Non, ils sont identifiés mais uniquement dans un autre registre"

            

        },




        {

            id:5,

            type:"texte",

            titre:"Proposez 2 actions à mettre en place pour identifier et/ou prévenir les risques psychosociaux ?",

            description:""

        }



    ]

};
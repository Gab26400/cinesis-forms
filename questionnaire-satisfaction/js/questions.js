/* ==========================================================
   CINESIS
   Version : 0.3.0
   Fichier : questions.js

   Toutes les questions sont centralisées ici.

   Le moteur (app.js) ira automatiquement les lire.

========================================================== */

const questionnaire = {

    titre: "Questionnaire de satisfaction à chaud",

    formation: "Préventeur Santé",

    session: "17 & 18 septembre 2026 - Paris",

    professionPlaceholder:
        "",

    echelle: [

        "😞 Pas du tout satisfait",
        "🙁 Peu satisfait",
        "🙂 Satisfait",
        "😊 Très satisfait",
        "🤩 Tout à fait satisfait"

    ],

    questions: [

        {

            id:1,

            type:"likert",

            titre:"Accueil et organisation",

            description:

            "Clarté des informations avant la formation • Organisation générale • Horaires et rythme • Durée cohérente avec les objectifs • Conditions d'accueil"

        },

        {

            id:2,

            type:"likert",

            titre:"Qualité des intervenants",

            description:

            "Maîtrise du sujet • Clarté des explications • Disponibilité pour les questions • Pédagogie adaptée • Exemples et mises en situation pertinentes"

        },

        {

            id:3,

            type:"likert",

            titre:"Qualité pédagogique et supports",

            description:

            "Qualité des supports • Utilité des supports • Contenu adapté à votre niveau"

        },

        {

            id:4,

            type:"likert",

            titre:"Conditions matérielles",

            description:

            "Qualité des locaux • Matériel mis à disposition • Confort général"

        },

        {

            id:5,

            type:"likert",

            titre:"La formation a-t-elle répondu à vos attentes ?",

            description:

            "Atteinte des objectifs • Acquisition de nouvelles compétences • Utilité des connaissances acquises"

        },

        {

            id:6,

            type:"likert",

            titre:"Intérêt professionnel et valeur sur le marché du travail",

            description:

            "Répond à un besoin concret • Compétences utiles sur le marché du travail • Apport à mon parcours professionnel • Corrélation avec le terrain • Amélioration de ma pratique professionnelle • Répond aux enjeux de santé au travail"

        },

        {

            id:7,

            type:"likert",

            titre:"Impact et transfert en situation professionnelle",

            description:

            "Mise en application des acquis • Connaissances facilement utilisables • Amélioration de ma pratique"

        },

        {

            id:8,

            type:"likert",

            titre:"Satisfaction globale",

            description:

            "Je suis globalement satisfait de cette formation et je la recommanderai à d'autres professionnels."

        },

        {

            id:9,

            type:"texte",

            titre:"Points forts de la formation",

            description:""

        },

        {

            id:10,

            type:"texte",

            titre:"Points pouvant être améliorés",

            description:""

        },

        {

            id:11,

            type:"texte",

            titre:"Remarques ou suggestions",

            description:

            "Thèmes à approfondir, nouveaux sujets, commentaires..."

        }

    ]

};
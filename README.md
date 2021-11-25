# Landing page dynamique

## Modifier le site

Cloner le repo puis :

```sh
yarn
yarn dev
```
L'objectif est que n'importe quel projet de la fabrique puisse utiliser cette landing page facilement intégrable.

## Les modules ?
Les modules sont les différents composants de la landing page qu'il faudra modifier.
La liste des modules actuellement :
 - Actualites (config-yml/modules/articles.yml) 
 - Stats (config-yml/modules/stats.yml) 
 - Newsletter (config-yml/modules/newsletter.yml) 
 - Onboarding (config-yml/modules/onboarding.yml) 
 - Instagram (config-yml/modules/instagram.yml) 

1) Pour le module instagram (récupérer les publications), il faut suivre ces instructions :

    - Créer une application sur : https://developers.facebook.com/apps/create/
    - Choisir "Consommateur" puis cliquez sur "Suivant"
    - Renseigner les informations demandées
    - Cliquer sur "Configurer" dans la partie "Instagram Basic Display"
    - Cliquer sur le bouton "Créer une application" (puis encore une fois lorque la nouvelle popup s'affiche)
    - Renseigner les 3 champs : URI de redirection OAuth valides, URL d’alerte pour les annulations d’autorisation, Demandes de suppression de données par l'url de votre site ou si Local: https://localhost:{numéro de port}/  
    - Dans la partie User Token Generator, cliquer sur le bouton "Add or Remove Instagram Testers".
    - Dans la partie Instagram Testers, cliquer sur le bouton "Add Instagram Testers" puis renseigner le nom instagram
    - Se connecter sur son compte instagram et aller dans les paramètres -> Apps et sites web -> onglet "Invitations à tester" puis cliquer sur Accepter
    - Revenir sur facebook developers et cliquer sur le menu à gauche : Instagram Basic Display -> Basic Display
    - Dans la partie User Token Generator, cliquer sur "Generate Token", se connecter au compte instagram puis cliquer sur Autoriser. Cocher la case : 'I Understand' puis copier le token
    - Créer un fichier .env.local à la racine du projet et noter cette paire de clé/valeur : NEXT_PUBLIC_INSTAGRAM_TOKEN="coller le token ici"
    - Relancer le projet : yarn dev


2) Pour les modules d'actualités et Onboarding (référent), il y a des pages spécifiques, les menus sont ajoutés dans config-yml/commons/nav.yml et leurs pages sont créees dans le dossier : src/pages/

3) Pour le module de Stats, le menu est ajouté dans config-yml/commons/nav.yml, la page est créee dans le dossier : src/pages/ (stats.js) et les graphes sont paramètables depuis stats-graph.yml (config-yml/modules)

## Comment contribuer ? (dev)
Pour créer un module :

1) Coder le module dans src/
2) Rajouter le fichier .yml dans config-yml/modules
3) Si pages spécifiques, le renseigner dans le readme
4) Créer une pull request sur git

Tout les modules peuvent être activés ou non en mettant la valeur du champ display à true ou false dans le fichier .yml

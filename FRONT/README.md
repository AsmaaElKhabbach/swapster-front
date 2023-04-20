# projet-swapster

Swapster est un site web proposant à des utilisateurs de partager des produits culturels après utilisation de manière gratuite.
Chaque utilisateur aura la possibilité de partager un produit en donnant son avis mais aussi de rechercher un produit qui l’intéresse.

# INSTALLATION DU PROJET

# Récupérez une copie du modèle
-Git clone git@github.com:O-clock-Olduvai/swapster-front.git
- cd projet-swapster

# installe les dépendances du projet
yarn 

# lance le serveur de developpement
yarn start 

# rdv sur http://localhost:8080/

# LISTE DES DÉPENDANCES 

yarn add react-redux
yarn add @reduxjs/toolkit
yarn add react-router-dom

# RECUPERER LA BRANCHE DEV SUR SA BRANCHE

se rendre sur la branche main : git checkout dev
recupérer les données du main : git pull dev

se rendre sur sa branche : git checkout "sabranche"
recuperer les données du main : git merge dev

# RECUPERER LA BRANCHE DEV SUR LA BRANCHE MAIN => DEPLOIEMENT 

on se rend sur la branche main : git checkout main 
on recupère les données de la branche dev : git merge dev..

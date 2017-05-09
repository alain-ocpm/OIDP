Installation
===================

Le dossier du thème doit être placé dans l'architecture de dossier au même
niveau que le thème Drupal zurb-foundation disponible à
https://www.drupal.org/project/zurb_foundation

Pour la génération du thème, npm est requis. Les instructions d'installation
sont disponible à https://www.npmjs.com/

Une fois zurb-foundation et npm installés, saisir dans l'invite de commande
"npm install". Il est important de ne PAS utiliser "npm update" car les
fonctions de préporcesseurs du thème Drupal dépendent de version très précises
de certain modules (déjà configurés dans package.json)

Génération du thème
===================

Dans l'invite de commande, saisir grunt. Sass sera attentif pour chaque
modifications des fichiers sources et compilera un fichier nommé oidp.css dans
css/

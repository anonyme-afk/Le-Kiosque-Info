# ArcadeZone (Le Kiosque Info)

Un site web "à double visage" (Dual-Face) dissimulant un vaste catalogue de jeux en ligne sous l'apparence d'un journal scolaire tout ce qu'il y a de plus sérieux.

## Liens du Projet

* **URL du site en ligne** : [Insérez votre lien ici]
* **Test Pare-feu (Firewall Test)** : `/firewall-test.html`

## L'idée originale (Le secret)

Le projet repose sur un concept ludique de dissimulation : 
*   **Face 1 (Le Camouflage)** : Le site s'ouvre sur "Le Kiosque Info", un faux journal web d'actualités scolaires et lycéennes (articles sur la réforme du bac, tournois de sport, ateliers, vie scolaire). C'est le visage "sérieux" parfait pour passer inaperçu.
*   **Face 2 (Le Vrai Site)** : Derrière ce journal se cache "ArcadeZone", un gigantesque catalogue de jeux modernes, multijoueurs (.io) et de grands classiques en HTML5.

## Comment accéder à la zone secrète ?

Pour déverrouiller la Face 2 (ArcadeZone) depuis la Face 1 (Le Kiosque Info) :
1. Repérez la barre de recherche en haut à droite du journal ("Rechercher...").
2. Tapez le mot de passe secret : **`arcade`** (en minuscules).
3. Appuyez sur Entrée. Le journal disparaît et laisse place à la plateforme de jeux !
4. Bouton Panique / Retour rapide : Appuyez sur la touche Échap (Esc) pour fermer vos jeux instantanément et revenir au banal journal scolaire ni vu ni connu.

## Architecture Anti Pare-feu (Couches 1 & 2)

Afin de contrer la censure réseau (très présente en milieu scolaire), la ludothèque est divisée en deux couches :

*   **Couche 1 (Auto-hébergée / 100% Locale)** : Des mini-jeux cultes (Snake, Tetris, 2048, Pong, Flappy, Pacman, Space Invaders, Breakout, Asteroids, Minesweeper) intégralement bundle et minifiés dans le dossier `/public/games/`. Ils n'ont absolument aucune dépendance vers des domaines tiers (plus besoin de CDN pour React, Three.js, ou les polices), assurant une compatibilité absolue même face aux restrictions les plus sévères. Ce qui passe sur le domaine principal passera ici.
*   **Couche 2 (Iframes & Tiers)** : Section reposant sur des noms de domaine "difficiles à justifier" (ex : *.io, serveurs gamedistribution, crazygames, voxiom.io, etc.). Ceux-ci apportent de la richesse au catalogue en se connectant dynamiquement. 

## Diagnostic Réseau avec firewall-test.html

Pour vous aider à auditer l'accessibilité des jeux externes depuis votre réseau actuel, le projet inclut un fichier `/firewall-test.html`. Ce script teste individuellement par des requêtes cachées sans CORS chaque domaine cible avec un timeout de 2 secondes. Vous obtenez un rapport immédiat sur l'état du réseau pour la Couche 2.

## Stack Technique

*   **Frontend** : HTML5, CSS3, Vanilla JavaScript (Rapide et léger, sans framework lourd).
*   **Données** : Appels d'API et flux JSON externes asynchrones gérés par requêtes `fetch`.
*   **Serveur & Bundle** : L'intégration se fait via Vite (supportant le dossier public/ pour les jeux encapsulés de la Couche 1).

## Déploiement & Local

### 1. Développement en Local

Pour lancer le projet sur votre machine :

```bash
# 1. Installer les dépendances 
npm install

# 2. Lancer le serveur local de développement
npm run dev
```

### 2. Déploiement Vercel

Le projet est configuré avec un fichier `vercel.json` et peut utiliser Vercel nativement. Poussez votre code sur un repo GitHub, reliez-le sur le dashboard Vercel, et laissez Vite générer le dossier dist. Tout se déploie sans accroc.

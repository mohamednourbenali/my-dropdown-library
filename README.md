 
# my-dropdown-library

`my-dropdown-library` est un composant de menu déroulant réutilisable et personnalisable pour les applications React.

## Installation

Installez la bibliothèque via npm :

```bash
npm install my-dropdown-library
```

## Utilisation

Pour utiliser le composant Dropdown dans votre projet React, importez-le et passez-lui les propriétés nécessaires :

```Javascript
import Dropdown from 'my-dropdown-library';

function App() {
  const [valeurSelectionnee, setValeurSelectionnee] = useState('');

  return (
    <Dropdown
      label="Sélectionnez une option"
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
      ]}
      value={valeurSelectionnee}
      onChange={(e) => setValeurSelectionnee(e.target.value)}
    />
  );
}
```
### props
* **label** `(string, optionnel)`: Le label affiché au-dessus du menu déroulant.
* **options** `(string, requis)`: Tableau d'objets représentant les options du menu déroulant. Chaque objet doit suivre la structure suivante :

```Javascript
{label: `Nom de l'option`, value: 'valeur_option'}
```

* **value** `(string)`: La valeur actuellement sélectionnée, liée à une variable d'état dans le composant parent.
* **onChange** `(function)`: Fonction de rappel qui reçoit l’événement de changement, utilisée pour mettre à jour l’état dans le composant parent.

## Personnalisation des styles

Le style par défaut est minimal pour permettre une personnalisation facile. Vous pouvez remplacer les styles en important votre propre fichier CSS ou en ciblant les classes CSS fournies :

```CSS
.dropdown {
  /* Personnalisez le conteneur du dropdown */
}

.dropdown label {
  /* Personnalisez le label */
}

.dropdown select {
  /* Personnalisez le menu déroulant */
}
```

## Exemple
```Javascript
import React, { useState } from 'react';
import Dropdown from 'my-dropdown-library';

function Exemple() {
  const [departement, setDepartement] = useState('');

  return (
    <Dropdown
      label="Sélectionnez un département"
      options={[
        { label: 'Ventes', value: 'ventes' },
        { label: 'Marketing', value: 'marketing' },
        { label: 'Ingénierie', value: 'ingenierie' }
      ]}
      value={departement}
      onChange={(e) => setDepartement(e.target.value)}
    />
  );
}

export default Exemple;
```
## GitHub Repo
[GitHub Repository](https://github.com/mohamednourbenali/my-dropdown-library/tree/master)
## Licence
MIT © mohamednourbenali

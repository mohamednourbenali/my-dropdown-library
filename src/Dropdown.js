import React from 'react';

// Composant Dropdown : un menu déroulant réutilisable avec un label, une liste d'options, et des props pour la valeur et le gestionnaire de changement.
function Dropdown({ label, options, value, onChange }) {
  return (
    <div>
      {/* Le label du menu déroulant */}
      <label>{label}</label>
      {/* Création du menu déroulant */}
      <select value={value} onChange={onChange}>
        {/* Parcours de la liste d'options pour créer chaque élément de sélection */}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;

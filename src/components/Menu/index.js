import React from 'react';
import './index.css';

const menuItems = [
  {
    id: 1,
    name: 'Arakas Latheros',
    description: 'Greek Peas with Tomato and Dill.',
    price: '$19.99',
  },
  {
    id: 2,
    name: 'Maria Athans Spinach Pie',
    description: 'Greek spinach pie with a rich cheese and spinach filling and a phyllo crust bakes up beautifully golden brown.',
    price: '$15.99',
  },

  {
    id: 3,
    name: 'Greek Lentil Soup (Fakes)',
    description: 'simple, delicious, and economical, this tasty vegetarian soup combines brown lentils with garlic, herbs, and tomato paste.',
    price: '$9.99',
  },
  {
    id: 4,
    name: 'Briam',
    description: 'Baked Zucchini and Potatoes.',
    price: '$13.99',
  },
  {
    id: 5,
    name: 'Fasolatha',
    description: 'Fasolatha is the national Greek dish.',
    price: '$17.99',
  },
  {
    id: 6,
    name: 'Fasolakia',
    description: 'Fasolakia are Greek green beans stewed with olive oil and tomato.',
    price: '$13.99',
  },
  {
    id: 7,
    name: 'Orzo Salad',
    description: 'A delicious, colorful salad, orzo pasta is tossed with artichoke hearts, cucumber, feta, tomato, olives and a zesty dressing.',
    price: '$10.99',
  },
  {
    id: 8,
    name: 'Gorgonzola and Olive Stuffed Grape Leaves',
    description: 'You will wrap grape leafs around a mixture of green olives, kalamata olives, Gorgonzola cheese, macadamia nuts, basil, tomatoes, bell pepper, garlic, and a dash of brown sugar.',
    price: '$12.99',
  },
  {
    id: 9,
    name: 'Potato Stew',
    description: 'A delicious stew featuring the flavors of Greece.',
    price: '$7.99',
  },  {
    id: 10,
    name: 'Pasta with Tomatoes and White Beans',
    description: 'Italian-style diced tomatoes simmer with white cannellini beans and fresh spinach. Serve over hot penne and crumble bits of feta cheese over the top.',
    price: '$14.99',
  },
  
 
];

function Menu() {
  return (
    <div className='menu-container'>
      <h2>Our Specialties</h2>
      <div className='menu-items'>
        {menuItems.map((item) => (
          <div key={item.id} className='menu-item'>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className='price'>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;

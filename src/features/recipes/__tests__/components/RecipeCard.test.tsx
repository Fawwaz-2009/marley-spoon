import React from 'react';
import { render, screen } from '@testing-library/react';
import {RecipeCard} from '../../components/RecipeCard';
import { Recipe } from '../../interfaces';

const recipe: Recipe = {
  calories: 788,
  chef: null,
  description:
    '*Grilled Cheese 101*: Use delicious cheese and good quality bread; make crunchy on the outside and ooey gooey on the inside; add one or two ingredients for a flavor punch! In this case, cherry preserves serve as a sweet contrast to cheddar cheese, and basil adds a light, refreshing note. Use __mayonnaise__ on the outside of the bread to achieve the ultimate, crispy, golden-brown __grilled cheese__. Cook, relax, and enjoy!',
  id: '4dT8tcb6ukGSIg2YyuGEOm',
  photo: {
    alt: 'White Cheddar Grilled Cheese with Cherry Preserves & Basil',
    height: 680,
    url: 'https://images.ctfassets.net/kk2bw5ojx476/61XHcqOBFYAYCGsKugoMYK/0009ec560684b37f7f7abadd66680179/SKU1240_hero-374f8cece3c71f5fcdc939039e00fb96.jpg',
    width: 1020
  },
  tags: ['vegan'],
  title: 'White Cheddar Grilled Cheese with Cherry Preserves & Basil'
};

describe('HomePage', () => {
  it('should render the heading', () => {
    render(<RecipeCard recipe={recipe} />);

    const recipeTitle = screen.getByText(/White Cheddar Grilled Cheese with Cherry Preserves & Basil/i);
    const recipeCalories = screen.getByText(/788/i);
    const recipePhoto = screen.getByAltText(/White Cheddar Grilled Cheese with Cherry Preserves & Basil/i);

    expect(recipeTitle).toBeInTheDocument();
    expect(recipeCalories).toBeInTheDocument();
    expect(recipePhoto).toBeInTheDocument();
  });
});

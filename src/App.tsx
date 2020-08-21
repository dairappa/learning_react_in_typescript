import React from 'react';
import logo from './logo.svg';
import './App.css';
import StarRating from "./StarRating";

type Props = {
}

type Ingredient = {
  name: string,
  amount: number,
  measurement: "l lb" | "cup"  | "med" | "clove"
}

type Menu = {
  name: string,
  ingredients: Ingredient[],
  steps: string[]
}

export type Recipes = Menu[]


const Menu: React.FC<Menu> = (menu) => {
    return (
        <article>
            <header>
                <h1>{menu.name}</h1>
            </header>
            <div>
                <h2>Ingredients</h2>
                <ul>
                    {
                        menu.ingredients.map((ingredient, i) => (
                            <li>
                                <p>{ingredient.name}</p>
                                <p>{ingredient.amount} {ingredient.measurement}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h2>Steps</h2>
                <ul>
                    {
                        menu.steps.map((step, i) => (
                            <li>
                                <p>{step}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <StarRating />
        </article>
    );
}

const App: React.FC<{title: string, recipes: Recipes}> = ({title, recipes}) => {
  return (
      <>
        {
          recipes.map((recipe, i) => (
              <Menu key={i} {...recipe} />
          ))
        }
      </>
  );
}

export default App;

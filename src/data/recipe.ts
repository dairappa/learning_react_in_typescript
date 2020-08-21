import {Recipes} from "../App";

export const recipes: Recipes = [
    {
        name: "Baked Salmon",
        ingredients: [
            {name: "Salmon", amount: 1, measurement: "l lb"},
            {name: "Pine Nuts", amount: 1, measurement: "cup"}
        ],
        steps: [
            "Preheat the oven to 350 degrees",
            "Spread the olive oil around a glass baking dish."
        ]
    },
    {
        name: "Fish Tacos",
        ingredients: [
            {name: "Whitefish", amount: 1, measurement: "l lb"},
            {name: "Cheese", amount: 1, measurement: "cup"}
        ],
        steps: [
            "Cook the fish on the grill until cooked through.",
            "Place the fish."
        ]
    }
]
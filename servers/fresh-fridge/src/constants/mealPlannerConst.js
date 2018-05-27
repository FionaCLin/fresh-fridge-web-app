const PERSONAL =  'PERSONAL';
const BOOKMARKED = 'BOOKMARKED';
const RECOMMENDED = 'RECOMMENDED';
const daysOfWeek = ['\xa0\xa0\xa0', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const macroNutrients = ['Energy', 'Carbs', 'Protein', 'Fats', 'Sodium'];
const mealTimes = ['BREKKIE', '\xa0LUNCH', 'DINNER'];
const recipeList = [
    {
        recipes: PERSONAL,
        title: "Personal Recipes",
        class: "glyphicon glyphicon-pencil"
    },
    {
        recipes: BOOKMARKED,
        title: "Bookmarked Recipes",
        class: "glyphicon glyphicon-bookmark"
    },
    {
        recipes: RECOMMENDED,
        title: "Recommended Recipes",
        class: "glyphicon glyphicon-thumbs-up"
    }
];
const defaultPlan = {
    name: "",
    dailyMeals : [
        [null, null, null],
        [null, null, null],
        [null, null, null],
        [null, null, null],
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    macros: {
        Energy: 0,
        Carbs: 0,
        Protein: 0,
        Fats: 0,
        Sodium: 0
    }
};
const sortDiet = {
    "Lose weight" : {
        calories: 300,
        cabs: 14,
        fats: NaN,
        protein: NaN,
        sodium: NaN
    },
    "Gain muscle" : {
        calories: 1000,
        cabs: 1000,
        fats: 1000,
        protein: 1000,
        sodium: 1000
    },
    "Sliming" : {
        calories: 600,
        cabs: 16,
        fats: NaN,
        protein: 26,
        sodium: NaN
    },
    "Stamina training" : {
        calories: 700,
        cabs: 45,
        fats: NaN,
        protein: NaN,
        sodium: NaN
    },
    "General fitness" : {
        calories: 500,
        cabs: NaN,
        fats: NaN,
        protein: NaN,
        sodium: NaN
    }
};

const sortPlan = [
    [10090, 1209 , 120, 45, 90],
    [19000, 1030, 100, 1000, 100],
    [9300, 1656, 800, 246, 38],
    [700, 4523, 102, 234, 89],
    [12100, 904 , 120, 45, 90]
];

export default {
    daysOfWeek,
    macroNutrients,
    mealTimes,
    recipeList,
    PERSONAL,
    BOOKMARKED,
    RECOMMENDED,
    defaultPlan,
    sortDiet,
    sortPlan,
    ADD_MEAL_PLANNER: 'add',
    EDIT_MEAL_PLANNER: 'edit',
    VIEW_MEAL_PLANNER: 'view'
}
const recipesList = [
  {title: 'Caramel Apple', image: 'apple'},
  {title: 'Popeye toast with eggs', image: 'recipe'},
  {title: 'Pistachio and figs cake', image: 'cake'},
  {title: 'Tender salmon on bed of salad', image: 'chicken'},
  {title: 'Meatball migoreng', image: 'meatball'},
  {title: 'Tomato and basil pasta', image: 'paella'},
  {title: 'Sunfried tomato and olives pizza', image: 'pizza'},
  {title: 'Berrilicious porridge', image: 'porridge'},
  {title: 'Fresh tomato and olives pizza', image: 'protein'},
  {title: 'Toasted stacked foccacia sandwich', image: 'sandwich'},
  {title: 'Banana pudding with caramel sauce', image: 'soup'},
];

export const members = [
  {
    id: '31e8eed8-2fde-4b93-9dd7-6bff47b7e6ba',
    firstName: 'tester1',
    lastName: 'unit',
    email: 'tester1.unit@gmail.com',
    birthday: new Date(2000, 1, 1),
    createdBy: 'SEEDED',
    updatedBy: 'SEEDED',
  },
  {
    id: '31e8eed8-2fee-4b93-9dd7-6bff47b7e6ba',
    firstName: 'tester2',
    lastName: 'unit',
    email: 'tester2.unit@gmail.com',
    birthday: new Date(2000, 1, 1),
    createdBy: 'SEEDED',
    updatedBy: 'SEEDED',
  },
];
export const recipes = recipesList.map(({title, image}, index) => ({
  title,
  memberId: members[index % 2].id,
  method: '',
  images: JSON.stringify([{title, url: `${image}.jpg`}]),
  calories: 0,
  fats: 0,
  protein: 0,
  cabs: 0,
  sodium: 0,
  createdBy: 'TESTER',
  updatedBy: 'TESTER',
}));

export type Simulation = {
  preferences: string[];
  restaurants: Restaurant[];
  menuItems: MenuItem[];
  results: Result[];
};

export type Restaurant = {
  id: string;
  name: string;
  description: string;
  rating: number;
  image: string;
};

export type MenuItem = {
  id: string;
  restaurantId: string;
  personName: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export type Result = {
  restaurant: Restaurant;
  matchedItems: MenuItem[];
  score: number;
};

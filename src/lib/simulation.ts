import { Restaurant, MenuItem } from "@/types";

function getTimeout(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function preferencesSim(preferences: string[]): Promise<string[]> {
  await new Promise((resolve) => setTimeout(resolve, getTimeout(2000, 4000)));
  return preferences.map((p) => `Refined: ${p}`);
}

export async function restaurantsSim(preferences: string[]): Promise<Restaurant[]> {
  await new Promise((resolve) => setTimeout(resolve, getTimeout(3000, 5000)));

  return [
    {
      id: "1",
      name: "Test",
      description: "Burger",
      rating: 4.5,
      image: "/mock/restaurant1.jpg",
    },
  ];
}

export async function analysisSim(restaurants: Restaurant[], preferences: string[]): Promise<MenuItem[]> {
  await new Promise((resolve) => setTimeout(resolve, getTimeout(2500, 4000)));

  return [
    {
      id: "1",
      restaurantId: "1",
      name: "Burger",
      personName: "John Doe",
      description: "Burger",
      price: 1,
      image: "/mock/burger.jpg",
    },
  ];
}

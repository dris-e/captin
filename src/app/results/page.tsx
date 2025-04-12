"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Image from "next/image";
import { Simulation, MenuItem } from "@/types";
import { Progress } from "@/components/ui/progress";

interface CardProps {
  title: string;
  description: string;
  rating: number;
  image: string;
  link: string;
  menu: MenuItem[];
}

const cards: CardProps[] = [
  {
    title: "Elite Burger & Grill",
    description: "An elite burger restaurant with a variety of burgers and fries",
    rating: 4.5,
    image: "/assets/images/mock/burger-1.png",
    link: "https://www.google.com",
    menu: [
      {
        id: "1",
        restaurantId: "1",
        name: "Burger",
        personName: "John Doe",
        price: 10,
        description: "A delicious burger",
        image: "/assets/images/burger.jpg",
      },
    ],
  },
  {
    title: "Restaurant 2",
    description: "Description of Restaurant 2",
    rating: 4.5,
    image: "/assets/images/restaurant-2.jpg",
    link: "https://www.google.com",
    menu: [
      {
        id: "2",
        restaurantId: "2",
        name: "Burger",
        personName: "John Doe",
        price: 10,
        description: "A delicious burger",
        image: "/assets/images/burger.jpg",
      },
    ],
  },
  {
    title: "Restaurant 3",
    description: "Description of Restaurant 3",
    rating: 4.5,
    image: "/assets/images/restaurant-3.jpg",
    link: "https://text.com",
    menu: [
      {
        id: "3",
        restaurantId: "3",
        name: "Burger",
        personName: "John Doe",
        price: 10,
        description: "A delicious burger",
        image: "/assets/images/burger.jpg",
      },
    ],
  },
];

export default function Results() {
  const [currentCard, setCurrentCard] = useState(0);

  return (
    <div className="pt-32 flex items-center justify-center gap-12 w-full mx-auto h-full">
      <div className="flex items-center justify-center gap-4 w-full h-full max-w-[100vw/2]">
        <Button variant="outline" className="rounded-full" size="icon" onClick={() => setCurrentCard(currentCard - 1)}>
          <ArrowLeftIcon className="w-4 h-4" />
        </Button>
        <Card key={cards[currentCard].title} className="w-full max-w-md">
          <CardContent>
            <Image
              src={`/assets/images/mock/burger-${currentCard + 1}.png`}
              alt={cards[currentCard].title}
              width={150}
              height={150}
              className="w-full rounded-md aspect-square object-cover"
            />
            <h2 className="text-lg font-bold mt-4">{cards[currentCard].title}</h2>
            <p className="text-sm text-muted-foreground">{cards[currentCard].description}</p>
            <Progress value={cards[currentCard].rating} className="mt-4" />
          </CardContent>
        </Card>
        <Button variant="outline" className="rounded-full" size="icon" onClick={() => setCurrentCard(currentCard + 1)}>
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex flex-col items-start justify-start gap-4 w-full h-full max-w-[100vw/2]">
        {cards[currentCard].menu.map((item) => (
          <Card key={item.id} className="w-full max-w-md">
            <CardContent className="flex flex-row gap-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <Progress value={item.price} className="mt-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

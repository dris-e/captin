"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      router.push("/results");
    }, 3000);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Loading Results...</h1>
        <p className="text-muted-foreground">This may take a few seconds</p>
      </div>
    </div>
  );
}

/* hudson */
/* hudson */
/* hudson */
/* hudson */
/* hudson */
/* hudson */
/* hudson */

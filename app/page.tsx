"use client";
import AvailableGenreSeeds from "@/components/availableGenreSeeds/AvailableGenreSeeds";
import { useEffect, useState } from "react";
// consider prefetching genres vs client side

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AvailableGenreSeeds />
    </main>
  );
}

{
  /*
i am trying to fetch one route and show that response in the console 
1. create an account
2. follow instructions
3. call it
*/
}

"use client";
import AvailableGenreSeeds from "@/components/page/home/availableGenreSeeds";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen justify-center p-24">
      <AvailableGenreSeeds />
    </main>
  );
}

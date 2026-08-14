import { characters } from "./../../../data/data";
import { notFound } from "next/navigation"; // Import next/navigation
import Image from "next/image";
import { Orbitron, Inter } from "next/font/google";

const orbit = Orbitron({
  weight: ["700"], // Specify the weights you need
  subsets: ["latin"], // Specify subsets
  display: "swap",
});

const inter = Inter({
  weight: ["200", "500"], // Specify the weights you need
  subsets: ["latin"], // Specify subsets
  display: "swap",
});

export default async function CharacterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const character = characters.find((character) => character.id === id);

  // If no character matches the ID, render the nearest not-found.tsx
  if (!character) {
    notFound();
  }

  // TypeScript now knows 'character' is definitively found past this point
  return (
    <main className="hero">
      <h1 className={`${orbit.className}`}>{character.name}</h1>
      <Image src={character.image} alt={character.alt} width={896} height={1200} className="float-left mr-5 mb-2 w-56 border-5 border-white right-drop-shadow" />
      <h2 className={`${inter.className} font-bold`}>Bio:</h2>
      <p className={`${inter.className} pb-8`}>{character.bio}</p>
      <h2 className={`${inter.className} font-bold`}>Abilities:</h2>
      <p className={`${inter.className} pb-8`}>{character.abilities}</p>
      <h2 className={`${inter.className} font-bold`}>Weaknesses:</h2>
      <p className={`${inter.className} pb-8`}>{character.weaknesses}</p>
      <h2 className={`${inter.className} font-bold`}>Assessment:</h2>
      <p className={`${inter.className} pb-8`}>{character.assessment}</p>
    </main>
  );
}

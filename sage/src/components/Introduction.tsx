import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["200", "500", "700"], // Specify the weights you need
  subsets: ["latin"], // Specify subsets
  display: "swap",
});

const Introduction = () => {
  return (
    <div className={`${inter.className} introduction`}>
      <p>
        A wise man once said, <span className="font-medium">“No permanent friends. No permanent enemies. Just permanent interests.”</span>
      </p>
      <p>In a world where the most physically powerful Supe is a mentally unstable, murderous demigod; a calculating and vicious madman leads a team of highly intelligent and skilled vigilantes whose primary objective is to eliminate all Supes; and a morally corrupt corporate machine sits behind it all, driven by one thing—profit—I must protect my personal interests at all times.</p>
      <p>
        Therefore, I, <span className="font-bold">Sister Sage</span>, have assembled a database of every major player in this deadly game of chess. I have documented each player&apos;s abilities, strengths, weaknesses, and, should the need ever arise, a contingency plan for how to neutralize—or even eliminate—them.
      </p>
    </div>
  );
};

export default Introduction;

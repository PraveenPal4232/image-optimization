import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-wrap">
      <div className="column">
        <h1>Original</h1>
      </div>
      <div className="column">
        <Image
          src="https://raw.githubusercontent.com/PraveenPal4232/image-optimization/main/public/images/1166209.jpg"
          alt="Vercel Logo"
          className="image"
          width={600}
          height={400}
        />
      </div>
      <div className="column">
        <Image
          src="https://raw.githubusercontent.com/PraveenPal4232/image-optimization/main/public/images/2325446.jpg"
          alt="Vercel Logo"
          className="image"
          width={600}
          height={400}
        />
      </div>
      <div className="column">
        <Image
          src="https://raw.githubusercontent.com/PraveenPal4232/image-optimization/main/public/images/2440021.jpg"
          alt="Vercel Logo"
          className="image"
          width={600}
          height={400}
        />
      </div>
    </main>
  );
}

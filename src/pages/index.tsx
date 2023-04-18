import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-wrap">
      <div className="column column-4">
        <h1>Original</h1>
      </div>
      <div className="column column-4">
        <h1>Large 1920x1280</h1>
      </div>
      <div className="column column-4">
        <h1>Medium 1280x853</h1>
      </div>
      <div className="column column-4">
        <h1>Small 640x427</h1>
      </div>
      <div className="column column-4">
        <Image
          src="https://raw.githubusercontent.com/PraveenPal4232/image-optimization/main/public/images/1166209.jpg"
          alt="Vercel Logo"
          className="image"
          width={600}
          height={400}
        />
      </div>

      <div className="column column-4">
        <Image
          src="https://raw.githubusercontent.com/PraveenPal4232/image-optimization/main/public/images/1166209-1.jpg"
          alt="Vercel Logo"
          className="image"
          width={600}
          height={400}
        />
      </div>
      <div className="column column-4">
        <Image
          src="https://raw.githubusercontent.com/PraveenPal4232/image-optimization/main/public/images/1166209-2.jpg"
          alt="Vercel Logo"
          className="image"
          width={600}
          height={400}
        />
      </div>
      <div className="column column-4">
        <Image
          src="https://raw.githubusercontent.com/PraveenPal4232/image-optimization/main/public/images/1166209-3.jpg"
          alt="Vercel Logo"
          className="image"
          width={600}
          height={400}
        />
      </div>
      <div className="column column-4">
        <Image
          src="https://raw.githubusercontent.com/PraveenPal4232/image-optimization/main/public/images/2325446.jpg"
          alt="Vercel Logo"
          className="image"
          width={600}
          height={400}
        />
      </div>

      <div className="column column-4">
        <Image
          src="https://raw.githubusercontent.com/PraveenPal4232/image-optimization/main/public/images/2325446-1.jpg"
          alt="Vercel Logo"
          className="image"
          width={600}
          height={400}
        />
      </div>
      <div className="column column-4">
        <Image
          src="https://raw.githubusercontent.com/PraveenPal4232/image-optimization/main/public/images/2325446-2.jpg"
          alt="Vercel Logo"
          className="image"
          width={600}
          height={400}
        />
      </div>
      <div className="column column-4">
        <Image
          src="https://raw.githubusercontent.com/PraveenPal4232/image-optimization/main/public/images/2325446-3.jpg"
          alt="Vercel Logo"
          className="image"
          width={600}
          height={400}
        />
      </div>
      <div className="column column-4">
        <Image
          src="https://raw.githubusercontent.com/PraveenPal4232/image-optimization/main/public/images/2440021.jpg"
          alt="Vercel Logo"
          className="image"
          width={600}
          height={400}
        />
      </div>

      <div className="column column-4">
        <Image
          src="https://raw.githubusercontent.com/PraveenPal4232/image-optimization/main/public/images/2440021-1.jpg"
          alt="Vercel Logo"
          className="image"
          width={600}
          height={400}
        />
      </div>
      <div className="column column-4">
        <Image
          src="https://raw.githubusercontent.com/PraveenPal4232/image-optimization/main/public/images/2440021-2.jpg"
          alt="Vercel Logo"
          className="image"
          width={600}
          height={400}
        />
      </div>
      <div className="column column-4">
        <Image
          src="https://raw.githubusercontent.com/PraveenPal4232/image-optimization/main/public/images/2440021-3.jpg"
          alt="Vercel Logo"
          className="image"
          width={600}
          height={400}
        />
      </div>
    </main>
  );
}

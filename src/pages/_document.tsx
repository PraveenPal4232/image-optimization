import { Html, Head, Main, NextScript } from 'next/document'
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ul className="w-full p-2 flex justify-evenly bg-gray-100	">
          <li>
            <Link href="/">ALL</Link>
          </li>
          <li>
            <Link href="/original">Original</Link>
          </li>
          <li>
            <Link href="/large">Large</Link>
          </li>
          <li>
            <Link href="/medium">Medium</Link>
          </li>
          <li>
            <Link href="/small">Small</Link>
          </li>
        </ul>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

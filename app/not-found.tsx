import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <Image height={600} width={600} alt="hero-image" src="/Images/404.svg" />

      <p className="text-lg text-neutral-500 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-2 rounded-full bg-black text-white hover:bg-neutral-800 transition font-medium"
      >
        Go back home
      </Link>
    </main>
  );
}

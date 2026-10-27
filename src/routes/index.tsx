import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: HomePage });

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-blue-600 px-6 text-center">
      <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
        Hello, World!
      </h1>
      <p className="text-lg text-blue-100">
        Your new app is up and running — welcome aboard.
      </p>
    </div>
  );
}

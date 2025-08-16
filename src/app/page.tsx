import Hello from '@/components/Hello';

export default function Home() {
  const env = process.env.NEXT_PUBLIC_ENV ?? 'preview';
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      <Hello />
      <a
        href="/api/health"
        className="text-blue-600 underline hover:text-blue-800"
      >
        API Health
      </a>
      <span className="rounded bg-gray-200 px-2 py-1 text-sm">ENV: {env}</span>
    </main>
  );
}

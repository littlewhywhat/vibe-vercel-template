import Link from 'next/link';
import type { ElementType } from 'react';
import {
  ArrowRightIcon,
  CheckCircledIcon,
  LayersIcon,
  RocketIcon,
  LockClosedIcon,
} from '@radix-ui/react-icons';

import Hello from '@/components/Hello';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type Feature = {
  title: string;
  description: string;
  icon: ElementType;
  bullets: string[];
};

const features: Feature[] = [
  {
    title: 'Instant Deploys',
    description: 'Push to main and watch Vercel ship a production-ready build in minutes.',
    icon: RocketIcon,
    bullets: ['Optimized Next.js defaults', 'Continuous delivery baked in'],
  },
  {
    title: 'Composable Design System',
    description: 'Pair Radix primitives with shadcn/ui components to iterate with confidence.',
    icon: LayersIcon,
    bullets: ['Accessible building blocks', 'Tailwind-powered customization'],
  },
  {
    title: 'Operational Peace of Mind',
    description: 'Health endpoints and sensible tooling so you can focus on product.',
    icon: LockClosedIcon,
    bullets: ['API health checks ready to go', 'Type-safe foundations with ESLint + TS'],
  },
];

export default function Home() {
  const env = process.env.NEXT_PUBLIC_ENV ?? 'preview';
  return (
    <main className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-muted" />
      <div className="pointer-events-none absolute left-1/2 top-[-25%] h-[480px] w-[880px] -translate-x-1/2 rounded-full bg-gradient-radial from-primary/25 via-primary/5 to-transparent blur-3xl" />
      <section className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col gap-16 px-6 py-24 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <Badge variant="outline">Environment: {env}</Badge>
          <Hello />
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="https://vercel.com/templates" target="_blank" rel="noreferrer">
                Deploy to Vercel
                <ArrowRightIcon className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/api/health">Check API Health</Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="group border-border/40">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:scale-105">
                  <feature.icon className="h-6 w-6" aria-hidden />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                {feature.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircledIcon className="h-4 w-4 text-primary" aria-hidden />
                    <span>{bullet}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

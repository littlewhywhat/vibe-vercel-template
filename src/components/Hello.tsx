import { Heading, Text } from '@radix-ui/themes';

export default function Hello() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
      <Heading
        size="9"
        weight="medium"
        className="bg-gradient-to-r from-primary via-accent to-primary/80 bg-clip-text text-4xl text-transparent sm:text-5xl md:text-6xl"
      >
        Launch modern experiences without leaving the comfort of Radix &amp; shadcn/ui.
      </Heading>
      <Text as="p" size="4" className="text-balance text-muted-foreground">
        Opinionated defaults, robust tooling, and accessible primitives combine to help you ship a beautiful app in minutes.
      </Text>
    </div>
  );
}

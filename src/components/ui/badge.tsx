import * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = {
  default:
    'inline-flex items-center gap-1 rounded-full border border-transparent bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary',
  outline:
    'inline-flex items-center gap-1 rounded-full border border-border/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground',
};

type Variant = keyof typeof badgeVariants;

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return <div className={cn(badgeVariants[variant], className)} {...props} />;
}

export { Badge };

"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import type { ComponentProps, JSX } from "react";

function Collapsible({
  ...props
}: ComponentProps<typeof CollapsiblePrimitive.Root>): JSX.Element {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({
  ...props
}: ComponentProps<
  typeof CollapsiblePrimitive.CollapsibleTrigger
>): JSX.Element {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  );
}

function CollapsibleContent({
  ...props
}: ComponentProps<
  typeof CollapsiblePrimitive.CollapsibleContent
>): JSX.Element {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  );
}

export { Collapsible, CollapsibleContent, CollapsibleTrigger };

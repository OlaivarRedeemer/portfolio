import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-normal transition-colors focus-none outline-none",
  {
    variants: {
      variant: {
        default: "bg-primary rounded-md h-[57px] text-white text-lg px-8 py-[18px]",
        secondary: "bg-secondary rounded-md h-[38px] text-sm font-medium text-white px-[15px] py-2.5",
        "faded-white": "bg-white/20 rounded-md h-[55px] text-lg text-white px-8 py-[18px]",
        transparent: "bg-transparent rounded-md p-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

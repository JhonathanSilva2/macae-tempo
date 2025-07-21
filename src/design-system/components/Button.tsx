// design-system/components/Button.tsx
import { Button as MUIButton, ButtonProps } from "@mui/material"
import clsx from "clsx"

interface CustomButtonProps extends ButtonProps {
  className?: string
}

export function Button({ className, ...props }: CustomButtonProps) {
  return (
    <MUIButton
      {...props}
      className={clsx("rounded-md font-bold normal-case", className || "")}
    />
  )
}

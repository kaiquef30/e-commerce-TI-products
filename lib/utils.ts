import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getGb(value: string) {
  switch (value) {
    case "64":
      return "64gb"
    case "128":
      return "128gb"
  }
}

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export function convertUnixToHumanReadable(unixTimestamp: any) {
  const date = new Date(unixTimestamp * 1000);
  const formattedDate = date.toLocaleString();
  return formattedDate;
}
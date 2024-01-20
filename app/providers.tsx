"use client";
/* app/providers.tsx

This file is necessary for NextUI to function properly.
It wraps the entire app in the NextUIProvider component, which provides global styles and theme variables.

NOTE: you should not have to touch this for anything. provide detailed reasoning in commit message if any changes are required here

*/

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
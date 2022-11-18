import { ReactNode } from "react";
import SearchHook from "./SearchHook";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SearchHook />
        {children}
      </body>
    </html>
  );
}

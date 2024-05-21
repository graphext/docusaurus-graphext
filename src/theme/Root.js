import React from "react";
import MDXContent from "@theme/MDXContent";

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <>
      <main className="list-disc list-inside">
        <MDXContent>{children}</MDXContent>
      </main>
    </>
  );
}

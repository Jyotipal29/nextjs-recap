import React from "react";

export default function SigninLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <div className="border-b p-4">20% off for the next 3 days</div> */}
      {children}
    </div>
  );
}

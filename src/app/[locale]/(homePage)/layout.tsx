import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import React from "react";

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

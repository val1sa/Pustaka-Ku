import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "PustakaKu",
  description: "Pencatatan peminjaman buku perpustakaan SMA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-[#f5f1e7] text-[#25352e]">
        <header className="sticky top-0 z-10 border-b border-[#e4ddcd] bg-[#f7f4ec]/90 shadow-sm shadow-[#27372d]/5 backdrop-blur-xl">
          <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
            <Link
              href="/"
              className="font-serif text-xl font-bold tracking-tight text-[#203b31] hover:text-[#42644f]"
            >
              PustakaKu
            </Link>
            <div className="flex items-center gap-1">
              <Link
                href="/"
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#5d655b] hover:bg-[#eae5d8] hover:text-[#203b31]"
              >
                Beranda
              </Link>
              <Link
                href="/buku"
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#5d655b] hover:bg-[#eae5d8] hover:text-[#203b31]"
              >
                Daftar Buku
              </Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
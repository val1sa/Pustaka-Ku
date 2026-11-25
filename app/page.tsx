import Link from "next/link";

export default function Beranda() {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-[#53695a] bg-gradient-to-br from-[#182f28] via-[#294338] to-[#1d352d] px-5 py-10 text-center shadow-xl shadow-[#29372d]/15 sm:px-10 sm:py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#dfc18b]">
        Perpustakaan sekolah
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[#f5f1e7] sm:text-4xl">
        Selamat datang di PustakaKu
      </h1>
      <p className="mx-auto mt-4 max-w-xl leading-7 text-[#e2e5d9]">
        PustakaKu adalah aplikasi web sederhana untuk mencatat buku perpustakaan
        SMA. Tidak perlu lagi mencatat manual di buku besar: semua data buku
        tersimpan rapi dan mudah dicari.
      </p>

      <ul className="mx-auto mt-7 max-w-md space-y-2 text-left text-[#f2eee3]">
        <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-sm backdrop-blur-sm">
          Lihat semua buku beserta jumlah stoknya
        </li>
        <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-sm backdrop-blur-sm">
          Cari buku berdasarkan judul atau penulis
        </li>
        <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-sm backdrop-blur-sm">
          Lihat detail setiap buku
        </li>
        <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-sm backdrop-blur-sm">
          Tambah buku baru ke perpustakaan
        </li>
      </ul>

      <Link
        href="/buku"
        className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#d2b579] px-5 py-3 font-semibold text-[#20372c] shadow-md shadow-black/15 hover:bg-[#e0c58f]"
      >
        Lihat Daftar Buku
      </Link>
    </section>
  );
}
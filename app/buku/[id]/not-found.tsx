import Link from "next/link";

export default function BukuTidakDitemukan() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white px-6 py-12 text-center">
      <h1 className="text-xl font-bold">Buku tidak ditemukan</h1>
      <p className="mt-2 text-sm text-slate-600">
        Buku mungkin sudah dihapus atau alamat yang dibuka tidak valid.
      </p>
      <Link
        href="/buku"
        className="mt-5 inline-block rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
      >
        Kembali ke daftar buku
      </Link>
    </section>
  );
}

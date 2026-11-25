import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function HalamanDetailBuku({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!/^[1-9]\d*$/.test(id)) notFound();

  const buku = await prisma.buku.findUnique({
    where: { id: Number(id) },
  });
  if (!buku) notFound();

  return (
    <div>
      <Link
        href="/buku"
        className="mb-4 inline-block text-sm font-medium text-[#596257] hover:text-[#203b31] hover:underline"
      >
        &larr; Kembali ke daftar
      </Link>
      <article className="flex flex-col gap-6 rounded-2xl border border-[#e2dac8] bg-[#fffdf8] p-5 shadow-lg shadow-[#493a25]/5 sm:flex-row sm:p-7">
        <div
          aria-label="Sampul buku tidak tersedia"
          className="flex h-48 w-36 shrink-0 items-center justify-center rounded-xl border-4 border-double border-[#b58b50]/45 bg-gradient-to-br from-[#294338] to-[#142720] text-sm font-semibold uppercase tracking-[0.18em] text-[#ead7aa]"
        >
          Pustaka
        </div>

        <div>
          <h1 className="font-serif text-2xl font-semibold tracking-tight text-[#203b31]">
            {buku.judul}
          </h1>
          <p className="mt-2 text-slate-600">Penulis: {buku.penulis}</p>
          <p className="text-sm text-slate-500">
            {buku.kategori}
            {buku.tahunTerbit ? ` · ${buku.tahunTerbit}` : ""}
          </p>

          <span
            className={
              buku.stokTersedia === 0
                ? "mt-4 inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700"
                : "mt-4 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700"
            }
          >
            Stok: {buku.stokTersedia} dari {buku.stokTotal} tersedia
          </span>

          <section className="mt-6 border-t border-[#e6dece] pt-5">
            <h2 className="font-serif text-sm font-semibold uppercase tracking-wide text-[#756a55]">
              Deskripsi
            </h2>
            <p className="mt-2 whitespace-pre-wrap leading-7 text-[#49534a]">
              {buku.deskripsi || "Belum ada deskripsi untuk buku ini."}
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}

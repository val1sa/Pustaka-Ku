import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function HalamanBuku({
  searchParams,
}: {
  searchParams: Promise<{ cari?: string | string[] }>;
}) {
  const { cari: nilaiCari } = await searchParams;
  const cari = Array.isArray(nilaiCari) ? nilaiCari[0] : nilaiCari;

  const daftar = await prisma.buku.findMany({
    where: cari
      ? {
          OR: [
            { judul: { contains: cari } },
            { penulis: { contains: cari } },
          ],
        }
      : undefined,
    orderBy: { id: "asc" },
  });

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="font-serif text-2xl font-semibold tracking-tight text-[#203b31]">
          Daftar buku
        </h1>
        <Link
          href="/buku/baru"
          className="rounded-xl bg-[#203b31] px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#203b31]/15 hover:bg-[#345344]"
        >
          + Tambah buku
        </Link>
      </div>

      <form action="/buku" method="get" className="mb-6 flex gap-2">
        <input
          name="cari"
          defaultValue={cari}
          placeholder="Cari judul atau penulis"
          className="min-w-0 flex-1 rounded-xl border border-[#d8cfbd] bg-[#fffdf8] px-3.5 py-2.5 text-sm shadow-sm placeholder:text-[#8b877b]"
        />
        <button className="rounded-xl bg-[#203b31] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#203b31]/15 hover:bg-[#345344]">
          Cari
        </button>
      </form>

      <div className="overflow-x-auto rounded-2xl border border-[#e2dac8] bg-[#fffdf8] shadow-md shadow-[#493a25]/5">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#eee8d9] text-xs uppercase tracking-wide text-[#635b4b]">
            <tr>
              <th className="px-4 py-3">No</th>
              <th className="px-4 py-3">Judul</th>
              <th className="px-4 py-3">Penulis</th>
              <th className="px-4 py-3">Kategori</th>
              <th className="px-4 py-3">Stok</th>
              <th className="px-4 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {daftar.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-6 text-center text-[#756a55]"
                >
                  {cari
                    ? "Buku tidak ditemukan."
                    : "Belum ada buku. Tambahkan buku pertama Anda."}
                </td>
              </tr>
            )}

            {daftar.map((
              buku: {
                id: number;
                judul: string;
                penulis: string;
                kategori: string;
                stokTersedia: number;
                stokTotal: number;
              },
              index: number
            ) => (
              <tr
                key={buku.id}
                className="border-t border-[#eee9df] transition-colors hover:bg-[#faf6ed]"
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3 font-medium text-[#273b31]">
                  {buku.judul}
                </td>
                <td className="px-4 py-3">{buku.penulis}</td>
                <td className="px-4 py-3">{buku.kategori}</td>
                <td className="px-4 py-3">
                  <span
                    className={
                      buku.stokTersedia === 0
                        ? "inline-flex min-w-14 justify-center rounded-full bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700"
                        : "font-medium"
                    }
                  >
                    {buku.stokTersedia}/{buku.stokTotal}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <Link
                    href={`/buku/${buku.id}`}
                    className="inline-flex rounded-lg border border-[#d8cfbd] px-3 py-1.5 text-xs font-semibold text-[#345344] hover:border-[#9b8a6c] hover:bg-[#f1ecdf]"
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

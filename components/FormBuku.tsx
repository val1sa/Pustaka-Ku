"use client";

import { useActionState } from "react";
import Link from "next/link";
import { simpanBuku, type FormState } from "@/app/actions";

const awal: FormState = { sukses: false, pesan: "" };

export default function FormBuku() {
  const [state, formAction, pending] = useActionState(simpanBuku, awal);

  const kotak =
    "mt-1 block w-full rounded-xl border border-[#d8cfbd] bg-[#fffdf8] px-3.5 py-2.5 text-sm text-[#25352e] shadow-sm placeholder:text-[#8b877b]";

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label htmlFor="judul" className="block text-sm font-semibold text-slate-700">
          Judul *
        </label>
        <input
          id="judul"
          name="judul"
          required
          defaultValue={state.values?.judul}
          className={kotak}
        />
        {state.galat?.judul && (
          <p className="mt-1 text-sm text-red-600">{state.galat.judul}</p>
        )}
      </div>

      <div>
        <label htmlFor="penulis" className="block text-sm font-semibold text-slate-700">
          Penulis *
        </label>
        <input
          id="penulis"
          name="penulis"
          required
          defaultValue={state.values?.penulis}
          className={kotak}
        />
        {state.galat?.penulis && (
          <p className="mt-1 text-sm text-red-600">{state.galat.penulis}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="kategori"
          className="block text-sm font-semibold text-slate-700"
        >
          Kategori *
        </label>
        <select
          id="kategori"
          name="kategori"
          required
          defaultValue={state.values?.kategori ?? ""}
          className={kotak}
        >
          <option value="">Pilih kategori</option>
          <option value="Novel">Novel</option>
          <option value="Sains">Sains</option>
          <option value="Sejarah">Sejarah</option>
          <option value="Pelajaran">Pelajaran</option>
          <option value="Referensi">Referensi</option>
          <option value="Lainnya">Lainnya</option>
        </select>
        {state.galat?.kategori && (
          <p className="mt-1 text-sm text-red-600">{state.galat.kategori}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="tahunTerbit"
            className="block text-sm font-semibold text-slate-700"
          >
            Tahun terbit
          </label>
          <input
            id="tahunTerbit"
            name="tahunTerbit"
            type="number"
            min="0"
            step="1"
            defaultValue={state.values?.tahunTerbit}
            className={kotak}
          />
          {state.galat?.tahunTerbit && (
            <p className="mt-1 text-sm text-red-600">{state.galat.tahunTerbit}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="stok"
            className="block text-sm font-semibold text-slate-700"
          >
            Jumlah stok *
          </label>
          <input
            id="stok"
            name="stok"
            type="number"
            min="0"
            step="1"
            required
            defaultValue={state.values?.stok}
            className={kotak}
          />
          {state.galat?.stok && (
            <p className="mt-1 text-sm text-red-600">{state.galat.stok}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="deskripsi"
          className="block text-sm font-semibold text-slate-700"
        >
          Deskripsi
        </label>
        <textarea
          id="deskripsi"
          name="deskripsi"
          rows={4}
          defaultValue={state.values?.deskripsi}
          className={kotak}
        />
      </div>

      {state.pesan && (
        <p className={state.sukses ? "text-sm text-green-600" : "text-sm text-red-600"}>
          {state.pesan}
        </p>
      )}

      <div className="flex justify-end gap-2">
        <Link
          href="/buku"
          className="rounded-xl border border-[#d8cfbd] px-4 py-2.5 text-sm font-semibold text-[#596257] hover:bg-[#f1ecdf]"
        >
          Batal
        </Link>
        <button
          disabled={pending}
          type="submit"
          className="rounded-xl bg-[#203b31] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#203b31]/15 hover:bg-[#345344] disabled:opacity-50"
        >
          {pending ? "Menyimpan..." : "Simpan"}
        </button>
      </div>
    </form>
  );
}
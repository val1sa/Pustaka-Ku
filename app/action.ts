"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma";

export type FormState = {
  sukses: boolean;
  pesan: string;
  galat?: {
    judul?: string;
    penulis?: string;
    kategori?: string;
    tahunTerbit?: string;
    stok?: string;
  };
  values?: {
    judul: string;
    penulis: string;
    kategori: string;
    tahunTerbit: string;
    stok: string;
    deskripsi: string;
  };
};

export async function simpanBuku(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const judul = String(formData.get("judul") ?? "").trim();
  const penulis = String(formData.get("penulis") ?? "").trim();
  const kategori = String(formData.get("kategori") ?? "").trim();
  const tahunTerbit = String(formData.get("tahunTerbit") ?? "").trim();
  const stok = String(formData.get("stok") ?? "").trim();
  const deskripsi = String(formData.get("deskripsi") ?? "").trim();

  const galat: NonNullable<FormState["galat"]> = {};
  if (!judul) galat.judul = "Judul wajib diisi";
  if (!penulis) galat.penulis = "Penulis wajib diisi";
  if (!kategori) galat.kategori = "Kategori wajib dipilih";
  if (tahunTerbit && !Number.isInteger(Number(tahunTerbit))) {
    galat.tahunTerbit = "Tahun terbit harus berupa angka";
  }
  if (!stok) {
    galat.stok = "Jumlah stok wajib diisi";
  } else if (!Number.isInteger(Number(stok)) || Number(stok) < 0) {
    galat.stok = "Jumlah stok harus angka bulat 0 atau lebih";
  }

  const values = { judul, penulis, kategori, tahunTerbit, stok, deskripsi };

  if (Object.keys(galat).length > 0) {
    return { sukses: false, pesan: "Periksa kembali isian Anda.", galat, values };
  }

  await prisma.buku.create({
    data: {
      judul,
      penulis,
      kategori,
      tahunTerbit: tahunTerbit ? Number(tahunTerbit) : null,
      stokTotal: Number(stok),
      stokTersedia: Number(stok),
      deskripsi: deskripsi || null,
    },
  });

  revalidatePath("/buku");
  redirect("/buku");
}
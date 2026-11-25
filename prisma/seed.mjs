import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const jumlah = await prisma.buku.count();
  if (jumlah > 0) {
    console.log("Database sudah berisi buku, seed dilewati.");
    return;
  }

  await prisma.buku.createMany({
    data: [
      {
        judul: "Laskar Pelangi",
        penulis: "Andrea Hirata",
        kategori: "Novel",
        tahunTerbit: 2005,
        stokTotal: 5,
        stokTersedia: 3,
        deskripsi: "Kisah sepuluh anak dari Belitung yang berjuang agar tetap bersekolah.",
      },
      {
        judul: "Bumi Manusia",
        penulis: "Pramoedya Ananta Toer",
        kategori: "Novel",
        tahunTerbit: 1980,
        stokTotal: 2,
        stokTersedia: 0,
        deskripsi: "Kisah Minke, pemuda pribumi yang bersekolah di masa Hindia Belanda.",
      },
      {
        judul: "Fisika Dasar",
        penulis: "Halliday",
        kategori: "Sains",
        tahunTerbit: 2010,
        stokTotal: 2,
        stokTersedia: 2,
        deskripsi: "Buku pengantar fisika untuk siswa dan mahasiswa.",
      },
      {
        judul: "Sang Pemimpi",
        penulis: "Andrea Hirata",
        kategori: "Novel",
        tahunTerbit: 2006,
        stokTotal: 4,
        stokTersedia: 1,
        deskripsi: "Kelanjutan kisah Ikal dan Arai yang bermimpi sekolah ke luar negeri.",
      },
      {
        judul: "Matematika Kelas XII",
        penulis: "Tim Kemdikbud",
        kategori: "Pelajaran",
        tahunTerbit: 2018,
        stokTotal: 10,
        stokTersedia: 7,
        deskripsi: "Buku pelajaran matematika untuk kelas XII.",
      },
      {
        judul: "Sapiens",
        penulis: "Yuval Noah Harari",
        kategori: "Sejarah",
        tahunTerbit: 2011,
        stokTotal: 3,
        stokTersedia: 3,
        deskripsi: "Ringkasan sejarah umat manusia dari zaman purba sampai sekarang.",
      },
      {
        judul: "Kamus Besar Bahasa Indonesia",
        penulis: "Tim Penyusun",
        kategori: "Referensi",
        tahunTerbit: 2016,
        stokTotal: 1,
        stokTersedia: 0,
        deskripsi: "Kamus rujukan resmi bahasa Indonesia.",
      },
      {
        judul: "Kumpulan Cerpen Siswa",
        penulis: "Tim Redaksi OSIS",
        kategori: "Lainnya",
        stokTotal: 6,
        stokTersedia: 6,
      },
    ],
  });

  console.log("Seed selesai: data buku contoh sudah diisi.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
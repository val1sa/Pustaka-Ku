# PustakaKu

Aplikasi pencatatan buku perpustakaan SMA, dibuat dengan Next.js App Router,
TypeScript, Tailwind CSS, Prisma 6, dan SQLite.

## Menjalankan aplikasi

1. Pasang dependensi:

   ```bash
   npm install
   ```

2. Pastikan `.env` di root proyek berisi:

   ```env
   DATABASE_URL="file:./dev.db"
   ```

   File database dibuat di `prisma/dev.db`.

3. Buat tabel dan isi data contoh:

   ```bash
   npx prisma migrate dev --name init
   npx prisma db seed
   ```

4. Jalankan aplikasi:

   ```bash
   npm run dev
   ```

   Buka [http://localhost:3000](http://localhost:3000).

## Halaman

- `/` — landing page
- `/buku` — daftar buku dan pencarian berdasarkan judul atau penulis
- `/buku/[id]` — detail buku
- `/buku/baru` — form untuk menambahkan buku


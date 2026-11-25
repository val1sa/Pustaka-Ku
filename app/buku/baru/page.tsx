import FormBuku from "@/components/FormBuku";

export default function HalamanBukuBaru() {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-[#e2dac8] bg-[#fffdf8] p-5 shadow-lg shadow-[#493a25]/5 sm:p-7">
      <h1 className="mb-6 font-serif text-2xl font-semibold tracking-tight text-[#203b31]">
        Tambah buku baru
      </h1>
      <FormBuku />
    </div>
  );
}
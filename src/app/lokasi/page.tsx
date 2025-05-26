import { supabase } from '@/lib/supabaseClient';

export default async function Lokasi() {
  // Fetch data dari Supabase
  const { data: lokasi, error } = await supabase
    .from('lokasi')
    .select('*')
    .order('nama', { ascending: true });

  if (error) {
    return (
      <main className="flex-grow w-full px-2 sm:px-4 py-8 flex flex-col items-center justify-center">
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-8 w-full max-w-2xl text-center">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Halaman Lokasi</h1>
          <p className="text-red-600">Error: {error.message}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow w-full px-2 sm:px-4 py-8 flex flex-col items-center justify-center">
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-8 w-full max-w-2xl text-center">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Daftar Lokasi Kajian</h1>
        <ul className="space-y-6">
          {lokasi?.map((item: any) => (
            <li key={item.id} className="bg-gray-50 rounded-lg p-4 text-left">
              <h2 className="text-xl font-bold text-gray-800">{item.nama}</h2>
              <p className="text-gray-600"><b>Alamat:</b> {item.alamat}</p>
              <p className="text-gray-600"><b>Keterangan:</b> {item.keterangan}</p>
              {item.link_map && (
                <a href={item.link_map} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Lihat di Google Maps</a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

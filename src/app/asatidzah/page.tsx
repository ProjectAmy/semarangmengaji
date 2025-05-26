import { supabase } from '@/lib/supabaseClient';

export default async function Asatidzah() {
  // Fetch data dari Supabase
  const { data: pemateri, error } = await supabase
    .from('pemateri')
    .select('*')
    .order('nama', { ascending: true });

  if (error) {
    return (
      <main className="flex-grow w-full px-2 sm:px-4 py-8 flex flex-col items-center justify-center">
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-8 w-full max-w-2xl text-center">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Halaman Asatidzah</h1>
          <p className="text-red-600">Error: {error.message}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow w-full px-2 sm:px-4 py-8 flex flex-col items-center justify-center">
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-8 w-full max-w-2xl text-center">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Daftar Asatidzah</h1>
        <ul className="space-y-6">
          {pemateri?.map((ustadz: any) => (
            <li key={ustadz.id} className="bg-gray-50 rounded-lg p-4 flex flex-col items-center">
              {ustadz.foto_url && (
                <img src={ustadz.foto_url} alt={ustadz.nama} width={100} height={100} className="rounded-full mb-2 object-cover" />
              )}
              <h2 className="text-xl font-bold text-gray-800">{ustadz.nama}</h2>
              <p className="text-gray-600"><b>Akademik:</b> {ustadz.akademik}</p>
              <p className="text-gray-600"><b>Bio:</b> {ustadz.bio}</p>
              <p className="text-gray-600"><b>Kontak WA:</b> {ustadz.kontak_wa}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

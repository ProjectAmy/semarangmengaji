import { supabase } from '@/lib/supabaseClient';


interface Ustadz {
  id: string;
  nama: string;
  panggilan: string;
  titel: string;
  akademik: string;
  bio: string;
  kontak_wa: string;
}

export default async function Asatidzah() {
  // Fetch data dari Supabase
  const { data: pemateri, error } = await supabase
    .from('pemateri')
    .select('id, nama, panggilan, titel, akademik, bio, kontak_wa')
    .order('nama', { ascending: true }) as { data: Ustadz[] | null, error: Error | null };

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
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-8 w-full max-w-2xl">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-800 text-center">Daftar Asatidzah</h1>
        <ol className="space-y-2 list-decimal list-inside">
          {pemateri?.map((ustadz: Ustadz) => (
            <li key={ustadz.id} className="text-gray-800 py-1">
              {ustadz.panggilan.charAt(0).toUpperCase() + ustadz.panggilan.slice(1)} {ustadz.nama}{ustadz.titel ? `, ${ustadz.titel}` : ''}
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}

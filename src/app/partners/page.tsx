export default function Partners() {
  return (
    <main className="flex-grow w-full px-2 sm:px-4 py-8 flex flex-col items-center justify-center">
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-8 w-full max-w-4xl">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">Our Partners</h1>
        
        <div className="space-y-8">
          <section className="text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Mitra Kami</h2>
            <p className="text-gray-600">
              Halaman ini sedang dalam pengembangan. Kami akan segera menampilkan daftar mitra yang bekerja sama dengan Semarang Mengaji.
            </p>
          </section>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {/* Placeholder for partner logos */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item}
                className="bg-gray-100 rounded-lg p-6 flex items-center justify-center h-32 hover:shadow-md transition-shadow"
              >
                <span className="text-gray-400">Partner Logo {item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

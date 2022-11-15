import React from 'react';
import Hero from '../../components/Hero';
const Home = () => {
  return (
    <>
      <Hero />
      <div className="mt-10">
        <div className="text-center shadow-sm p-4 bg-teal-50 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-32 h-32 text-gray-600 text-center m-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
            />
          </svg>
          <h1 className="text-teal-700 font-semibold text-2xl">
            Ada 1.000.000 lowongan untuk kamu
          </h1>
          <p className="text-gray-500">
            Pilih lowongan untuk melihat lebih detail
          </p>
        </div>

        <div className="container m-auto mt-10">
          <div className="md:flex space-x-5 items-center">
            <div>
              <img
                className="md:max-w-xl h-auto rounded-lg"
                src={
                  'https://unsplash.com/photos/zNRITe8NPqY/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NTB8fHRpcHMlMjB3b3JrfGVufDB8MHx8fDE2NjczNzg3NTQ&force=true&w=1920'
                }
                alt="Home"
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-left text-gray-700 my-6">
                Tips Menentukan <p className="text-teal-700">Career</p>
              </h1>
              <p className="text-gray-600 text-left">
                Pesatnya perkembangan era digital saat ini berdampak kepada
                pilihan profesi yang semakin beragam. Banyak profesi yang
                dulunya tidak ada, sekarang justru menjadi profesi yang
                digandrungi - contohnya adalah Web Developer. Pilihan berkarir
                menjadi freelance pun semakin diminati karena bisa dilakukan
                dimana saja dan fleksibilitas waktu yang bisa kita atur sendiri.
                Untuk kamu fresh graduate yang sedang mencari-cari pekerjaan,
                banyaknya pilihan profesi untuk menopang kehidupan di masa depan
                menjadi tantangan untuk kamu. Supaya keputusan memilih karir
                bisa dilakukan dengan tepat, ada beberapa hal yang harus kamu
                lakukan.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <div className="md:flex items-center space-x-10 my-16">
              <div className="bg-teal-200 p-4 rounded-full">
                <svg
                  className="w-10 h-10 text-teal-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-700 my-4">
                  Menilai Diri Sendiri
                </h1>
                <p className="text-gray-600">
                  Sangat penting untuk belajar menilai tentang diri sendiri
                  sebelum kamu memilih karir yang tepat. Kamu harus bisa
                  memahami minat, bakat dan keterampilan kamu. Selain itu,
                  memahami dan menilai kepribadian kamu juga penting untuk
                  kelangsungan karir kamu ke depannya. Dengan kamu bisa menilai
                  diri sendiri, kamu jadi tahu profesi dan industri seperti apa
                  yang tepat untuk kamu.
                </p>
              </div>
            </div>

            <div className="md:flex items-center space-x-10 my-16">
              <div className="bg-teal-200 p-4 rounded-full sm:rounded-full">
                <svg
                  className="w-10 h-10 text-teal-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-700 my-4">
                  Buat Daftar Pekerjaan yang Menarik Minat Kamu
                </h1>
                <p className="text-gray-600">
                  Setelah kamu sudah memahami dan menilai diri kamu, buat daftar
                  pekerjaan yang sesuai kepribadian, bakat dan keterampilan
                  kamu. Kemudian kamu kerucutkan lagi daftar pekerjaan tersebut
                  yang sesuai minat kamu. Memilih pekerjaan yang sesuai minat
                  adalah kunci untuk sukses dalam karir.
                </p>
              </div>
            </div>

            <div className="md:flex items-center space-x-10 my-16">
              <div className="bg-teal-200 p-4 rounded-full">
                <svg
                  className="w-10 h-10 text-teal-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-700 my-4">
                  Pahami Betul Detil Pekerjaan dan Tanggung Jawab
                </h1>
                <p className="text-gray-600">
                  Setelah membuat daftar pekerjaan terpilih sesuai minat, kamu
                  bisa lanjutkan dengan mencari tahu <em>job description</em>
                   dari pekerjaan tersebut. Cari tahu juga persyaratan
                  pendidikan untuk bisa melamar di posisi tersebut dan pasaran
                  gaji untuk posisi tersebut.
                </p>
              </div>
            </div>

            <div className="md:flex items-center space-x-10 my-16">
              <div className="bg-teal-200 p-4 rounded-full">
                <svg
                  className="w-10 h-10 text-teal-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-700 my-4">
                  Identifikasi Tujuan yang Mau Kamu Raih
                </h1>
                <p className="text-gray-600">
                  Kamu sudah menentukan pekerjaan dan profesi yang mau kamu
                  jalani? Good! Sekarang identifikasi tujuan jangka pendek dan
                  jangka panjang kamu. Tujuan jangka panjang adalah tujuan yang
                  membutuhkan sekitar 3-5 tahun untuk mencapainya. Sedangkan
                  tujuan jangka pendek membutuhkan waktu sekitar 6 bulan sampai
                  3 tahun untuk mencapainya. Tujuan yang sudah ditetapkan akan
                  membantu kamu untuk sukses dalam karir yang dipilih.
                </p>
              </div>
            </div>

            <div className="md:flex items-center space-x-10 my-16">
              <div className="bg-teal-200 p-4 rounded-full">
                <svg
                  className="w-10 h-10 text-teal-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-700 my-4">
                  Potensi Karir di Masa Depan
                </h1>
                <p className="text-gray-600">
                  Mengetahui stabilitas pekerjaan sangat penting. Apakah profesi
                  yang kamu jalani memiliki prospek dan kontinuitas? Ada sektor
                  bisnis yang berkembang dua hingga tiga kali lipat dalam
                  beberapa tahun ke depan seperti sektor kreatif. Sektor kreatif
                  adalah sektor yang berkelanjutan karena mengandalkan manusia,
                  kreativitas dan ide sebagai 'poros' industrinya, sehingga bisa
                  bertahan dari zaman ke zaman atau dalam waktu yang panjang.
                  Berbeda dengan sektor industri yang cenderung menggunakan
                  sumber daya alam, yang jika digunakan dalam jumlah yang
                  berlebihan bisa merusak alam atau memiliki defisit sumber
                  daya.
                </p>
              </div>
            </div>

            <div className="md:flex items-center space-x-10 my-16">
              <div className="bg-teal-200 p-4 rounded-full">
                <svg
                  className="w-10 h-10 text-teal-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-700 my-4">
                  Kesempatan Untuk Berkembang
                </h1>
                <p className="text-gray-600">
                  Karir dan jabatan tidak selalu terkait dengan uang dan
                  pendapatan. Di luar dari materi, kita juga butuh mengembangkan
                  dan mengaktualisasikan diri. Apakah perusahaan tempat kamu
                  melamar memberikan kesempatan karyawannya untuk berkembang?
                  Apakah kamu mendapatkan pelatihan yang mendukung pekerjaan
                  kamu? Cari tahu sebesar apa kesempatan yang diberikan
                  perusahaan dalam perkembangan karir karyawannya. Apakah sesuai
                  dengan rencana jangka panjang kamu?
                </p>
              </div>
            </div>
            <div className="md:flex items-center space-x-10 my-16">
              <div className="bg-teal-200 p-4 rounded-full">
                <svg
                  className="w-10 h-10 text-teal-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-700 my-4">
                  Bisa Membuat Bangga
                </h1>
                <p className="text-gray-600">
                  Pekerjaan yang tepat adalah pekerjaan yang bisa membuat kamu
                  merasa bangga. Rasa bangga ini tidak selalu berkaitan dengan
                  level perusahaan tempat kamu bekerja, jabatan atau gaji -
                  melainkan hasil baik dari pekerjaanmu. Kebanggaan akan
                  dirasakan ketika kamu bekerja di bidang yang kamu minati,
                  sesuai kemampuan dan kamu berkarya dengan baik di dalam
                  pekerjaanmu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

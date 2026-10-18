/**
 * MEGA INTERIOR BALI — Central Content Configuration
 * 
 * Strict Content Rule:
 * Unknown business information is kept as explicit placeholders.
 * Do not invent company facts, founding years, team biographies, or unverified claims.
 */

export interface ProjectItem {
  id: string
  title: string
  category: 'Residential' | 'Hospitality' | 'Interior' | 'Commercial'
  location: string
  year: string // Note: Placeholder year until confirmed
  image: string
  aspectRatio: string
  scope: string
  description: string
  isPlaceholder: boolean
}

export interface ServiceItem {
  id: string
  number: string
  title: string
  category: 'Konstruksi' | 'Interior'
  subtitle: string
  description: string
  capabilities: string[]
  note?: string
}

export const siteConfig = {
  brand: {
    name: 'MEGA INTERIOR BALI',
    shortName: 'MEGA INTERIOR',
    locationBadge: 'BALI',
    monogram: 'M.',
    businessCategory: 'Jasa Konstruksi dan Bangunan',
    scope: 'Construction & Interior Studio',
    phone: '0821-4696-3094',
    phoneRaw: '6282146963094',
    address: 'V3FH+GWW, Jl. Laksamana-Baktiseraga, Baktiseraga, Kec. Buleleng, Kabupaten Buleleng, Bali 81119',
    establishedYear: '[YEAR]', // PLACEHOLDER — confirm with business before publishing
  },

  whatsapp: {
    url: 'https://wa.me/6282146963094?text=Halo%20MEGA%20INTERIOR%20BALI%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20konstruksi%2Finterior.',
    prefilledMessage: 'Halo MEGA INTERIOR BALI, saya ingin bertanya mengenai layanan konstruksi/interior.',
  },

  navigation: [
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SERVICES', href: '#services' },
    { label: 'STUDIO', href: '#about' },
    { label: 'APPROACH', href: '#approach' },
    { label: 'CONTACT', href: '#contact' },
  ],

  hero: {
    headlineWord1: 'Architecture',
    headlineWord2: 'of Purpose.', // Editorial italic serif as in the 100% reference
    provisionalHeadlineAlt: 'BUILT WITH INTENTION.', // Reference from prompt.md
    indexNumber: '01',
    description: 'Mega Interior adalah studio konstruksi & interior di Bali. Kami mewujudkan ruang bernilai abadi dengan perhatian mendalam pada proporsi, materialitas, dan ketelitian pengerjaan.',
    viewProjectsLabel: 'VIEW PROJECTS',
    estLabel: 'EST. [TAHUN]', // PLACEHOLDER — belum dikonfirmasi
    locationLabel: 'BALI / INDONESIA',
    verticalTagline: 'SPACES / THAT / ENDURE',
    categories: ['RESIDENTIAL', 'HOSPITALITY', 'CULTURAL', 'COMMERCIAL'],
    images: {
      // High-res curated architectural photography matching the warm stone, pool reflection, sunlight aesthetic
      mainHero: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      mainHeroAlt: 'Bespoke modern architectural villa with warm stone facade, reflection pool and natural sunlight in Bali',
      staircaseHero: 'https://images.unsplash.com/photo-1526573059328-179b147e1b42?auto=format&fit=crop&w=800&q=85',
      staircaseHeroAlt: 'Sculptural architectural curved staircase with warm natural light and shadow play',
    }
  },

  intro: {
    tag: 'EDITORIAL STATEMENT — 02',
    statement: 'Setiap ruang memiliki esensi. Kami mewujudkannya melalui pengerjaan konstruksi terukur dan sentuhan interior berkarakter.',
    subtext: 'Menghubungkan ketepatan struktur bangunan dengan kehangatan material tropis. Kami berfokus pada kualitas pengerjaan yang bertahan melintasi waktu, melayani proyek hunian privat, villa peristirahatan, dan ruang komersial terpilih di Bali.',
    meta: [
      { label: 'LOKASI', value: 'Kabupaten Buleleng, Bali' },
      { label: 'CAKUPAN', value: 'Konstruksi & Desain Interior' },
      { label: 'STATUS DOKUMEN', value: 'Official Company Profile' },
    ]
  },

  services: [
    {
      id: 'construction',
      number: '01',
      title: 'Jasa Konstruksi & Bangunan',
      category: 'Konstruksi',
      subtitle: 'Struktur yang Kokoh, Presisi Tanpa Kompromi',
      description: 'Layanan konstruksi menyeluruh mulai dari pekerjaan struktur dasar, dinding, finishing arsitektural, hingga renovasi menyeluruh. Kami menerapkan standar kerja ketat dengan pemilihan material teruji untuk iklim pesisir dan tropis Bali.',
      capabilities: [
        'Pembangunan Baru Villa & Rumah Tinggal',
        'Renovasi & Penguatan Struktur Bangunan',
        'Pekerjaan Dinding, Plesteran Khusus & Batu Alam',
        'Manajemen Pelaksanaan Lapangan & Kontrol Mutu',
      ],
      note: 'Spesifikasi teknis & detail lingkup kerja disesuaikan berdasarkan dokumen teknis proyek.'
    },
    {
      id: 'interior',
      number: '02',
      title: 'Desain & Pengerjaan Interior',
      category: 'Interior',
      subtitle: 'Harmoni Material, Kenyamanan Fungsional',
      description: 'Pengerjaan interior kustom yang menyatukan estetika modern dengan material alami bernuansa hangat. Dari pembuatan built-in furniture presisi, panel kayu, partisi arsitektural, hingga penataan tata ruang yang ergonomis dan elegan.',
      capabilities: [
        'Custom Built-In Cabinetry & Loose Furniture',
        'Interior Fit-Out untuk Hunian & Villa',
        'Aplikasi Material Alami (Kayu Jati, Batu, Linen)',
        'Detail Finishing Presisi & Tata Cahaya Terintegrasi',
      ],
      note: 'Layanan konsultasi desain interior dan paket turnkey memerlukan konfirmasi lingkup proyek.'
    }
  ] as ServiceItem[],

  projects: [
    {
      id: 'proj-1',
      title: 'The Uluwatu Cliff Villa',
      category: 'Residential',
      location: 'Uluwatu, Bali',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
      aspectRatio: '16/10',
      scope: 'Pembangunan Konstruksi & Custom Interior',
      description: 'Struktur beton ekspos berpadu dengan aksen kayu ulin dan kolam renang refleksi menghadap cakrawala samudra.',
      isPlaceholder: true, // PLACEHOLDER — representasi visual portofolio arsitektur
    },
    {
      id: 'proj-2',
      title: 'Canggu Serenity Sanctuary',
      category: 'Interior',
      location: 'Canggu, Bali',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85',
      aspectRatio: '4/5',
      scope: 'Bespoke Interior Fit-Out & Joinery',
      description: 'Penataan interior bernuansa wabi-sabi dengan furnitur kustom kayu jati lokal dan dinding plester bertekstur pasir hangat.',
      isPlaceholder: true,
    },
    {
      id: 'proj-3',
      title: 'Lovina Coastal Residence',
      category: 'Residential',
      location: 'Buleleng, Bali',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      aspectRatio: '16/11',
      scope: 'Konstruksi Hunian & Penataan Ruang Terbuka',
      description: 'Arsitektur tropis kontemporer yang mengutamakan ventilasi silang alami dan material batu lokal Buleleng.',
      isPlaceholder: true,
    },
    {
      id: 'proj-4',
      title: 'Ubud Pavilion & Tea Room',
      category: 'Hospitality',
      location: 'Ubud, Bali',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=85',
      aspectRatio: '1/1',
      scope: 'Renovasi Arsitektural & Detail Interior',
      description: 'Transformasi paviliun peristirahatan dengan bukaan kaca tinggi dan detail pengerjaan kayu presisi.',
      isPlaceholder: true,
    },
    {
      id: 'proj-5',
      title: 'Sanur Minimalist Estate',
      category: 'Commercial',
      location: 'Sanur, Bali',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      aspectRatio: '16/9',
      scope: 'Struktur Bangunan & Finishing Arsitektural',
      description: 'Kombinasi travertine hangat, baja struktural ramping, dan interior dapur kustom modern.',
      isPlaceholder: true,
    }
  ] as ProjectItem[],

  approach: [
    {
      step: '01',
      title: 'Diskusi & Konsultasi Awal',
      provisional: true,
      description: 'Mendengarkan aspirasi Anda, menganalisis lokasi di Bali, memahami kebutuhan fungsional ruang, dan menentukan batas anggaran yang realistis.',
    },
    {
      step: '02',
      title: 'Perencanaan & Lingkup Kerja',
      provisional: true,
      description: 'Penyusunan gambar kerja, spesifikasi materialitas (kayu, batu, finishing), serta penyusunan jadwal pelaksanaan konstruksi dan interior yang terukur.',
    },
    {
      step: '03',
      title: 'Eksekusi & Kontrol Mutu',
      provisional: true,
      description: 'Pengerjaan fisik di lapangan oleh tenaga terampil dengan pengawasan teliti pada setiap detail struktural maupun sambungan furnitur presisi.',
    },
    {
      step: '04',
      title: 'Penyerahan & Evaluasi Akhir',
      provisional: true,
      description: 'Pemeriksaan akhir menyeluruh bersama Anda guna memastikan setiap aspek konstruksi dan interior siap dihuni dan difungsikan secara sempurna.',
    },
  ],

  about: {
    badge: 'STUDIO IDENTITY — 05',
    headline: 'Membangun dengan Komitmen, Merancang dengan Kesadaran.',
    quote: 'Keindahan arsitektur tidak lahir dari kemewahan yang berlebihan, melainkan dari ketepatan proporsi, kejujuran material, dan ketelitian dalam setiap sambungan.',
    paragraphs: [
      'MEGA INTERIOR BALI adalah entitas penyedia jasa konstruksi dan pengerjaan interior yang berpusat di Buleleng, Bali. Kami memadukan dedikasi teknis pada kekuatan bangunan dengan kepekaan estetika modern.',
      'Bagi kami, membangun di Bali berarti menghormati iklim, karakter tanah, dan harmoni antara ruang dalam dan alam terbuka. Setiap proyek didekati dengan integritas kerja tanpa kompromi pada kualitas bahan.',
    ],
    pillars: [
      { label: 'FOKUS MATERIAL', desc: 'Pemilihan material alami bermutu tinggi yang tahan terhadap iklim tropis Bali.' },
      { label: 'PRESISI DETAIL', desc: 'Pengerjaan sambungan kayu, finishing acian, dan instalasi dengan standar ketelitian tinggi.' },
      { label: 'KOMUNIKASI TRANSPARAN', desc: 'Pelaporan berkala progres lapangan dan kejelasan estimasi biaya kerja.' },
    ],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Architectural studio and material study in natural daylight',
  },

  contact: {
    headline: 'LET’S DISCUSS WHAT YOU’RE BUILDING.',
    subhead: 'Konsultasikan ide pembangunan villa, renovasi hunian, atau kebutuhan interior Anda bersama MEGA INTERIOR BALI. Kami siap mendengarkan rencana proyek Anda.',
    ctaButton: 'Hubungi via WhatsApp',
    callButton: 'Telepon Langsung',
    phoneFormatted: '0821-4696-3094',
    address: 'V3FH+GWW, Jl. Laksamana-Baktiseraga, Baktiseraga, Kec. Buleleng, Kabupaten Buleleng, Bali 81119',
    note: 'Layanan konsultasi langsung terhubung dengan tim MEGA INTERIOR BALI.',
  }
}

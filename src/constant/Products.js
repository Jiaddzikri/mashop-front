let RupiahFormat = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

export const Products = [
  {
    thumbnail: "/images/legion-1.webp",
    name: "Lenovo Legion Pro 5 16IRX9 83DF003MID Gaming Notebook - Grey ( i9-14900HX / 2x16GB (32GB) / 1TB SSD / RTX4070 / 16  inch WQXGA IPS / Win11 / OHS / M300)",
    price: RupiahFormat.format(32500000),
    description:
      "Processor : Intel® Core™ i9-14900HX \n Memory : 2x 16GB SO-DIMM DDR5-5600 \n Storage : 1TB SSD M.2 2280 PCIe® 4.0x4 NVMe® \n Graphics : NVIDIA® GeForce RTX™ 4070 8GB GDDR6 \n Operating System : Windows® 11 Home + Office Home & Student 2021",
    images: [
      "/images/legion-1.webp",
      "/images/legion-2.webp",
      "/images/legion-3.webp",
      "/images/legion-4.webp",
    ],
    store: "electronicstore",
    store_image: "/images/legion-1.webp",
  },
  {
    thumbnail: "/images/mac-1.webp",
    name: "MacBook Air (M1, 2020)",
    price: RupiahFormat.format(12499000),
    description:
      "• Layar dengan lampu latar LED 13,3 inci \n • Semua model; Baterai lithium-polymer bawaan yang dapat diisi ulang 28,6 watt-jam; Hingga 10 jam untuk menjelajahi web melalui Wi-Fi atau menonton video; Pengisian daya melalui adaptor daya atau USB-C ke sistem komputer; Model Wi-Fi + Cellular; Hingga 9 jam untuk menjelajahi web menggunakan jaringan data selulerProcessor : Intel® Core™ i9-14900HX \n Memory : 2x 16GB SO-DIMM DDR5-5600 \n Storage : 1TB SSD M.2 2280 PCIe® 4.0x4 NVMe® \n Graphics : NVIDIA® GeForce RTX™ 4070 8GB GDDR6 \n Operating System : Windows® 11 Home + Office Home & Student 2021",
    images: ["/images/mac-1.webp", "/images/mac-2.webp", "/images/mac-3.webp"],
    store: "macstore",
    store_image: "/images/mac-1.webp",
  },
  {
    thumbnail: "/images/xiao-1.webp",
    name: "Xiaomi 12 Pro [12GB/256GB/garansi resmi]",
    price: RupiahFormat.format(8499000),
    description:
      "• Pro-grade triple 50MP camera array \n • Leading 4nm Snapdragon 8 Gen 1 5G processor \n • Smart 120W Xiaomi HyperCharge \n • WQHD+ dynamic 120Hz AMOLED display",
    images: [
      "/images/xiao-1.webp",
      "/images/xiao-2.webp",
      "/images/xiao-3.webp",
    ],
    store: "phonestore",
    store_image: "/images/xiao-1.webp",
  },
];

// src/services/mockdb.ts

export const vendorData = [
  {
    slug: "vendor1",
    name: "Vendor One",
    logo: "/images/logos/vendor1-logo.png",
    heroImage: "/images/heroes/vendor1-hero.jpg",
    seo: {
      title: "Vendor One - Premium Products",
      description: "Shop the best products from Vendor One",
      keywords: "vendor1, products, shopping",
    },
    products: [
      {
        id: "1",
        createdAt: "2024-01-01",
        description:
          "High-quality smart speaker with voice assistant capabilities for seamless integration and control.",
        title: "Amazon Alexa Speakers",
        price: 100,
        imgSrc: "/images/Amazon Alexa Speakers.png",
        altText: "amazon-alexa-speakers",
        quantity: 50,
      },
      {
        id: "2",
        createdAt: "2024-02-01",
        description:
          "Portable speaker with powerful sound and Bluetooth connectivity for an enhanced audio experience.",
        title: "JBL Bluetooth Speaker",
        price: 120,
        imgSrc: "/images/JBL Bluetooth Speaker.png",
        altText: "jbl-bluetooth-speaker",
        quantity: 50,
      },
      {
        id: "3",
        createdAt: "2024-03-01",
        description:
          "Premium wireless earbuds with noise cancellation and superior sound quality for immersive listening.",
        title: "Airpod Pro",
        price: 80,
        imgSrc: "/images/Airpod Pro.png",
        altText: "airpod-pro",
        quantity: 50,
      },
      {
        id: "4",
        createdAt: "2024-04-01",
        description:
          "High-performance headphones delivering exceptional audio clarity and comfort for extended use.",
        title: "Headphone",
        price: 1050,
        imgSrc: "/images/Headphone.png",
        altText: "headphone",
        quantity: 50,
      },
      {
        id: "5",
        createdAt: "2024-05-01",
        description:
          "Versatile microphone with wireless connectivity, perfect for karaoke and professional audio recording.",
        title: "Wireless Karaoke Microphone",
        price: 40,
        imgSrc: "/images/Wireless Karaoke Microphone.png",
        altText: "wireless-karaoke-microphone",
        quantity: 50,
      },
      {
        id: "6",
        createdAt: "2024-06-01",
        description:
          "Compact and reliable power source for charging devices on the go with high capacity.",
        title: "Portable Powerbank",
        price: 70,
        imgSrc: "/images/Portable Powerbank.png",
        altText: "portable-powerbank",
        quantity: 50,
      },
      {
        id: "7",
        createdAt: "2024-07-01",
        description:
          "Fast and efficient charger compatible with USB Type-C devices for quick power-ups.",
        title: "Type C Charger",
        price: 20,
        imgSrc: "/images/Type C Charger.png",
        altText: "type-c-charger",
        quantity: 50,
      },
    ],
  },
  {
    slug: "vendor2",
    name: "Vendor Two",
    logo: "/images/logos/vendor2-logo.png",
    heroImage: "/images/heroes/vendor2-hero.jpg",
    seo: {
      title: "Vendor Two - Quality Goods",
      description: "Discover Vendor Two's collection",
      keywords: "vendor2, goods, e-commerce",
    },
    products: [],
  },
];

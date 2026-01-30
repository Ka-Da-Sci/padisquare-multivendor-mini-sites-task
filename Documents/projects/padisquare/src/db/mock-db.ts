// src/services/mockdb.ts

export const vendorData = [
  {
    slug: "classic-nike-store",
    name: "Classic Nike Wears",
    logo: "/images/logos/vendor2-logo.png",
    heroImage: "/images/Nike React Infinity Run.png",
    seo: {
      title: "Classic Nike - Quality Footwears",
      description: "Discover Classic Nike's collection",
      keywords: "nike, footwear, shoes, e-commerce",
    },
    products: [
      {
        id: "1",
        createdAt: "2024-01-05",
        description:
          "Lightweight running shoes designed for comfort, breathability, and everyday performance.",
        title: "Nike Air Zoom Pegasus",
        price: 130,
        imgSrc: "/images/Nike Air Zoom Pegasus.png",
        altText: "nike-air-zoom-pegasus",
        quantity: 60,
      },
      {
        id: "2",
        createdAt: "2024-01-20",
        description:
          "Classic basketball-inspired sneakers offering durability and timeless street style.",
        title: "Nike Air Force 1",
        price: 110,
        imgSrc: "/images/Nike Air Force 1.png",
        altText: "nike-air-force-1",
        quantity: 80,
      },
      {
        id: "3",
        createdAt: "2024-02-05",
        description:
          "Sleek running shoes built with responsive cushioning for smooth daily runs.",
        title: "Nike Revolution 6",
        price: 75,
        imgSrc: "/images/Nike Revolution 6.png",
        altText: "nike-revolution-6",
        quantity: 70,
      },
      {
        id: "4",
        createdAt: "2024-02-18",
        description:
          "Comfortable lifestyle sneakers combining modern design with all-day wearability.",
        title: "Nike Court Vision Low",
        price: 85,
        imgSrc: "/images/Nike Court Vision Low.png",
        altText: "nike-court-vision-low",
        quantity: 65,
      },
      {
        id: "5",
        createdAt: "2024-03-02",
        description:
          "Breathable training shoes designed for gym workouts and high-intensity sessions.",
        title: "Nike Metcon 8",
        price: 140,
        imgSrc: "/images/Nike Metcon 8.png",
        altText: "nike-metcon-8",
        quantity: 50,
      },
      {
        id: "6",
        createdAt: "2024-03-15",
        description:
          "Iconic canvas sneakers delivering a minimalist look with everyday versatility.",
        title: "Nike SB Chron 2 Canvas",
        price: 65,
        imgSrc: "/images/Nike SB Chron 2 Canvas.png",
        altText: "nike-sb-chron-2-canvas",
        quantity: 90,
      },
      {
        id: "7",
        createdAt: "2024-04-01",
        description:
          "Durable skate shoes with reinforced canvas and enhanced board control.",
        title: "Nike SB Charge Canvas",
        price: 70,
        imgSrc: "/images/Nike SB Charge Canvas.png",
        altText: "nike-sb-charge-canvas",
        quantity: 85,
      },
      {
        id: "8",
        createdAt: "2024-04-12",
        description:
          "High-top canvas sneakers inspired by retro basketball style and street fashion.",
        title: "Nike Blazer Mid Canvas",
        price: 105,
        imgSrc: "/images/Nike Blazer Mid Canvas.png",
        altText: "nike-blazer-mid-canvas",
        quantity: 55,
      },
      {
        id: "9",
        createdAt: "2024-05-01",
        description:
          "Ultra-comfortable running shoes with plush cushioning for long-distance runs.",
        title: "Nike React Infinity Run",
        price: 160,
        imgSrc: "/images/Nike React Infinity Run.png",
        altText: "nike-react-infinity-run",
        quantity: 45,
      },
      {
        id: "10",
        createdAt: "2024-05-15",
        description:
          "Modern everyday sneakers designed with breathable materials and a sleek silhouette.",
        title: "Nike Downshifter 12",
        price: 80,
        imgSrc: "/images/Nike Downshifter 12.png",
        altText: "nike-downshifter-12",
        quantity: 75,
      },
      {
        id: "11",
        createdAt: "2024-06-01",
        description:
          "Canvas skate shoes offering flexibility, grip, and classic Nike SB styling.",
        title: "Nike SB Portmore Canvas",
        price: 60,
        imgSrc: "/images/Nike SB Portmore Canvas.png",
        altText: "nike-sb-portmore-canvas",
        quantity: 100,
      },
      {
        id: "12",
        createdAt: "2024-06-18",
        description:
          "Performance running shoes engineered for speed, stability, and lightweight comfort.",
        title: "Nike Zoom Fly 5",
        price: 150,
        imgSrc: "/images/Nike Zoom Fly 5.png",
        altText: "nike-zoom-fly-5",
        quantity: 40,
      },
      {
        id: "13",
        createdAt: "2024-07-05",
        description:
          "Stylish canvas sneakers built for casual wear with a clean, modern aesthetic.",
        title: "Nike Court Legacy Canvas",
        price: 75,
        imgSrc: "/images/Nike Court Legacy Canvas.png",
        altText: "nike-court-legacy-canvas",
        quantity: 85,
      },
    ],
  },
  {
    slug: "katchie-electronics-store",
    name: "Katchie Electronics and Gadgets",
    logo: "/images/logos/vendor1-logo.png",
    heroImage: "/images/gadgets-hero-bg.png",
    seo: {
      title: "Katchie Electronics and Gadgets - Premium Products",
      description:
        "Shop the best products from Katchie Electronics and Gadgets",
      keywords: "Katchie Electronics and Gadgets, products, shopping",
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
      {
        id: "8",
        createdAt: "2024-08-01",
        description:
          "Powerful laptop featuring Apple M-series performance, stunning Retina display, and long-lasting battery life for professionals.",
        title: "Apple MacBook Pro",
        price: 2200,
        imgSrc: "/images/Apple MacBook Pro.png",
        altText: "apple-macbook-pro",
        quantity: 30,
      },
      {
        id: "9",
        createdAt: "2024-08-10",
        description:
          "High-performance tablet with a large display, smooth multitasking, and Apple Pencil support for creativity and productivity.",
        title: "Apple iPad Note 8",
        price: 900,
        imgSrc: "/images/Apple iPad Note 8.png",
        altText: "apple-ipad-note-8",
        quantity: 40,
      },
      {
        id: "10",
        createdAt: "2024-08-20",
        description:
          "Professional-grade camera delivering exceptional image clarity, optical zoom, and advanced photography features.",
        title: "Canon Optic Camera",
        price: 1500,
        imgSrc: "/images/Canon Optic Camera.png",
        altText: "canon-optic-camera",
        quantity: 25,
      },
    ],
  },
];

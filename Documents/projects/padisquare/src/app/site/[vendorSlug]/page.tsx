import { notFound } from "next/navigation";
import { Metadata } from "next";
import fs from "fs/promises";
import path from "path";
// import VendorHeader from '@/components/vendor-header';
// import Hero from "@/components/hero";
// import ProductGrid from "@/components/product-grid"; // Client component wrapper
import VendorSiteHeader from "@/components/vendor-site-header";
import VendorSiteLayoutWrapper from "@/components/vendor-site-layout-wrapper";
import Hero from "@/components/vendor-home/hero";
import ProductGrid from "@/components/vendor-home/products-grid";
import { VendorType } from "@/utils/types";
import { Suspense } from "react";
import Loading from "./loading";
// import NotFound from '@/app/not-found';


async function getVendor(slug: string): Promise<VendorType | undefined> {
  const filePath = path.join(process.cwd(), "src", "data", "vendors.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const vendors: VendorType[] = JSON.parse(jsonData);
  return vendors.find((v) => v.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vendorSlug: string }>;
}): Promise<Metadata> {
  const { vendorSlug } = await params;
  const vendor = await getVendor(vendorSlug);
  if (!vendor) return { title: "Vendor Not Found" };

  return {
    title: vendor.seo.title,
    description: vendor.seo.description,
    keywords: vendor.seo.keywords,
    openGraph: {
      title: vendor.seo.title,
      description: vendor.seo.description,
      images: [vendor.heroImage],
    },
  };
}

export default async function VendorPage({
  params,
}: {
  params: Promise<{ vendorSlug: string }>;
}) {
  const { vendorSlug } = await params;
  const vendor = await getVendor(vendorSlug);

  //   console.log('Generating metadata for vendor:', vendor);

  if (!vendor) {
    notFound();
  }

  return (
    <VendorSiteLayoutWrapper>
      {/* <VendorHeader name={vendor.name} logo={vendor.logo} /> */}
      <VendorSiteHeader />
      {/* <Hero image={vendor.heroImage} /> */}
      <Hero />
      <Suspense fallback={<Loading />}>
        <ProductGrid slug={vendor.slug} />
      </Suspense>
    </VendorSiteLayoutWrapper>
  );
}

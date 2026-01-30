import { notFound } from "next/navigation";
import { Metadata } from "next";
import VendorSiteLayoutWrapper from "@/components/vendor-site-layout-wrapper";
import Hero from "@/components/vendor/hero";
import ProductGrid from "@/components/vendor/products-grid";
import { Suspense } from "react";
import Loading from "./loading";
import { fetchVendor } from "@/services/fetch-vendor";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vendorSlug: string }>;
}): Promise<Metadata> {
  const { vendorSlug } = await params;
  const vendor = await fetchVendor(vendorSlug);
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
  const vendor = await fetchVendor(vendorSlug);

  //   console.log('Generating metadata for vendor:', vendor);

  if (!vendor) {
    notFound();
  }

  return (
    <VendorSiteLayoutWrapper>
      {/* <VendorHeader name={vendor.name} logo={vendor.logo} /> */}
      {/* <VendorSiteHeader /> */}
      {/* <Hero image={vendor.heroImage} /> */}
      <Hero heroImage={vendor.heroImage} catchPhrase={vendor.catchPhrase} />
      <Suspense fallback={<Loading />}>
        <ProductGrid slug={vendor.slug} subCatchPhrase={vendor.subCatchPhrase} />
      </Suspense>
    </VendorSiteLayoutWrapper>
  );
}

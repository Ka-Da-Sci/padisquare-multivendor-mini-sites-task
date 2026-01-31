import MainRootlayoutWrapper from "@/components/main-rootlayout-wrapper";
import VendorPreviewCard from "@/components/vendor-card";
import { fetchVendorsMeta } from "@/services/fetch-vendors-meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://padisquare-multivendor-sites-demo.vercel.app"),
  title: "Padisquare Landing Page - Featured Stores",
  description: "Browse stores from our trusted vendors on Padisquare Multivendor Mini Sites.",
  icons: { icon: "/images/padisquare-logo-without-name.png" },
  openGraph: {
    title: "Padisquare Landing Page - Featured Stores",
    description: "Browse stores from our trusted vendors on Padisquare Multivendor Mini Sites.",
    url: "https://padisquare-multivendor-sites-demo.vercel.app",
    siteName: "Padisquare",
    images: [{ url: "/images/padisquare-logo-without-name.png" }],
  },
};

export default async function HomePage() {
  const vendorMeta = await fetchVendorsMeta();

  const vendorsArray =
    vendorMeta?.length === 0 ? (
      <div
        className={`text-center text-[#7C7C7C] font-poppins font-normal text-base antialiased`}
      >
        No vendor available at this time.
      </div>
    ) : (
      <ul className="grid max-xs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch gap-4 w-full py-8">
        {vendorMeta?.map((vendor) => (
          <VendorPreviewCard key={vendor.slug} vendor={vendor} />
        ))}
      </ul>
    );

  return (
    <MainRootlayoutWrapper>
      <div className="h-full flex flex-col items-center justify-center gap-8 p-4">
        <h1 className="text-3xl md:text-5xl font-poppins font-black mb-8 text-center">
          Pad<span className="text-brand-primary">i</span>Square e-commerce platform
        </h1>
        <div className="w-full antialiased flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-xl md:text-3xl font-poppins font-bold ">
            Featured stores
          </h2>
          <p className="text-base md:text-lg font-montserrat font-medium">
            Browse stores from our trusted vendors
          </p>
        </div>
        {vendorsArray}
        {vendorMeta.length === 0 && (
          <p className="text-gray-500">No vendors available.</p>
        )}
      </div>
    </MainRootlayoutWrapper>
  );
}

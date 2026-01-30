import MainRootlayoutWrapper from "@/components/main-rootlayout-wrapper";
import { fetchVendorsMeta } from "@/services/fetch-vendors-meta";
import Link from "next/link";

export default async function HomePage() {
  const vendorMeta = await fetchVendorsMeta();

  return (
    <MainRootlayoutWrapper>
      <div className="h-full flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-8">
          Welcome to Padisquare Vendor Storefronts
        </h1>
        <p className="text-lg mb-6">
          Select a vendor to view their storefront:
        </p>
        <ul className="space-y-4">
          {vendorMeta.map((vendor) => (
            <li key={vendor.slug}>
              <Link
                href={`/site/${vendor.slug}`}
                className="text-primary hover:underline text-xl"
              >
                {vendor.name.charAt(0).toUpperCase() + vendor.name.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
        {vendorMeta.length === 0 && (
          <p className="text-gray-500">No vendors available.</p>
        )}
      </div>
    </MainRootlayoutWrapper>
  );
}

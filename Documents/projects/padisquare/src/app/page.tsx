// import MainRootlayoutWrapper from "@/components/main-rootlayout-wrapper";

// export const revalidate = 0;

// const Home = () => {
//   return (
//     <MainRootlayoutWrapper>
//       {/* <MainHomepageWrapper /> */}
//       <div>Home page</div>
//     </MainRootlayoutWrapper>
//   );
// };

// export default Home;

import MainRootlayoutWrapper from "@/components/main-rootlayout-wrapper";
import Link from "next/link";

// Optionally fetch all vendor slugs from your mock data
async function getVendorSlugs() {
  // Reuse your fetch logic or hardcode for simplicity
  return ["vendor1", "vendor2"]; // From vendors.json
}

export default async function HomePage() {
  const slugs = await getVendorSlugs();

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
          {slugs.map((slug) => (
            <li key={slug}>
              <Link
                href={`/site/${slug}`}
                className="text-primary hover:underline text-xl"
              >
                {slug.charAt(0).toUpperCase() + slug.slice(1)} Store
              </Link>
            </li>
          ))}
        </ul>
        {slugs.length === 0 && (
          <p className="text-gray-500">No vendors available.</p>
        )}
    </div>
      </MainRootlayoutWrapper>
  );
}

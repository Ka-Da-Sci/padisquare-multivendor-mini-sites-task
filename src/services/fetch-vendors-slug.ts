import { vendorData } from "../db/mock-db";


// Mock API function for fetching vendors slug
export const fetchVendorsSlug = async (): Promise<string[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
    const vendors = vendorData.map((v) => v.slug);
    return vendors ?? [];
  } catch (error) {
    console.error("Fetch vendors slug: Error fetching vendors slug", error);
    throw new Error("Failed to fetch vendors slug");
  }
};

import ProductDetails from "@/components/product-details/product-details";
import VendorSiteLayoutWrapper from "@/components/vendor-site-layout-wrapper";

// Main component for rendering the product page
const Product = () => {
  return (
    // Container for centering and laying out the ProductDetails component
    <VendorSiteLayoutWrapper>
      <div className="w-full mx-auto flex">
        <ProductDetails />
      </div>
    </VendorSiteLayoutWrapper>
  );
};

export default Product;

import { useEffect, useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";
import ProductTile from "../components/product-tile";
import API_BASE from "../config";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts() {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE}/api/products`);
      const data = await response.json();
      console.log("Status of response: ", response.status)
      if (response.ok) {
        setProducts(data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <FidgetSpinner
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length
            ? products.map((productItem) => (
                <ProductTile key={productItem.id} product={productItem} />
              ))
            : null}
        </div>
      )}
    </div>
  );
}

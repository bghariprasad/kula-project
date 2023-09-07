import { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table";
import {
  sortProduct,
  getBrands,
  getProductsByBrand,
  modifyTheProductList,
} from "./utils";
import BrandSelectionFilter from "./components/BrandSelectionFilter";

const colData = ["id", "title", "description", "price"];

export default function App() {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [selectedBrand, setSelectBrand] = useState("");
  const [sort, setSort] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
      setDisplayProducts(data.products);
      setBrandList(getBrands(data.products));
    } catch (error) {
      console.log();
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    const newProduct = modifyTheProductList(
      products,
      "price",
      sort,
      selectedBrand
    );
    console.log("newProduct", sort, selectedBrand, newProduct);
    setDisplayProducts(newProduct);
  }, [sort, selectedBrand, products]);

  const handleSort = () => {
    const order = sort === "ASC" ? "DEC" : "ASC";
    setSort(order);
  };

  const onBrandChange = (brand) => {
    setSelectBrand(brand);
  };

  return (
    <main>
      <h1 className="text-xl font-medium underline text-center">Table</h1>
      <div className="flex flex-row justify-start items-center gap-4 ml-8 mt-4">
        <button className="sort-button" onClick={handleSort}>
          Sort Price {sort}
        </button>
        <BrandSelectionFilter
          brandList={brandList}
          onBrandChange={onBrandChange}
        />
      </div>
      <Table collection={displayProducts} colData={colData} />
    </main>
  );
}

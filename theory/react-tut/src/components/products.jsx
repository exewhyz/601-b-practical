import ProductItem from "./product-item";

const products = [
  { id: 1, name: "Wireless Mouse", price: 100, inStock: true },
  { id: 2, name: "Keyboard", price: 200, inStock: false },
  { id: 3, name: "Monitor", price: 300, inStock: true },
];

function Products() {
  return (
    <div>
      <h1>Products List</h1>
      <div className="products">
        {products.map((value) => {
          return (
            <ProductItem
              key={value.id}
              name={value.name}
              price={value.price}
              inStock={value.inStock}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;

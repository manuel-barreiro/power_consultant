import ProductCard from "./ProductCard"

const ProductGrid = ({products}) => {
  return (

    <div id="Projects"
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

      {products.map((product) => (<ProductCard key={product.id} img={product.img} name={product.name} cat={product.cat} urlName={product.urlName}  />))}
     
    </div>

  )
}

export default ProductGrid
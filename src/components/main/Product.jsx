
'use client';

import ProductCart from '../cartComponent/ProductCart';

export default function Product() {
  return (
    <>
      <section className="grid mx-auto justify-center w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        <ProductCart></ProductCart> 
        <ProductCart></ProductCart> 
        <ProductCart></ProductCart> 
        <ProductCart></ProductCart> 
        <ProductCart></ProductCart> 
        <ProductCart></ProductCart> 
        <ProductCart></ProductCart> 
        <ProductCart></ProductCart> 
      </section>
    </>
  )
}

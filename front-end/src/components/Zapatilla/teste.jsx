/*import React, { useState, useEffect } from 'react';
import { sanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import './Zapatilla.css';
/*const Products = () => {
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        const zapatillaQuery = '*[_type == "Zapatilla"] {title,body,mainImage{asset->{_id,url}alt}}';

        client.fetch(zapatillaQuery).then((data) => {
            setProducts(data);
        });
    }, []);*/
/*const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}


const Zapatilla = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "category"]{
      name,
      slug,
      description,
      image{
        asset->{
          _id,
          url
        },
      },
      alt,
    }`
        )
            .then((data) => setProducts(data))
            .catch(console.error);
    }, []);

    return (
        <>
            <h2 className="head-text">Products</h2>

            <div className="Products-container">
                {products && products.map((category) => (
                    <Zapatilla key={category._id} category={category} />
                ))}

            </div>
        </>
    );
};

export default Zapatilla;*/

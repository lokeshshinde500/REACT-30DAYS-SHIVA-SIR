import { useEffect } from "react";
import { useState } from "react"

export default function Home() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/products")
        .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProduct(data);
           })
    }, [])
    
    function sortAscending() {
        const ascendingData = [...product].sort((e1, e2) => e1.price - e2.price);
        console.log(ascendingData);
        setProduct(ascendingData);
    }

    function sortDescending() {
        const descendingData = [...product].sort((e1, e2) => e2.price - e1.price);
        console.log(descendingData);
        setProduct(descendingData);
    }



    return (<>
        {/* sorting operation */}
        <button type="button" onClick={sortAscending}>Ascending</button>
        <button type="button" onClick={sortDescending}>Descending</button>

        <section className="product-list">
            {
                product.map((v,i) => {
                   return(<div key={i} className="product-item">
                            <img src={v.images[0]} style={{width:"150px" , height:"100px"}}/>
                            <h4>{v.title}</h4>
                            <p><b>Brand :</b> {v.brand}</p>
                            <p><b>Price :</b> {v.price} Rs.</p>
                            <button className="btn">Add to cart</button>
                         </div>)
                })
            }
        </section>
    </>)
};

import { useEffect } from "react";
import { useState } from "react"

export default function Home() {

    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(`http://localhost:8000/products?q=${search}`)
        .then((res) => res.json())
        .then((data) => {setProduct(data) })
    }, [search])
    
    function sortAscending() {
        const ascendingData = [...product].sort((e1, e2) => e1.price - e2.price)
        setProduct(ascendingData)
    }

    function sortDescending() {
         const descendingData = [...product].sort((e1, e2) => e2.price - e1.price)
         setProduct(descendingData)
    }

    // Delete operation
    function handleDelete(itemId) {

        // delete from UI
        const newList = product.filter((v, i) => itemId !== v.id)
        setProduct(newList)
        
        // delete from Api
        fetch(`http://localhost:8000/products/${itemId}`, {
             method:"DELETE"
         })
        .then((data) => {
            alert("item deleted successfully.")
        })

        
    }


    return (<>
        
        {/* searching operation */}
        <div className="input-group">
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}   placeholder="search" />
        </div>


        {/* sorting operation */}
        <button type="button" onClick={sortAscending}>Ascending</button>
        <button type="button" onClick={sortDescending}>Descending</button>

        <section key={1}>
            <div className="container">
                 <div className="row">
                {
                product.map((v,i) => {
                    return (
                        <>
                            <div className="w-4 w-3" >
                                <div key={i} className="product-item">
                                    <img src={v.images[0]} style={{width:"150px" , height:"100px"}}/>
                                    <h4>{v.title}</h4>
                                    <p><b>Brand :</b> {v.brand}</p>
                                    <p><b>Price :</b> {v.price} Rs.</p>
                                    <button className="btn">Add to cart</button>
                                    <button onClick={()=>handleDelete(v.id)} className="deleteBtn" type="button">X</button>
                                </div>
                            </div>
                        </>
                   )
                })
            }
            </div>
           </div>
        </section>
    </>)
};

import { useEffect, useState } from "react"
import Card from './Card'


function Home() {
    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(1)


    useEffect(() => {
        console.log(`http://localhost:8000/posts?_page=${page}&_limit=10`);
        fetch(`http://localhost:8000/posts?_page=${page}&_limit=10`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setProduct(data)
            })
    }, [page])




    return <div  >
        <h1>Home</h1>
        <div>
            <button disabled={page == 1} onClick={() => setPage(page - 1)} >prev </button>
            <button>{page}</button>
            <button disabled={page == (product.length)} onClick={() => setPage(page + 1)} >next</button>
        </div>
            
        {
            product.map((item, i) => <Card  {...item} />)
        }
    </div>
}


export default Home
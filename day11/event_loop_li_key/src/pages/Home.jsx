// 29-04-2024 => topic learned : what is event loop ?, li and keys

import { useEffect, useState } from "react"


function Home() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
       
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    setProduct(data)
                })
    }, [])
    
    const list =  product.map((v,i) => {
                    return <>
                        <li key={v.id}>{v.title}
                            <ul type="square">
                                <li>{ v.body}</li>
                            </ul>
                        </li>
                    </>
                })


    return <>
        <ol >
            {list}
        </ol>
    </>
}

export default Home;
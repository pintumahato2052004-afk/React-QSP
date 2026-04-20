import { useEffect, useState } from "react";


const Product = ()=>{
    const[allProducts, setAllProducts] = useState([]);

    //to callproduct API
    async function getProducts(){
        try{
            let resp = await fetch ("https://dummyjson.com/producst");
            let data = await resp.json();
            console.log(data.Product);
            setAllTodos(data.todos);
        }catch(err){
            console.log(err.response);
        }
    }
    useEffect(()=>{
        getProducts();//invokes during mounting phase
    }, []);

    return(
        <div>
            <h1>All Products</h1>

            {allProducts.length === 0 ?(
                <>
                <p></p>
                </>
            )

            }


        </div>
    )
}


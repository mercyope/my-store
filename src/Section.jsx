import { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";


const api = 'https://dummyjson.com/products/categories';
function Section() {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState("")
    const fetchproducts = async () => {
        try {
            setError("")
            setLoader(true)  //loading will start from here 
            const resposne = await fetch(api)
            if (!resposne.ok) {
                throw new Error("something happened")
            }
            const data = await resposne.json()
            setData(data)
            setLoader(false)  // remove the true 
            setError("")
            console.log(data)
        } catch (err) {
            console.log(err.message)
            setError(err.message) /// set the error state 
        }
    }
    useEffect(() => {
        fetchproducts()
    }, []);
    return (
        <div className="container ">   
        
            {/* {!loader && <CategoriesList categories={ data} />} */}
        </div>
    )
}

export default Section;
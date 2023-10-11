import { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";
import List from "../components/List";

const api = "https://dummyjson.com/products/search?q=";
function SearchItems() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [listdata , setLisdata ]= useState([])
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const fetchOneData = async (product) => {
    try {
      setError("");
      const response = await fetch(`${api}${product}`);
      if (!response.ok) throw new Error("something happen");
      const data = await response.json();
      setData(data.products);
      console.log(data.products);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };
  const searchButton = () => {
    fetchOneData(search);
  };

  useEffect(() => {
    async function searchinfo() {
      const res = await fetch(`${api}${search}`);
      const data = await res.json();
      console.log(data.products);
      setLisdata(data.products)
    }
    if(search.length < 3){
        setLisdata([])
        setError("")
    }
    searchinfo();
  }, [search]);

  return (
    <div className="container ">
      <h1>Search Item</h1>

      <div>
        <input
          className="form-control"
          placeholder="find any products"
          onChange={handleSearch}
          value={search}
        />
        <button
          onClick={searchButton}
          className="btn btn-success  mt-3 fw-bold"
        >
          search
        </button>
      </div>
    <div>
        { loader && <h3 className="text-center fw-bold ">finding product</h3>}
        {!loader && <List list={listdata}/>}
    </div>


      {/* <div>
        {loader && <h2>Find product......</h2>}

        {!loader && <List list={data} />}
      </div> */}
    </div>
  );
}

export default SearchItems;

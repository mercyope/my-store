import { Link } from "react-router-dom";





function CategoriesList({categories}) {
    return ( 
        <div className="container">

            {categories.map((categories, index) => {
                return ( 
                    <div key={categories}>
                        <Link className="pt-3" to={`/categories/${categories}`}>{categories}</Link>
                    </div>
                )
            })}

        </div>
    )
}

export default CategoriesList;
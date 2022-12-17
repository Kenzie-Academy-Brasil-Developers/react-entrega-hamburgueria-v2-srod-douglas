import { useContext, useEffect, useState } from "react"
import { DashboardContext } from "../../contexts/Dashboard"
import { idataProducts } from "../../contexts/Dashboard/types"
import { Card } from "../Card"

export const ListCards = () => {

    const { search, dataProducts } = useContext(DashboardContext)
    const [searchedProducts, setSearchedProducts] = useState([] as idataProducts[])

    useEffect(() => {
        if(search !== undefined){
            const searchIncludes = dataProducts.filter((product) => 
            product.name.toLowerCase().includes(search.toLocaleLowerCase()))
            setSearchedProducts(searchIncludes)
        }
    }, [search])

    if(searchedProducts.length === 0){
        return(
            <ul>
                {
                    <Card products={dataProducts} />
                }
            </ul>
        )
    }else{
        return(
            <ul>
                {
                    <Card products={searchedProducts} />
                }
            </ul>
        )
    }
}
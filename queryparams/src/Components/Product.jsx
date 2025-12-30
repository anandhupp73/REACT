import { useLocation } from 'react-router-dom'

export default function Product(){
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    console.log(params)

    const id = params.get('id')
    console.log(id)
    return(
        <>
            <p>Product id : {id} </p>
        </>
    )
}
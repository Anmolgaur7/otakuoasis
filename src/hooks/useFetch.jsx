import React,{useState} from 'react'

const useFetch = () => {
    const [state, setstate] = useState(null)
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(null)
    const [refetch, setrefetch] = useState(false)
    const request = async (url, options) => {
        const response = await fetch(url, options)
        const data = await response.json()
        setstate(data)
        setloading(false)
        seterror(null)
    }
    return { state, loading, error, request }

}

export default useFetch

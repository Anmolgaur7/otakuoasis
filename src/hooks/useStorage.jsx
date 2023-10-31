import React from 'react'
import { useState } from 'react'

const useStorage = (key) => {
const [state, setstate] = useState(localStorage.getItem(key) )

const setstorage = (value) => {
    localStorage.setItem(key, value)
    setstate(value)
}
}
export default useStorage

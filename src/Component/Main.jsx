import React from 'react'
import Card from './Card' 
import data from '../Data/response'
const Main = () => {

    const dataEle = data;
    console.log(data)
    return (
        <div className='container'>
            <Card />
        </div>
    )
}
export default Main;
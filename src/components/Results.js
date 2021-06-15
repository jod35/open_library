import React from 'react'
import Result from './Result'


const Results=({list})=>{

    return(
        <div className="results">

            {
                list.map((item,index)=>{
                    return <Result title={item.title} key={index}/>
                })
            }
        </div>
    )
}


export default Results
import React from 'react'
import Result from './Result'


const Results=({list})=>{

    return(
        <div className="results">

            {
                list.map((item,index)=>{
                    return <Result 
                    title={item.title} 
                    publish_year={item.publish_year}
                    author_name={item.author_name}
                    publisher={item.publisher}
                    subject={item.subject}
                    key={index}/>
                })
            }
        </div>
    )
}


export default Results
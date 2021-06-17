import React from 'react'


const Result=({title,
                publish_year,
                author_name,
                subject,
                publisher,
                ibsn
            })=>{
            
    const cover_image=`http://covers.openlibrary.org/b/isbn/${ibsn}-M.jpg`

    return (
        <div className="result">
            <img src={cover_image} alt="absent"/>
            <h3>{title}</h3>
            <p>By <strong>{author_name}</strong></p>
            <p><small>{publish_year}</small></p>
            <p><strong>{publisher}</strong></p>
        </div>
    )
}

export default Result
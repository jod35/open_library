import React from 'react'


const SearchForm=({onSearch,search,onInput})=>{

 


    return (
        <div className="search-form">
            <form onSubmit={onSearch}>
                <input type="text" value={search} onChange={onInput}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchForm
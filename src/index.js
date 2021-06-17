import React ,{useState}from 'react'
import ReactDOM from 'react-dom'
import Results from './components/Results'
import SearchForm from './components/SearchForm'


const App = ()=>{
    const [searchTerm,setsearchTerm]=useState('');
    const [results,setResults]=useState([]);



    const searchBook=(e)=>{
        console.log(searchTerm)


        const query=searchTerm;

        let url=`http://openlibrary.org/search.json?q=${query}`

        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            setResults(data.docs)
            console.log(data.docs)
        })

        .catch(err=>console.log(err))

        e.preventDefault()
    }


    const onInput=(e)=>{

        setsearchTerm(e.target.value)
    }


    return(
        <div className="app">
            <h1>Alexandria</h1>
            <SearchForm onSearch={searchBook} search={searchTerm} onInput={onInput}/>
            <p>Searching for: <strong>{searchTerm}</strong> </p>
            <p>Results: {results.length}</p>
            <Results list={results}/>
        </div>
    )
}


ReactDOM.render(<App/>,document.querySelector('#root'));
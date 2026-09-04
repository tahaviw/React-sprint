import { useState } from "react";

function SearchBar() {
    const [query, setQuery] = useState("")

    return(
        <div>
            <input 
                type="text"     
                value={query}   
                onChange={(e) => setQuery(e.target.value)}  
                placeholder="Search..."
            />
            <p>You Searched: {query}</p>
        </div>
    )    
}

export default SearchBar
import { React, useState } from 'react';

function Search(props) {

    let [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <div className="search-container">
            <input type="text" placeholder="Search up a MoBie" value={text} onKeyDown={(e) => {if(e.key === "Enter") { props.onSearch(text) }}} onChange={(e) => handleChange(e)}/>
            <button onClick={() => props.onSearch(text)}>Search</button>
            </div>
        </>
    )

}

export default Search;
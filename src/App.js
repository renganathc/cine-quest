import React, { useEffect, useState } from 'react';
import Card from './Card';
import Search from './Search.jsx';
import "./index.css";
import Header from './Header.jsx';

function App() {

    //9c71b8d9

    let [x, setX] = useState([]);

    const API = "http://www.omdbapi.com/?apikey=9c71b8d9";

    let count = 0;

    let [search_status, setStatus] = useState("");

    const dispMovie = async (title) => {

        setX([]);
        count = 0;
        setStatus("Searching...");


        let response = await fetch(`${API}&s=${title}`);
        let data = await response.json();
        let results = data.totalResults;
        let pages = Math.floor(results / 10) + 1;
        results = results % 10;

        console.log(data);

        let k = 1;

        while (pages > 1) {
            response = await fetch(`${API}&s=${title}&page=${k++}`);
            data = await response.json();

            for (let i = 0; i < 10; i++) {

                if (data.Search[i].Poster == "N/A") {
                    continue;
                }

                setX(x => [...x, data.Search[i]]);
                count++;
                setStatus(null);
            }

            pages--;

            if (k>5) {
                break;
            }
        }

        response = await fetch(`${API}&s=${title}&page=${k}`);
        data = await response.json();

        for (let i = 0; i < results; i++) {

            if (data.Search[i].Poster == "N/A" || data.Search[i].Type == "game") {
                continue;
            }

            setX(x => [...x, data.Search[i]]);
            count++;
            setStatus(null);
        }

        if (count === 0) {
            setStatus("No Movies")
        }
  
        console.log(count);
        
    }   

    useEffect(() => {
        //dispMovie("ulk");
    }, []);

    return(
        <>
            <Header/>
            <h4 className="app-name">Cine Quest</h4>
            <Search onSearch={(x) => dispMovie(x)}/>

            <p className="no-r-f">{search_status}</p>

            <div className="movie-list">
                {x.map((i) => <Card i = {i} />)}
            </div>
        </>
    )
}

export default App;
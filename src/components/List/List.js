import {Item} from "components/Item";
import {movie} from "api/apiservice";
import {useEffect, useState} from "react";
import axios from "axios";

export const List = () => {
    const [data, setData] =  useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

        getData();
    },[])


    async function getData() {
        await axios("https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/movies-coming-soon.json")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <div className="container__content">

            {data.map((item, index) => (
                <Item {...item} ></Item>
            ) )}

        </div>
    )
}


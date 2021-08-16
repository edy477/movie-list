import {useState, useEffect} from "react";
import {List} from "components/List";
import axios from 'axios';

export const Home = () => {
    return (
        <div className="container">
            <List/>
        </div>
    )
}


import {useState,useEffect, memo} from "react";
import {getAvg} from "utils/getaverage";

export const Item = memo(({imdbRating,actors,contentRating,id,title,year,ratings,posterurl,duration,storyline,genres,releaseDate}) => {


    return (
        <div className="movie">
            <div className="movie__poster">
                <img className="movie-image" src={posterurl}/>
            </div>
            <div className="movie__content">
                <h1 className="movie-title">{title}</h1>

                <div className="movie__content--subsection">
                    <span className="content-title"> {contentRating} / {year} / {duration} /</span>

                    {genres.map(item => <span> {item} </span>)}

                </div>
                <span className="release-date">Release Date: {releaseDate}</span>
                <div className="movie__content--summary">
                    <h2 className="movie-summary">Summary</h2>
                    <p className="movie-storyline">{storyline}</p>

                    <div className="movie-actors">
                        {actors.map(item => <span> {item}, </span>)}
                    </div>


                    <div className="movie-rating">
                        <span>IMDB: {imdbRating}</span>
                        <span> Avg rating: {getAvg(ratings)} </span>
                    </div>
                </div>

            </div>

        </div>
    )
})

import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here


class LatestMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            reviews: []
        }
    }
    render() {
        return (
            <div
            className = "latest-movie-reviews"
            >
                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
    componentDidMount(){
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=43IaZZdh2fywrapt9XSS3BQpVIlLzOKr")
        .then(res => res.json())
        .then(res => this.setState({ reviews: res.results}))
    }

}

export default LatestMovieReviewsContainer;

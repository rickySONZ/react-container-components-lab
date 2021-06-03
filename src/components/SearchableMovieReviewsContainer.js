import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here


class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            searchTerm: "",
            reviews: []
        }
    }
    render() {
        return (
            <div>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }

    componentWillMount(){
        fetch(URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(data => this.setState({reviews: data.results}))
    }
}

export default SearchableMovieReviewsContainer;

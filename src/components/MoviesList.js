import React from 'react'
import axios from 'axios'

class MoviesList extends React.Component{
    constructor(){
        super()
        this.state = {                                  
               movies:[]
        }
    }

    componentDidMount() {
        axios.get('https://wookie.codesubmit.io/movies', {
            headers : {
                'Authorization': 'Bearer Wookie2019'
            }
            })
            .then((response)=> {
               console.log("data", response.data.movies)
               const movies=response.data.movies
               this.setState({movies})
            })
            .catch((err)=> {
            console.log(err)
            })
    }
    
    render(){ 
        return (
            <div>
                { this.state.movies.map(movie =>{
                        return  (
                            movie.poster)
                    })
                }
                
            </div>
        )
    }
    
}

export default MoviesList
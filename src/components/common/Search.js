import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import Loading from '../common/Loading';
import './Search.css';


class Search extends React.Component{

    constructor(){
        super();
        
        this.state ={
            searchQuery: "",
            loading: false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const searchQuery = event.target.value;
        
        this.setState({searchQuery});
        
        //if searchQuery isnt present, dont send request to serve
        if(!searchQuery){
            return '';
        }
        this.setState({loading:true});
        fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
        .then(handleResponse)
        .then((result) => {
            console.log(result);
            this.setState({ loading:false});

        });
    }

    render() {
        const { loading } = this.state;
        return (
            <div className="Search">
                <span className="Search-icon" />
                    <input
                    className="Search-input"
                    type="text"
                    placeholder="Currency name"
                    onChange={this.handleChange} />
                {loading &&
                <div className="Search-loading">
                <loading 
                width ="12px"
                height ="12px"
                />
                </div>}
            </div>
        );
    }
}


export default Search;
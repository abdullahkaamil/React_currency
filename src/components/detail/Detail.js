import React from 'react';
import { handleResponse , renderChangePercent} from '../../helpers';
import Loading from '../common/Loading';
import { API_URL } from '../../config';
import './Detail.css';

class Detail extends React.Component{

    constructor(){
        super();

        this.state = {
            currency: {},
            loading: false,
            error: null,
        };
    }
    componentDidMount(){
        const currencyId = this.props.match.params.id;

        fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
        .then(handleResponse)
        .then((currency) => {
            // console.log('currency', currency);
            this.setState({
                loading: false,
                error: null,
                currency,
            })
        })
        .catch((error => {
        console.log('error', error);            
        }))
    }

    render(){
        const {loading, error, currency} = this.state;
console.log('currency', currency);
        //render only loading component if loading state is set o true
        if (loading){
            return <div className="loading-container">
            <Loading/>
            </div>
        }
        //render error message
        if(error){
            return <div className="error">{error}</div>
        }
        return (
            <div className="Detail">
                <h1 className="Detail-heading">
                    {currency.name} ({currency.symbol})
                </h1>
                <div className="Detail-container">
                    <div className="Detail-item">
                        Price <span className="Detail-value">$ {currency.price} </span>
                    </div>
                    <div className="Detail-item">
                        Rank <span className="Detail-value">{currency.rank} </span>
                    </div>
                    <div className="Detail-item">
                        24H Change <span className="Detail-value">{renderChangePercent(currency.percentChange24h)} </span>
                    </div>

                    <div className="Detail-item">
                        <span className="Detail-title">Market cap</span>
                        <span className="Detail-dollar">$</span>
                        {currency.marketCap}
                    </div>

                    <div className="Detail-item">
                        <span className="Detail-title">24H volume</span>
                        {currency.volume24h}
                    </div>

                    <div className="Detail-item">
                        <span className="Detail-title">Total supply</span>
                        {currency.totalSupply}
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;

import React from 'react';
import './pagination.css';

const Pagination = () => {
    return (
        <div className="Pagination">
            <button className="Pagination-button" >
            &larr;
            </button>
        
            <button className="Pagination-button" >
            &rarr;
            </button>
        </div>
    );
}

export default Pagination; 
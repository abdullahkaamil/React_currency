import React from 'react';
import './pagination.css';
import PropTypes from 'prop-types';

const Pagination = (props) => {
    const {page, totalPages, handlePaginationClick} = props;
    return (
        <div className="Pagination">
            <button 
            onClick={() => handlePaginationClick('prev')}
            className="Pagination-button"
            disabled={page <=1}
            >
            &larr;
            </button>
        
            <span className="Pagination-info">
            page <b> {page}</b> of <b> {totalPages}</b>
            </span>

            <button
            onClick={() => handlePaginationClick('next')}
            className="Pagination-button"
            disabled={page >= totalPages}
            >
            &rarr;
            </button>
        </div>
    );
}
// testing proptypes
Pagination.propTypes = {
    totalPages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,    
    handlePaginationClick: PropTypes.func.isRequired,
};

export default Pagination; 
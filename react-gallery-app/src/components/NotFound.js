import React from 'react';

//displays if no results are found in the search function
const NotFound = (props) => {
    return (
        <div className='not-found'>
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
        </div>
    )
};

export default NotFound;
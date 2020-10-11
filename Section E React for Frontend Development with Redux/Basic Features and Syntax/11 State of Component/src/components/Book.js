import React from 'react';

const Book = (props) => {
    return (
        <div>
            <h3>{props.bookName}</h3>
            <h4>{props.writer}</h4>
        </div>
    );
};

export default Book;
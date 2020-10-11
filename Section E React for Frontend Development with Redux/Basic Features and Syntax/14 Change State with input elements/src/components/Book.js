import React from 'react';

const Book = (props) => {
    return (
        <div>
            <h3 onClick={props.change}>{props.bookName}</h3>
            <h4>{props.writer}</h4>
        </div>
    );
};

export default Book;
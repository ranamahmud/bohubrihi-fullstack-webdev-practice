import React from 'react';

const Book = (props) => {
    return (
        <div>
            <h3 onClick={props.change}>{props.bookName}</h3>
            <h4>{props.writer}</h4>
            <input type="text" name="" id="" onChange={props.inputName} value={props.bookName} />
        </div>
    );
};

export default Book;
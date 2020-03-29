import React from "react";


const Book = ({title, author,summary,isbn}) =>{
    return(
        <div>
            <h1>
                {title}
            </h1>
            <h2>
                Author:
            </h2>
            <h3>{author}</h3>
            <h2>
                Summary:
            </h2>
            <h3>{summary}</h3>
            <h2>
                Isbn: {isbn}
            </h2>

        </div>
    );
}

export default Book;
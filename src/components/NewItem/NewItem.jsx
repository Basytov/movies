import React from 'react';
import MainContent from '../main-content/MainContent';

const NewItem = ({ moviesData, deleteItem }) => {
    return (
        <>
            {moviesData.map((item) => {
                return (
                  <MainContent
                    deleteItem={deleteItem}
                    movies={moviesData}
                        key={item.id}
                        movie={item}
                    title={item.title}
                    rating={item.rating}
                    url={item.url}
                  />
                );
           })}
        </>
    )
};

export default NewItem;
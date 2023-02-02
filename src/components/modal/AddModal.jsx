import React, { createRef } from 'react';
import { useState } from 'react';
import Modal from './Modal';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';



const AddModal = ({ pushMovie, AddMovieHandler }) => {
  const [cancelModal, setCancelModal] = useState(false);
  const movieItem = createRef();
  const imgItem = createRef();
  const ratingItem = createRef();

  const CancelModalHandler = () => {
    setCancelModal((prevSate) => !prevSate);
  };

  const addHandler = (e) => {
    e.preventDefault();

    const title = movieItem.current.value;
    const rating = ratingItem.current.value;
    const url = imgItem.current.value;

    if (title && url && rating) {
      const objectMovies = {
        title,
        url,
        rating,
        id: Math.random(),
        };
        pushMovie(objectMovies)
         
        AddMovieHandler(false)
    }
  };
  return (
    <>
      {!cancelModal ? (
        <Modal onClose={CancelModalHandler}>
        
            <Input labelName="Movie Title" inputType={"text"} ref={movieItem} />

            <Input labelName="ImgUrl" inputType={"url"} ref={imgItem} />

            <Input
              labelName="Movie Rating"
              inputType={'number'}
              ref={ratingItem}
            />

            <Button text="Cancel" onClick={CancelModalHandler} color="red" />

            <Button onClick={addHandler} text="ADD" color="blue" />
       
        </Modal>
      ) : null}
    </>
  );
};

export default AddModal;


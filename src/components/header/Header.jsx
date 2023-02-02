import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import AddModal from '../modal/AddModal';
import Button from '../UI/Button/Button';

const Header = ({ pushMovie }) => {
  const [AddMovie, setAddMovie] = useState(false);

  const AddMovieHandler = () => {
    setAddMovie((prevState) => !prevState);
  };
  return (
    <>
      {AddMovie ? (
        <AddModal
          pushMovie={pushMovie}
          AddMovieHandler={AddMovieHandler}
          onCancel={AddMovieHandler}
        />
      ) : null}
      <StyledHeader>
        <StyledFavoriteMovies>Favorite Movies</StyledFavoriteMovies>
  <Button text="Add Movie" onClick={AddMovieHandler}/>
      </StyledHeader>
    </>
  );
};

export default Header;


const StyledHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: #08085a;
  padding: 12px;
  margin-bottom: 16px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`


const StyledFavoriteMovies = styled.p`
  font-size: 27px;
  color: #fffffff8;
`

import React from 'react';
import styled from 'styled-components';

const Button = ({color, text, onClick, ...rest}) => {
    return (
        <ButtonStyled style={{bacgroundColor: `${color}`}} onClick={onClick} {...rest}>
    {text}
        </ButtonStyled>
    );
};

export default Button;

const ButtonStyled = styled.button`
    color: #ece6f7;
    font-size: 15px;
    background-color: #2b0665;
    width: 90px;
    height: 30px;
    border-radius: 15px;
`
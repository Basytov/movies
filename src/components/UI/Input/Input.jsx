import React from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';

const Input = forwardRef(
    ({id, labelName, inputType, value, ...rest} , ref) => {
    return (
        <div>
            <label htmlFor={id}>{labelName}</label>
            <StyledInput type={inputType} id={id} {...rest} ref={ref} />
        </div>
    );
}
)
export default Input;


const StyledInput = styled.input`
  width: 100%;
  border: 2px solid ;
  height: 20px;
  margin: 0.5rem 0;
`;
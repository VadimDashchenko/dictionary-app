import React from 'react';
import styled from '@emotion/styled';

interface IInput {
    data: string
    handleChange: (elem: string) => void
}

const InputBlock = styled.input`
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 20px;
  outline: none;
`

const Input = ({data, handleChange}: IInput) => {
    return (
        <InputBlock value={data} type="text" maxLength={1} onInput={(e) => handleChange(e.currentTarget.value)} />
    )
}

export default Input;
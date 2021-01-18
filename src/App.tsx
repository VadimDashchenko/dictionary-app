import React, { useState } from 'react';
import {observer} from 'mobx-react-lite';
import words from 'an-array-of-english-words';
import dictionary from "./store/Dictionary";
import Input from "./components/Input";
import styled from '@emotion/styled';

const AppDictionary = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
`

const App = observer(() => {
  const [string, setString] = useState('');

  const stringStart = (str?: string) => {
    let result: Array<string> = [];
    words.map(d => {
      if(d.startsWith(str!)) {
          result.push(d);
      }
    })
   dictionary.startWord(result);
  };

  const stringEnd = (str?: string) => {
      let result: Array<string> = [];
      words.map(d => {
          if(d.endsWith(str!)) {
              result.push(d);
          }
      })
      dictionary.endWord(result);
  }

  const findDouble = (str?: string) => {
      let result: Array<string> = [];
      words.map(d => {
          let double = str!+str!;
          if(d === double) result.push(d)
      })
      dictionary.findDoubleLetter(result);
  }

  const findInAll = (str?: string) => {
      let result: Array<string> = [];
      words.map(d => {
          const splt = d.split('');
          splt.map(d => {
              d === str && result.push(d)
          })
      })
      dictionary.findInAll(result);
  }

  const handleChange = (str: string | undefined) => {
      setString(str!);
      if(!str) dictionary.clearInAll();
      else {
          stringStart(str.toLowerCase());
          stringEnd(str.toLowerCase());
          findInAll(str.toLowerCase());
          findDouble(str.toLowerCase());
      }
  }

  return (
    <AppDictionary>
        <h2>Enter any letter</h2>
      <Input data={string} handleChange={handleChange} />
      <InputBlock>
        <p>{`${dictionary.startString.length} words start with the letter ${string}`}</p>
        <p>{`${dictionary.endString.length} words end with the letter ${string}`}</p>
        <p>{`${dictionary.inAll.length} times the letter ${string} appear in the dictionary`}</p>
        <p>{`${dictionary.doubleLetter.length} words have the same letter repeated in conjunction`}</p>
      </InputBlock>
    </AppDictionary>
  );
});

export default App;

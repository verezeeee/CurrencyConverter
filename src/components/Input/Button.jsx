import { useState } from "react";
import React from "react";
import { NumberInput, NumberInputField } from "@chakra-ui/react";

const MInput = () => {
  const format = (val) => `$ ` + val;
  const parse = (val) => val.replace(/^\$/, "");
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <NumberInput
        size={'lg'}
        onChange={(valueString) => setInputValue(parse(valueString))}
        value={format(inputValue)}
        color={'#fff'}
        w={303.33}
        style={{
            height: '60px'
        }}
      >
        <NumberInputField/>
      </NumberInput>
    </>
  );
};

export default MInput;

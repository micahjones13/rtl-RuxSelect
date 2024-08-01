import "./App.css";
import "@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css";

import { RuxInput, RuxOption, RuxSelect } from "@astrouxds/react";

import { useState } from "react";

function App() {
  const [selectedVal, setSelectedVal] = useState<string | string[] | undefined>(
    "1"
  );
  function handleChange(e: Event) {
    const el = e.target as HTMLRuxSelectElement;
    setSelectedVal(el!.value);
  }

  return (
    <>
      <div>
        <p>Hello World</p>
      </div>
      <RuxSelect
        data-testid="select-menu"
        value="1"
        onRuxchange={(e) => {
          handleChange(e);
        }}
        label="Select"
        name="test-name"
      >
        <RuxOption value="1" label="One"></RuxOption>
        <RuxOption value="2" label="Two" data-testid="option"></RuxOption>
      </RuxSelect>
      <div data-testid="result">Selected option: {selectedVal}</div>
      <br />
      <RuxInput data-testid="input" label="Input Time"></RuxInput>
      <br />
      <label>Native Select</label>
      <select>
        <option value="1">One</option>
        <option value="2">Two</option>
      </select>
    </>
  );
}

export default App;

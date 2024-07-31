import "./App.css";
import "@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css";

import { RuxOption, RuxSelect } from "@astrouxds/react";

function App() {
  function handleChange(e: Event) {
    console.log("change handleded: ", e);
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
      >
        <RuxOption value="1" label="One"></RuxOption>
        <RuxOption value="2" label="Two"></RuxOption>
      </RuxSelect>
      <br />
      <select>
        <option value="1">One</option>
        <option value="2">Two</option>
      </select>
    </>
  );
}

export default App;

/* eslint-disable */
import "./App.css";

import { RuxOption, RuxSelect } from "@astrouxds/react";

function SelectMenuTest(props: any) {
  return (
    <>
      <div>
        <p>Hello World</p>
      </div>
      <RuxSelect
        data-testid="select-menu-test"
        value="1"
        onRuxchange={(e) => {
          props.handleChange(e);
        }}
        label="Select"
        name="test-name"
      >
        <RuxOption value="1" label="One"></RuxOption>
        <RuxOption value="2" label="Two" data-testid="option"></RuxOption>
      </RuxSelect>
    </>
  );
}

export default SelectMenuTest;

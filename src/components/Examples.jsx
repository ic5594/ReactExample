import { EXAMPLES } from "../data";
import { useState } from "react";
import TapButton from "./TapButton.jsx";
import Section from "./Section.jsx";
import Taps from "./Taps.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleClick = (selectedButton) => {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  };

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section id="examples" title="Examples">
      <Taps
        buttonsContainer="menu"
        buttons={
          <>
            <TapButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TapButton>
            <TapButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              Jsx
            </TapButton>
            <TapButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TapButton>
            <TapButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TapButton>
          </>
        }
      >
        {tabContent}
      </Taps>
    </Section>
  );
}

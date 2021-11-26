import * as React from 'react';
import { createContext } from 'react';
import styles from "./index.module.css";

import { useTextArea } from "./textarea/index.js"

const UI = ({children}) => {
  const [textArea, setContent] = useTextArea();

  return (
    <>
      {textArea}
      <ContentContext.Provider value={setContent}>
        {children}
      </ContentContext.Provider>
    </>

  );
}

const ContentContext = createContext(() => { return; });
export { ContentContext };

export default UI;

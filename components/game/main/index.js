import * as React from 'react';

import Map from "../map/index.js"
import UI from "../ui/index.js"

const Main = (props) => {

  return (
    <div>
      <UI>
        <Map rows={10} cols={20} />
      </UI>
    </div>
  );
}

export default Main;

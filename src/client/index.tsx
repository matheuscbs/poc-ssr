import React from "react";
import ReactDOM from "react-dom";

const App = () => <div>Minha App SSR com React</div>;

ReactDOM.hydrate(<App />, document.getElementById("app"));

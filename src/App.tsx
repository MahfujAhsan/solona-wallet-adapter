import { FC } from "react";
import Context from "./components/Context";
import Content from "./components/Content";
require("./App.css");
require("@solana/wallet-adapter-react-ui/styles.css");

const App: FC = () => {
  return (
    <Context>
      <Content />
    </Context>
  );
};

export default App;

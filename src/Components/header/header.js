import FullScreenVideo from "../Ui/FullScreenVideo/FullScreenVideo";
import FastSearchForm from "../fastSearchForm/fastSearchForm";
import "./header.css";

const header = () => {
  return (
    <div>
      <header>
        <FullScreenVideo />
        <FastSearchForm />
      </header>
    </div>
  );
};

export default header;

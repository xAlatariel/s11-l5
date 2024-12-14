import MainView from "./MainView";
import Playerbar from "./Playerbar";

const MainContainer = () => {
  return (
    <div className="d-flex flex-column mainContainer">
      <MainView />
      <Playerbar />
    </div>
  );
};

export default MainContainer;
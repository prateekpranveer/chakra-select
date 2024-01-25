import "./App.css";
import BasicSelect from "./components/BasicSelect";
import SelectWithDifferentAppearances from "./components/SelectWithDifferentAppearences";
import SelectWithDifferentIcons from "./components/SelectWithDifferentIcons";
import SelectWithDifferentSizes from "./components/SelectWithDifferentSizes";
import SelectWithDifferentStyles from "./components/SelectWithDifferentStyles";

function App() {
  return (
    <div className="base">
    <div className="app"><BasicSelect/></div>
    <div className="app"><SelectWithDifferentAppearances/></div>
    <div className="app"><SelectWithDifferentIcons/></div>
    <div className="app"><SelectWithDifferentSizes/></div>
    <div className="app"><SelectWithDifferentStyles/></div>
    </div>
  );
}

export default App;

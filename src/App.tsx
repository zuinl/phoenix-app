import BirdContainer from "./components/BirdContainer"
import SkyBox from "./components/SkyBox"
import WingBox from "./components/WingBox"
import birds from "./utils/birds"

const App = () => {
  return (
    <div>
      <BirdContainer birds={birds} />

      <WingBox />

      <SkyBox />
    </div>
  )
}

export default App

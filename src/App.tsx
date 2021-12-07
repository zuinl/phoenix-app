import BirdContainer from "./components/BirdContainer"
import WingBox from "./components/WingBox"
import birds from "./utils/birds"

const App = () => {
  return (
    <div>
      <BirdContainer birds={birds} />

      <WingBox />
    </div>
  )
}

export default App

import BirdContainer from "./components/BirdContainer"
import birds from "./utils/birds"

const App = () => {
  return (
    <div>
      <BirdContainer birds={birds} />
    </div>
  )
}

export default App

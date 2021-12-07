import SongsContainer from "./components/SongsContainer"
import TextBox from "./components/TextBox"
import VideoBox from "./components/VideoBox"
import birds from "./utils/birds"

const App = () => {
  return (
    <div>
      <SongsContainer birds={birds} />

      <VideoBox />

      <TextBox />
    </div>
  )
}

export default App

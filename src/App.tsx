import Header from "./components/Header"
import SongsContainer from "./components/SongsContainer"
import TextBox from "./components/TextBox"
import VideoBox from "./components/VideoBox"
import { SongContextProvider } from "./contexts/SongContext"

const App = () => {
  return (
    <>
      <Header />
      
      <SongContextProvider>
        <SongsContainer />

        <VideoBox />

        <TextBox />
      </SongContextProvider>
    </>
  )
}

export default App

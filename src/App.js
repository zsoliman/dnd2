import './App.css';
import { useState } from 'react'
import MainMenu from './components/MainMenu'
import CreateACharacter from './components/CreateACharacter'

function App() {
  // this is called JSX = JavaScript XML(similar to HTML)
  const [screen, setScreen] = useState('main')


  return (
    <div>
      {
        (screen === 'main') ? <MainMenu setScreen={setScreen} />
          : <CreateACharacter />
      }
    </div>
  )

}

export default App;

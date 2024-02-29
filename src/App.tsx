import Home from "./pages/Home"
import { AppContextProvider } from './context/AppContext'

function App() {
  return (
    <AppContextProvider>
      <div className="mx-auto max-w-2xl flex justify-center">
        <Home />
      </div>
    </AppContextProvider>
  )
}

export default App

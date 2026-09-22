import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home"
import RashiPage from "./pages/RashiPage"

function App() {

  return (

    <BrowserRouter>

      <Header />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/rashi/:sign"
          element={<RashiPage />}
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="bg-orange-500 text-white p-2">
      <div className="max-w-6xl mx-auto">
        
        <Link to="/">
          <h2 className="text-3xl font-bold">
             Rashifal
          </h2>
          <h1>Go to choose your rashi</h1>
        </Link>

        <p className="mt-1">
          Daily Horoscope for 12 Rashis
        </p>

      </div>
    </header>
  )
}

export default Header
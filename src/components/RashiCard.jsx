import { Link } from "react-router-dom"

function RashiCard({ rashi }) {

  return (
    <Link to={`/rashi/${rashi.sign}`}>
      
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
        
        <div className="text-5xl">
          {rashi.symbol}
        </div>

        <h2 className="text-xl font-bold mt-3">
          {rashi.name}
        </h2>

        <p className="text-gray-600">
          {rashi.nepali}
        </p>

      </div>

    </Link>
  )
}

export default RashiCard
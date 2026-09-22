import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import Rashifal from "../components/Rashifal"

function RashiPage() {

  const { sign } = useParams()

  const [span, setSpan] = useState("daily")

  return (
    <div className="min-h-screen bg-gray-50 py-10">

      <div className="max-w-6xl mx-auto px-6">

        {/* Back button */}
        <Link
          to="/"
          className="text-purple-600 hover:text-purple-800"
        >
          ← Back to Rashis
        </Link>


        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mt-8 mb-8">
          {sign.toUpperCase()} RASHIFAL
        </h1>


        {/* Buttons */}
        <div className="flex justify-center gap-3 mb-8">

          <button
            onClick={() => setSpan("daily")}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
          >
            Daily
          </button>

          <button
            onClick={() => setSpan("weekly")}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
          >
            Weekly
          </button>

          <button
            onClick={() => setSpan("monthly")}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
          >
            Monthly
          </button>

        </div>


        {/* Rashifal */}
        <Rashifal
          sign={sign}
          span={span}
        />

      </div>

    </div>
  )
}

export default RashiPage
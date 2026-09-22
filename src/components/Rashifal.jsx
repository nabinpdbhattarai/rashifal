import { useEffect, useState } from "react"

function Rashifal({ sign, span }) {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setLoading(true)

    fetch(
      `https://rashifal-api.vercel.app/api/api?span=${span}&sign=${sign}`
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })

  }, [sign, span])


  if (loading) {
    return (
      <p className="text-center text-lg">
        Loading Rashifal...
      </p>
    )
  }


  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

      <h2 className="text-3xl font-bold mb-6">
        {sign.charAt(0).toUpperCase() + sign.slice(1)} {span} Rashifal
      </h2>

      <p className="text-lg leading-9 text-gray-700">
        {data?.prediction}
      </p>

    </div>
  )
}

export default Rashifal
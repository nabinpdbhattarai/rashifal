import rashis from "../data/rashis"
import RashiCard from "../components/RashiCard"

function Home() {

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h2 className="text-3xl font-bold text-center mb-8">
        Select Your Rashi
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {rashis.map((rashi) => (
          <RashiCard
            key={rashi.sign}
            rashi={rashi}
          />
        ))}

      </div>

    </div>
  )
}

export default Home
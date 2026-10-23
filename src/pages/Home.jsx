
import { Link } from 'react-router-dom'
import AboutUs from '../AboutUs'

function Home() {
  return (
    <main className="home">
      <div className="home-content">
        <h1>Paradise Nursery</h1>
        <h2>Bring Nature Home</h2>
        <AboutUs />
        <Link to="/plants" className="button">
          Get Started
        </Link>
      </div>
    </main>
  )
}

export default Home

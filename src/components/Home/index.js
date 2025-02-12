// Write your JS code here
import Header from '../Header'

import LogoutButton from '../LogoutButton'

import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="description-container">
      <Header />
      <h1>Home Route</h1>
      <LogoutButton />
    </div>
  </div>
)

export default Home

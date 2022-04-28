import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const hiLetterArray = ['H', 'i']
  const iArray = ['I', "'", 'm', ' ', 'H', 'i', 'k', 'm', 'e', 't']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={hiLetterArray}
              idx={12}
            />

            <br />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={iArray}
              idx={15}
            />

            <br />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />

            <br />
          </h1>
          <h2>Frontend Developer / Hybrid Mobile App Developer / Web3.0</h2>
          <Link to="/contact" className="flat-button ">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home

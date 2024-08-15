import './index.scss'
import LogoTitle from '../../assets/images/logo-h.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['i', 'g', 'o', 'r', ',']
  const jobArray = [
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
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

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>O</span>
          <span className={`${letterClass} _17`}>l</span>
          <span className={`${letterClass} _18`}>á</span>
          <span className={`${letterClass} _19`}>,</span>
          <br />
          <span className={`${letterClass} _20`}>E</span>
          <span className={`${letterClass} _21`}>u</span>
          <span className={`${letterClass} _22`}> </span>
          <span className={`${letterClass} _23`}>s</span>
          <span className={`${letterClass} _24`}>o</span>
          <span className={`${letterClass} _25`}>u</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            index={26}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            index={31}
          />
        </h1>
        <h2>Software Developer / Game Developer / Game Designer</h2>
        <Link to="/contact" className="flat-button">
          ENTRE EM CONTATO
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home

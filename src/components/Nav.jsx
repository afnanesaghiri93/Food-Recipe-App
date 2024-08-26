import {link} from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        <Link to='/'>
        <div>WElcome</div>
        </Link>
        <Link to='/recipes'>
        <div>Recipes</div>
        </Link>
        <Link to='/about'>
        <div>About</div>
        </Link>
    </div>
  )
}

export default Nav
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        <Link to='/'>
        <div>Home</div>
         </Link>
        <Link to='/RecipesPage'>
        <div>Recipes</div>
        </Link>
        <Link to='/AboutPage'> 
        <div>About</div>
        </Link>
        <Link to='/LoginPage'> 
        <div>Login</div>
        </Link>
        <Link to='/SignUpPage'> 
        <div>SignUp</div>
        </Link>


    </div>
  )
}

export default Nav
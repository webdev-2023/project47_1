/*Requirement Statement:
     Create a header component that displays a logo and company name. 
     It should be able to welcome a user to the site or ask them to sign in, depending on boolean input.
*/

import PropTypes from "prop-types"
import logo from '../images/logo4.png'

// Component to welcome the user by name
const Welcome = ({ name }) => {
    return <div>
        <h4>Welcome {name}!</h4>
    </div>
}

// Component for sign-in button. 
const SignUp = ({ onClick }) => {
    return <button className='btn' type="button" onClick={onClick}>Sign In</button>;
}

// Header compoment to display logo, company name and sign-in button
const Header = (props) => {
    return <header className='header header-align'>
        <img className='img' src={logo} alt="Logo" />
        <h1>{props.title}</h1>
        <h2>{props.isLoggedIn ? <Welcome name={props.name} /> : <SignUp onClick={props.onClick} />}</h2>
    </header>;
};

// Defining default properties
Header.defaultProps = {
    title: 'NC Clothing App'
}

// Defining property type
Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header

import Banner from '../component/Banner'
import Footer from '../layout/Footer';
import Signupform from '../component/Signup'

const Signup = () =>{
    return(
        <>
           <Banner pageName="Sign up"/>
           <Signupform/>
           <Footer/>
        </>
    )
}

export default Signup;
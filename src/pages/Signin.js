import Banner from '../component/Banner'
import Footer from '../layout/Footer';
import Signinform from '../component/Signin';

const Signin = () => {


    return (
        <>
            <Banner pageName="Sign in" />
            <Signinform />
            <Footer />
        </>
    )
}

export default Signin;
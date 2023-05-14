import Navigation from '../component/Navigation';
import Hero from '../layout/Hero';
import Goal from '../component/Goal';
import Steps from '../component/Steps';
import Security from '../layout/Security';
import Offers from '../component/Offers'
import Testimonies from '../component/Testimonies';
import Footer from '../layout/Footer';
import Achievements from '../layout/Achievements';

const Home = () => {
    return (
        <>
            <Navigation />
            <Hero />
            <Goal />
            <Steps />
            <Security />
            <Offers />
            <Testimonies />
            <Achievements />
            <Footer />
        </>
    )
}


export default Home;
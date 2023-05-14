import { Container, Row, Col } from 'react-bootstrap'
import line from '../images/line.png'
import Testimony from './Testimony'
import { AiFillStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'

const Testimonies = () => {

    const data = [
        {
            id: 1,
            text: " I'm so glad this platform was innovated. It made me cultivate the habit of saving, b'cos I'm an impulsive buyer. I also love the fact that I can pay at my own convenience even if my payment day is long overdue.",
            name: "Adeniyi Rofiyat",
            img: "https://cloudcooperative.com.ng/wp-content/uploads/2021/11/1631691135BBEC96E3-9EDB-4411-A90D-EA1FD5797935L0001.jpeg"
        },
        {
            id: 2,
            text: "Since I have been using cloud cooperative, it’s so easy to make my contributions as a member, I get notified as at when due. I'm really enjoying my savings plan. This is my third month.",
            name: "Adeniyi Adefunke ",
            img: "https://cloudcooperative.com.ng/wp-content/uploads/2021/08/face-02-70x70-1.png"
        },
        {
            id: 3,
            text: "Cloud Cooperative has helped cultivate the habit of saving more. Thanks to the team for the wonderful innovation.",
            name: "Oluwatoyin Agbede",
            img: "https://cloudcooperative.com.ng/wp-content/uploads/2021/11/1632232042Snapchat-1078892697-1.jpg"
        }
    ]
    return (
        <div className="bg-testimony p-5 my-5 text-white">
            <Container>
                <p className="text-center"> <img src={line} alt="line" /> </p>
                <Row className="py-5">
                    <Col md={6}>
                        <h1 className="display-4 fw-bold">What members are saying</h1>
                        <p className="opacity-4">Register with us and let’s help you create a safe environment for your finances.</p>
                        <h3>4.5/5 <span><AiFillStar /> <BsStarHalf /> </span></h3>
                        <p className='small'>(based on 1.5k ratings)</p>

                        <p className='mt-auto'>See all reviews</p>
                    </Col>
                    <Col md={6}>
                        {
                            data.map((item) => {
                                return <Testimony key={item.id} name={item.name} text={item.text} img={item.img} />
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonies;
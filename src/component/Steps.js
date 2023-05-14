import { Container, Row } from 'react-bootstrap'
import Step from './Step'


const Steps = () => {

    const data = [
        { id: 1, title: 'Create your account', text: 'Sign up for an account with your email and pick a Monthly Saving category (min. NGN 5,000)' },
        { id: 2, title: 'Start Saving', text: 'Log into your account, click on the Start contribution button and start your saving journey' },
        { id: 3, title: 'Get a loan', text: 'Once you have saved consistently for 6 months, you qualify for a loan up to 200% of your total savings' },
    ]

    // const [fetch, setFetch] = useState(data)

    return (
        <div className="bg-steps p-5 text-center">
            <Container>
                <h5 className="text-blue fw-bold">GET STARTED WITHIN MINUTES</h5>
                <h1 className="display-4 fw-bold text-navy mt-5">Easy steps to start contributing with us</h1>

                <Row>
                     {
                        data.map((item)=>{
                            return(<Step  key={item.id} title={item.title} text={item.text}/>)
                        })
                     }
                </Row>
            </Container>
        </div>
    )
}

export default Steps;
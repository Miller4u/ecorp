import {Container, Row} from 'react-bootstrap'
import {FaHandsHelping,FaReceipt} from 'react-icons/fa'
import {GiTwoCoins} from 'react-icons/gi'
import {AiFillCreditCard,AiTwotoneLock} from 'react-icons/ai'
import Offer from './Offer'


const Offers = ()=>{
   const data = [
         { id: 1, icon: <FaHandsHelping/>,title: 'Contribution',text:'Make monthly contributions into your Cloud Cooperative account with just a few taps on your smartphone.',bg:'#B1E2FE'},
         { id: 2, icon: <GiTwoCoins/>,title: 'Loans',text:'Whether you’re employed or run your own business, access loans; simple and easy. No collaterals, or long forms.',bg:'#EAFEB0'},
         { id: 3, icon: <AiFillCreditCard/>,title: 'Quick Savings',text:'Save, transfer, and withdraw your money for free at any time',bg:'#DACBFF'},
         { id: 4, icon: <FaReceipt/>,title: 'Bill Payments',text:'Pay all your utility bills; airtime, cable tv, data, electricity, always at the lowest possible cost.',bg:'#FFE2E2'},
         { id: 5, icon: <AiTwotoneLock/>,title: 'Safe Lock',text:'Save daily or weekly, and have it moved automatically every month.', bg:'#B6FFD4'}
   ]

    return(
        <Container>
             <h1 className="display-4 fw-bold text-navy">Product offerings</h1>
             <Row>
                {
                    data.map((item)=>{
                        return(
                            <Offer key={item.id} bg={item.bg} icon={item.icon} title={item.title} text={item.text}/>
                        )
                    })
                }
             </Row>
        </Container>
    )
}

export default Offers;
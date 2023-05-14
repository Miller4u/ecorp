import { Container,Row,Col } from "react-bootstrap";
// import { BiFace,BiTwitter,Bi } from "react-icons/bi";
import {Link} from "react-router-dom"
import {BsFacebook,BsTwitter,BsInstagram, BsLinkedin} from 'react-icons/bs'
const Footer = () =>{
     
    const social = [
           {id: 1, icon: <BsFacebook/>,link:'https://www.facebook.com/aaron.dio'},
           {id: 2, icon: <BsTwitter/>,link:'https://www.twitter.com/aarondioo'},
           {id: 3, icon: <BsInstagram/>,link:'https://www.instagram.com/aarondioo'},
           {id: 4, icon: <BsLinkedin/>,link:'https://www.linkedin.com/in/aarondio'}
    ]

    const company = [
        {id:1, name: "About",link: "/about-us"},
        {id:2, name: "Team",link: "/team"},
        {id:3, name: "Careers",link: "/career"},
        {id:4, name: "Contact",link: "/contact"}
    ]

    const product = [
        {id:1, name: "Contributions",link: "/contribution"},
        {id:2, name: "Loans",link: "/loans"},
        {id:3, name: "Saving Plan",link: "/savings"},
        {id:4, name: "Features",link: "/feature"}
    ]

    const  resources = [
        {id:1, name: "Customer Stories",link: "/stories"},
        {id:2, name: "FAQs",link: "/faq"},
        {id:3, name: "Security",link: "/security"},
        {id:4, name: "Blog",link: "/blog"}
    ]

    const  contact = [
        {id:1, name: "3rd Floor H-medix Garki Area 11 Abuja Nigeria",link: "#"},
        {id:2, name: "info@abujacenter.com",link: "mailto:info@abujacenter.com"},
        {id:3, name: "+2348101013370",link: "tel:08101013370"},
        {id:4, name: "Whatsapp",link: "tel:08101013370"}
    ]


    return (
         <footer className="py-5 mt-6">
               <Container>
                   <Row>
                      <Col md={3} sm={6}>
                            <ul className="list-group ">
                                <li className="list-group-item border-0 mb-3 bg-transparent text-white fw-bold">Company</li>
                                 {
                                    company.map((item)=>{
                                        return(
                                             <li key={item.id} className="list-group-item border-0 bg-transparent text-white"> <Link to={item.link} className="text-decoration-none link-light"> {item.name} </Link> </li>
                                        )
                                    })
                                 }
                          
                            </ul>
                      </Col>
                      <Col md={3} sm={6}>
                            <ul className="list-group">
                                <li className="list-group-item border-0 mb-3 bg-transparent text-white fw-bold">Product</li>
                                 {
                                    product.map((item)=>{
                                        return(
                                             <li key={item.id} className="list-group-item border-0 bg-transparent"> <Link to={item.link} className="text-decoration-none link-light"> {item.name} </Link> </li>
                                        )
                                    })
                                 }
                          
                            </ul>
                      </Col>
                      <Col md={3}>
                            <ul className="list-group">
                                <li className="list-group-item border-0 mb-3 bg-transparent text-white fw-bold">Resources</li>
                                 {
                                    resources.map((item)=>{
                                        return(
                                             <li key={item.id} className="list-group-item border-0 bg-transparent"> <Link to={item.link} className="text-decoration-none link-light"> {item.name} </Link> </li>
                                        )
                                    })
                                 }
                          
                            </ul>
                      </Col>
                      <Col md={3}>
                            <ul className="list-group">
                                <li className="list-group-item border-0 mb-3 bg-transparent text-white fw-bold">Contact</li>
                                 {
                                    contact.map((item)=>{
                                        return(
                                             <li key={item.id} className="list-group-item border-0 bg-transparent"> <Link to={item.link} className="text-decoration-none link-light"> {item.name} </Link> </li>
                                        )
                                    })
                                 }
                          
                            </ul>
                      </Col>
                   </Row>
                   <Row className="px-3">
                      <Col md={6} className="mt-3">
                           <div className="d-flex fs-5 justify-content-between w-50">
                                
                               {
                                 social.map((item)=>{
                                    return(
                                        <a key={item.id} href={item.link} target="blank" className="link-light">{item.icon}</a>
                                    )
                                 })
                               }


                           </div>
                      </Col>
                      <Col md={6} className="align-self-center mt-3">
                           <div className="d-flex  small float-lg-end ">
                               <Link to="/privacy" className="link-light text-decoration-none">Privacy Policy </Link>
                               <Link to="/terms" className="ms-5 link-light text-decoration-none">Terms and Conditions</Link>
                           </div>
                      </Col>
                   </Row>
               </Container>
         </footer>
    )
}

export default Footer;

const Testimony = (props) =>{
    return(
        <div className="bg-white p-4 rounded-3 border text-navy mt-4 border-1">
              <div className="d-flex">
                  <img src={props.img} alt={props.name} height={60} width={60} className="rounded-circle"/>
                  <div className="ms-4">
                      <p>{props.text}</p>
                      <h5 className='fw-bold'>{props.name}</h5>
                  </div>
              </div>
        </div>
    )
}

export default Testimony;
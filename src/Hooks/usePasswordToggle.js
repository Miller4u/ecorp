import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


export const usePasswordToggle = () => {
     const [visible, setVisible] = useState(false);   

    const Icon = (<FontAwesomeIcon
                icon={visible ? faEye : faEyeSlash}
                onClick={()=>setVisible(!visible)}
     />)

     const inputType = visible ? 'text' : 'password';

     return [Icon,inputType ]
}
// const usePasswordToggle = () => {
//   const [visible, setVisible] = useState(false);

//   const Icon = (<FontAwesomeIcon
//     icon={visible ? faEye : faEyeSlash}
//     onClick={() => setVisible(!visible)}
//     className='pointer'
//   />)
//   const inputType = visible ? 'text' : 'password'
//   return [Icon, inputType]


// }

export default usePasswordToggle
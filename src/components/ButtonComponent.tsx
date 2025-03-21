import React from 'react'
import { Button } from 'primereact/button'

type ButtonProps = React.ComponentProps<'button'> & {
  label?: string
}

function ButtonComponent({label,...props}: ButtonProps) {
  return (
    // <div>
    //   <Button 
    //     label={label}
    //     onClick={() => window.open(`http://localhost:5173/${link}`, '_blank')}
    //   >
    //   </Button>
    // </div>
    <button
      className="btn"
      {...props}
    >
      {label}
      {props.children}
    </button>
  )
}

export default ButtonComponent

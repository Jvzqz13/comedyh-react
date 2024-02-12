import { Button } from "react-bootstrap";
import { useState } from 'react';


function CollapseButton() {
    const [open, setOpen] = useState(false);  
    return (

    <Button variant="secondary" 
      onClick={() => setOpen(!open)}>
        Collapse
      </Button>
  )
}

export default CollapseButton

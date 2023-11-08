import { useState } from "react"

const useToggle = (initOpen: boolean = true) => {
    const [open, setIsOpen] = useState(initOpen)

    const toggle = () => setIsOpen(prev => !prev)

    return {
        open,
        toggle
    }
}

export default useToggle
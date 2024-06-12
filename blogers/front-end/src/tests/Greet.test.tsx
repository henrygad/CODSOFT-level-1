import {render, screen} from "@testing-library/react"
import Greet from '../component/Greet'

describe('Greet user', () => {
    it('should render a greeting to user if a name prop is provided', () => {
        render(<Greet name='Henry'/>)
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(/henry/i)
        screen.debug()
    })

    it('should render a login button to user if no name prop is provided', () => {
        render(<Greet/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/login/i)
    })
})
import {render, screen} from "@testing-library/react"
import Account from "../components/Account"

describe('Useraccount', () => {
    it('should render user name ', () => {
        render(<Account user={{name: 'Henry', id: 1}} />)
        expect(screen.getByText('Henry')).toBeInTheDocument()
        screen.debug()
    })

    it('should render admin features if user is admin ', () => {
        render(<Account user={{name: 'Henry', isAdmin: true, id: 1}} />)
        expect(screen.queryByRole('button')).toBeInTheDocument()
        screen.debug()
    })

    it('should not render admin features if user is not admin ', () => {
        render(<Account user={{name: 'Henry', isAdmin: false, id: 1}} />)
        expect(screen.queryByRole('button')).not.toBeInTheDocument()
        screen.debug() 
    })
})
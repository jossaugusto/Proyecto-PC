import EnlacesPie from './EnlacesPie'
import Redes from './Redes'
import Logo from './Logo'

function Pie(){
    return(
        <footer className='footer'>
            <EnlacesPie/>
            <Logo/>
            <Redes/>
        </footer>
    )
}

export default Pie;
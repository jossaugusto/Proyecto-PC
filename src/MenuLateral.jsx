import Productos from "./Productos"

const enlaces = [
    {name: 'Computadoras', categoria:'computadora'},
    {name: 'Laptops', categoria:'laptops'},
    {name: 'Periféricos', categoria1:'auriculares',categoria2:'teclado'},
]
const menu = enlaces.map((x,index)=>(
    <a className="ancorLateral" key={index}>{x.name}</a>
))

function MenuLateral(){
    return(
        <aside className="aside">
        {menu}
        </aside>
    )
}

export default MenuLateral;
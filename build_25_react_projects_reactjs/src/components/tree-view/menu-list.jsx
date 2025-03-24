import MenuItem from "./menu-item";
import "./styles.css"

export default function MenuList({list = []}){
    return <ul className="menu-list-constainer">
        {
            list && list.length ? 
                list.map((listItem)=> <MenuItem item={listItem} />)
            :null
        }
    </ul>
}
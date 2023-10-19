import { MdAddCircle } from 'react-icons/md';
import { useState } from 'react';
import rainbow from '../asset/rainbow.png'
const Sidebar = ({ addNote, changeColor }) => {
    const colors = ["#FF000085", "#FFA50085", "#FFFF0085", "#00800085","#0000FF85","#9400D385"];
    const [listOpen, setListopen] = useState(false);

    return (
        <div className='sidebar' >
            <MdAddCircle className="addBtn" size={50} onClick={() => addNote()} />
            <div className='color-list' onClick={() => setListopen(!listOpen)}><img src={rainbow} alt='rainbow' /></div>
            <ul className={`sidebar-list ${listOpen ? "sidebar-list-active" : ""}`}>
                {colors.map((item, index) => (
                    <li key={index}
                        className="item"
                        style={{ backgroundColor: item}}
                        onClick={() => { changeColor(item) }}>

                    </li>
                ))}

            </ul>

        </div>
    )
}

export default Sidebar

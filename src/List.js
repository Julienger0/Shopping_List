import React from "react";
import { FaEdit, FaTrash } from 'react-icons/fa'

function List({ items, removeItem ,editItem}) {
    return (
        <div>
            {items.map((item) => {
                const { id, title } = item;
                return (
                    <div key={id} className="">
                        <p className="">{title}</p>
                        <div className="btn-group">
                            <button type='button' className="btn" onClick={()=>editItem(id)}><FaEdit /></button>
                            <button type='button' className="btn" onClick={()=> removeItem(id)}><FaTrash /></button>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default List
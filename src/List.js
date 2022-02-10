import React from "react";
import { FaEdit, FaTrash } from 'react-icons/fa'

function List({ items }) {
    return (
        <div>
            {items.map((item) => {
                const { id, title } = item;
                return (
                    <div key={id} className="">
                        <p className="">{title}</p>
                        <div className="btn-group">
                            <button type='button' className="btn"><FaEdit/></button>
                            <button type='button' className="btn"><FaTrash/></button>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default List
import React, {useState} from 'react';
import './table-search.scss'

const TableSearch = ({onSearch}) => {

    const [value, setValue] = useState('');

    const onChangeValueHandler = (event) => setValue(event.target.value);


    return (
        <form className="container input-group mb-3 mt-3" onSubmit={(e) => {
            e.preventDefault();
            onSearch(value)

        }}>

            <input type="text" className="form-control" placeholder="Search"
                   aria-label="Recipient's username" aria-describedby="basic-addon2"
                   onChange={onChangeValueHandler} value={value}/>
            <div className="input-group-append">
                <button class="btn btn-secondary my-2 my-sm-0" type="submit"

                        onClick={() => onSearch(value)}>
                    Search
                </button>
            </div>
        </form>
    )
};

export default TableSearch;
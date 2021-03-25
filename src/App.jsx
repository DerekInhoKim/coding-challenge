import React, {useState, useEffect} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {addItem, deleteItem} from './redux/actions';

const App = () => {
    const wishList = useSelector(state => state.wishList)
    const [item, setItem] = useState("")
    const dispatch = useDispatch()

    const setItemHelper = (e) => {
        setItem(e.target.value)
    }

    return(
        <div>
            <div>Hello</div>

            <form>
                <input type="text" name="item" onChange={setItemHelper}/>
            </form>
        </div>
    )
}

export default App

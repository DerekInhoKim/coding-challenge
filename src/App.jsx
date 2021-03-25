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

    const submitItem = (e) => {
        e.preventDefault()
        dispatch(addItem(item))
        setItem("")
    }

    const deleteItem = (e) => {
        let element = e.target.innerHTML
        console.log(element)
        // dispatch(deleteItem(element))
    }

    const wishListComponent = wishList.map((element, i) => {
        return (
            <div className="item-element" key={i} onClick={deleteItem}>
                {element}
            </div>
        )
    })

    return(
        <div className="app-container">
            <div>Hello</div>
            <div>
                {wishListComponent}
            </div>
            <form>
                <input type="text" name="item" onChange={setItemHelper} value={item}/>
                <button onClick={submitItem}>Add</button>
            </form>
        </div>
    )
}

export default App

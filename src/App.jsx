import React, {useState, useEffect} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {addItem, deleteItem} from './redux/actions';

const App = () => {
    const wishList = useSelector(state => state.wishList)
    const [item, setItem] = useState("")
    const dispatch = useDispatch()

    // Sets the value for our item when a user enters an input
    const setItemHelper = (e) => {
        setItem(e.target.value)
    }

    // Removes an item from the wishlist
    const deleteItemHelper = (e) => {
        let element = e.target.innerHTML
        dispatch(deleteItem(element))
    }

    const submitItem = (e) => {
        e.preventDefault()
        // Check to see if an item is already in a list
        if(wishList.includes(item)){
            alert("Item is already in wishlist!")
        } else {
            // Sends the item to the redux store
            dispatch(addItem(item))
        }
        // Resets the input value to an empty string
        setItem("")
    }

    const wishListComponent = wishList.map((element, i) => {
        return (
            <div className="item-element" key={i} onClick={deleteItemHelper}>
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
                <input type="text" name="item" onChange={setItemHelper} value={item} required/>
                <button onClick={submitItem}>Add</button>
            </form>
        </div>
    )
}

export default App

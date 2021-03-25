import React, {useState, useEffect} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components'
import {addItem, deleteItem} from './redux/actions';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

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

    const submitForm = (e) => {
        e.preventDefault()
        if(wishList.length === 0){
            alert("Please add items to your wishlist!")
        } else {
            // Dispatch a dummy action to reach the base case that will clear our wishlist
            dispatch({type: "default"})
            alert("Wish list submitted to Santa!")
        }
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
        <div className="app_container">
            <Title>MY WISHLIST</Title>
            <div className="app-display_container">
                <div className="app-display">
                    {wishListComponent}
                </div>
            </div>
            <form className="app-form">
                <input type="text" name="item" onChange={setItemHelper} value={item} required/>
                <button className="button-add" onClick={submitItem}>Add</button>
                <button className="button-submit" onClick={submitForm}>Submit</button>
            </form>
        </div>
    )
}

export default App

import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components'
import {addItem, deleteItem} from './redux/actions';


const AppContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
`

const AppDisplay = styled.div`
    display: flex;
    height: 540px;
    width: 400px;
    flex-direction: column;
    align-items: center;
    background: pink;
    border-radius: 10px;
    box-shadow: 0px 0px 15px  #292929;
`

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin: 1rem 0rem;
    color: black;

`;

const ItemDisplay = styled.div`
    height: 250px;
    width: 250px;
    background: white;
    border: 1px solid black;
`

const Form = styled.form`
    display: flex;
    align-items: center;
    width: 250px;
    flex-direction: column;
    margin: 1rem 0rem;
`

const Input = styled.input`
    width: 100%;
    height: 30px;
`

const Button = styled.button`
    width: 125px;
    margin 1rem 0rem;
    padding: 1rem;
    background-color: palegreen;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 5px  #292929;
    font-weight: bold;
`

const SubmitButton = styled(Button)`
    width: 100%;
`

const ListItem = styled.div`
    margin: 10px 10px;
    cursor: pointer;
`

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

    // Handles the addition of an item to the list
    const submitItem = (e) => {
        e.preventDefault()
        // Check to see if an item is already in a list, as well as if the item is an empty string
        if(wishList.includes(item) && item){
            alert("Item is already in wishlist!")
        } else {
            // Sends the item to the redux store
            dispatch(addItem(item))
        }
        // Resets the input value to an empty string
        setItem("")
    }

    // Handles submission of the form
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

    // Renders each item from the list
    const wishListComponent = wishList.map((element, i) => {
        return (
            <ListItem key={i} onClick={deleteItemHelper}>
                {element}
            </ListItem>
        )
    })

    return(
        <AppContainer>
            <AppDisplay>
                <Title>MY WISHLIST</Title>
                    <ItemDisplay>
                        {wishListComponent}
                    </ItemDisplay>
                <Form>
                    <Input onChange={setItemHelper} value={item} required/>
                    <Button onClick={submitItem}>Add</Button>
                    <SubmitButton onClick={submitForm}>Submit</SubmitButton>
                </Form>
            </AppDisplay>
        </AppContainer>
    )
}

export default App

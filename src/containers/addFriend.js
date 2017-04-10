import React from 'react';
//import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addFriend } from '../actions'

let AddFriend = ({dispatch}) => {

    let inputs = {};
    return (
        <div>

            <form action="" onSubmit={event =>{
                event.preventDefault();

                if (!inputs.lastName.value.trim() && !inputs.firstName.value.trim()) {
                    console.log('void form');
                    return;
                }

                // TODO переделать лютый ужас



                dispatch(addFriend({
                    firstName: inputs.firstName,
                    lastName: inputs.lastName
                }));


            }}>
                <div>firstName <input type="text" name="firstName" ref={(firstName) => {
                 inputs.firstName = firstName; }
                 }/></div>

                <div>lastName <input type="text" name="lastName" ref={(lastName) => {
                 inputs.lastName = lastName; }
                 }/></div>

                <div><input type="checkbox" value=""/>best</div>
                <div>
                    <button type="submit">add friend</button>
                </div>
            </form>

        </div>
    )

};

AddFriend = connect()(AddFriend)

export default AddFriend




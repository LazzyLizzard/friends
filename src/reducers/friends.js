const initalState = {

    friends: [1, 2],
    friendsById: {
        1: {
            id: 1,
            firstName: "user",
            lastName: "one"
        },
        2: {
            id: 2,
            firstName: "john",
            lastName: "doe"
        }
    }

};

const friends = (state = initalState, action) => {

    console.log(state);

    return state


}


export default friends
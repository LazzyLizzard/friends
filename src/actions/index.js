/**
 * fiends actions
 */

let nextFriendId = 0;

/**
 * добавление нового друга
 * @param {} friendData
 */
export const addFriend = (friendData) => ({
    type: 'ADD_FRIEND',
    id: nextFriendId++,
    friendData
});


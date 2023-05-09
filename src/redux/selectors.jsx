export const getUsers = state => state.cards.cards;
export const isFollowing = state => {
    console.log(state);
    return state.cards.isFollowing;
};

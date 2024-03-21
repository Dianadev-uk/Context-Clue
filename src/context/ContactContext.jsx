import { createContext } from "react";

const ContactContext = createContext({
    favoriteFriends: [],
    addFavoriteFriend: () => { },
    removeFavoriteFriend: () => { },
});

export default ContactContext;


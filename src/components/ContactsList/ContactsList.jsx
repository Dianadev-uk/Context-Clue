import { useContext } from "react";
import ContactContext from "../../context/ContactContext";
import FRIENDS_DATA from "../../data/friends-data";
import Header from '../Header/Header';
import classes from './ContactList.module.css';



const ContactsList = () => {
  const friendContext = useContext(ContactContext);
  
  return (
    <>
      <Header>Contacts</Header>
      <ul className={classes.list}>
        {FRIENDS_DATA.map((friend) => {
        let buttonHandler = () => friendContext.addFavoriteFriend(friend);
          return (
            <li key={friend.id} className={classes.listItem}>
              <div className={classes.friendName} style={{backgroundColor: friend.favoriteColor}}>
                {friend.firstName} {friend.lastName}
              </div>
              <div className={classes.favoriteColor}>Favorite Color: {friend.favoriteColor}</div>
              <button onClick={buttonHandler}>Add Favorite</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactsList;
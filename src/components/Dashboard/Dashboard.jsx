import { useState } from 'react';
import ContactContext from '../../context/ContactContext';
import FavoriteContacts from '../FavoriteContacts/FavoriteContacts';
import ContactsList from '../ContactsList/ContactsList';

const Dashboard = () => {
  const [favoriteFriends, setFavoriteFriends] = useState([]);

  const addFavoriteFriend = (friend) => {
    setFavoriteFriends((prevFavoriteFriends) => [
      ...prevFavoriteFriends,
      friend,
    ]);
  };

  const removeFavoriteFriend = (friendId) => {
    setFavoriteFriends((prevFavoriteFriends) =>
      prevFavoriteFriends.filter((friend) => friend.id !== friendId)
    );
  };

  const friendContext = {
    favoriteFriends: favoriteFriends,
    addFavoriteFriend: addFavoriteFriend,
    removeFavoriteFriend: removeFavoriteFriend,
  }

  return (
    <ContactContext.Provider value={friendContext}>
      <FavoriteContacts />
      <ContactsList />
    </ContactContext.Provider>
  );
};

export default Dashboard;
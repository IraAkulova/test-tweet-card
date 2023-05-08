import { useSelector, useDispatch } from "react-redux";
import { getUsers } from '../redux/selectors';
import { useEffect } from "react";
import { fetchUsers, addFollower } from "../redux/operations";
import css from '../styles/Tweets.module.css'

const Tweets = () => {
    const dispatch = useDispatch();
    const cards = useSelector(getUsers);
    const handleFollow = (id) => dispatch(addFollower(id));

    useEffect(() => {
      dispatch(fetchUsers());
    }, [dispatch]);

  return (
    <ul className={css.grid}>
      {cards.map((card) => (
        <li key={card.id}>
          <div className={css.card}>
            <img alt="checkmark" src="../images/questionmark-checkmark.png" />
            <h3>{card.tweets} Tweets</h3>
            <h3>{card.followers} Follovers</h3>
            <button
              type="button"
              onClick={() => {
                handleFollow(card.id);
              }}
            >
              Follow
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Tweets;

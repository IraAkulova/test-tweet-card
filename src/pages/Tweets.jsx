import { useSelector, useDispatch } from "react-redux";
import { getUsers } from '../redux/selectors';
import { useEffect } from "react";
import { fetchUsers } from "../redux/operations";
import css from '../styles/Tweets.module.css'

const Tweets = () => {
    const dispatch = useDispatch();
    const cards = useSelector(getUsers);
    const handleFollow = (id) => dispatch(followContact(id));

    useEffect(() => {
      dispatch(fetchUsers());
    }, [dispatch]);

  return (
    <ul className={css.grid}>
      {cards.map((card) => (
        <li key={card.id}>
          <div className={css.card}>
            <img alt="checkmark" src="../images/questionmark-checkmark.png" />
            {card.user}
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

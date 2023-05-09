import { useSelector, useDispatch } from "react-redux";
import { getUsers, isFollowing } from '../redux/selectors';
import { useEffect } from "react";
import { fetchUsers, addFollower } from "../redux/operations";
import css from '../styles/Tweets.module.css'
import defaultAvatar from '../../src/assets/boy.png'
import background from '../../src/assets/questionmark-checkmark.png'

const Tweets = () => {
  const dispatch = useDispatch();
  const cards = useSelector(getUsers);
  const handleFollow = id => {

    return dispatch(addFollower(id));
  };

    useEffect(() => {
      dispatch(fetchUsers());
    }, [dispatch]);

  return (
    <main>
      <ul className={css.grid}>
        {cards.map((card) => (
          <li key={card.id}>
            <article className={css.card}>
              <img
                alt="checkmark"
                src={background}
                className={css.background}
              />
              <div className={css.line}></div>
              <img
                alt="default-avatar"
                src={defaultAvatar}
                className={css.circle}
              />
              <p className={css.text}>
                {card.tweets.toLocaleString("en-GB")} Tweets
              </p>
              <p className={css.text}>
                {card.followers.toLocaleString("en-GB")} Follovers
              </p>
              <button
                className={css.button}
                style={{
                  backgroundColor: `{${isFollowing} ? #EBD8FF : #5CD3A8}`,
                }}
                type="button"
                onClick={() => {
                  handleFollow(card.id);
                }}
              >
                Follow
              </button>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Tweets;

import { User, Account, Image } from '../../types';
import { Row } from '../components';
const dataConverter = (
  users: User[],
  accounts: Account[],
  images: Image[]
): Row[] => {
  return users.map((user: User, index: number) => {
    return {
        avatar: images[index].url,
        username: user.username,
        country: user.country,
        name: user.name,
        lastPayments: accounts[index].payments[0].totalSum,
        posts: accounts[index].posts
    }
  });
};
export default dataConverter;

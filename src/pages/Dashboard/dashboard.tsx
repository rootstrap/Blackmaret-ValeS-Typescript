import { useDispatch } from 'react-redux';
import { revokeCredentials } from 'store/auth.reducer';
import Button, { ButtonVariants } from 'components/shared/ButtonsLarge';
import { useLogOutMutation } from 'services/blackMarketApi';
import Header from 'components/Header';

const Dashboard = () => {
  const dispatch = useDispatch();

  const [logOutRequest] = useLogOutMutation();

  async function handleLogout() {
    const body = {
      refresh: localStorage.getItem('refresh_token'),
    };
    try {
      await logOutRequest(body);
    } catch (error) {
      return;
    }
    dispatch(revokeCredentials());
  }

  return (
    <>
      <Header />
      <Button variant={ButtonVariants.Outline} isLarge onClick={handleLogout}>
        Log out
      </Button>
    </>
  );
};

export default Dashboard;

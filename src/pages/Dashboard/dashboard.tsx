import { useDispatch } from 'react-redux';
import { revokeCredentials } from 'store/auth.reducer';
import ButtonLarge, { ButtonLargeVariants } from 'components/shared/ButtonsLarge';
import { useLogOutMutation } from 'services/blackMarketApi';

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
    <div className='absolute m-0 h-screen w-full bg-custom-image bg-cover p-0'>
      <div className='mt-16 ml-28 box-content flex h-32 w-[22.5rem] flex-col items-center rounded-lg bg-white'>
        <div className='mt-10'>
          <ButtonLarge variant={ButtonLargeVariants.Outline} onClick={handleLogout}>
            Log out
          </ButtonLarge>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

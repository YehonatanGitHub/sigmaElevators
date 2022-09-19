import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import GoalForm from '../components/GoalForm';
// import GoalItem from '../components/GoalItem';
// import Spinner from '../components/Spinner';
import { getCustomers, reset } from '../features/customers/customerSlice';

function Customers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { customers, isLoading, isError, message } = useSelector((state) => state.customers);

  useEffect(() => {
    const fetchTable = async () => {
      try {
        const resp = await axios.get('api/customers');
        console.log(resp.data);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };
    fetchTable();
  }, []);

  //   if (!user) {
  //     navigate('/login');
  //   }

  //   dispatch(getGoals());

  //   return () => {
  //     dispatch(reset());
  //   };
  // }, [user, navigate, isError, message, dispatch]);

  // if (isLoading) {
  //   return <Spinner />;
  // }

  return (
    <>
      <section className='heading'>
        <h1>לקוחות </h1>
        {/* <p>Goals Dashboard</p> */}
      </section>

      {/* <GoalForm />

      <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section> */}
    </>
  );
}

export default Customers;

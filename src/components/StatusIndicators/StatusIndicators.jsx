import { InfinitySpin } from 'react-loader-spinner';
import css from '../StatusIndicators/StatusIndicators.module.css';
import toast from 'react-hot-toast';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#3e2e31ed"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export const ErrorMessage = () => toast.error('Oops! Something went wrong...');

export const ErrorComponent = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={css.div}>
      <p className={css.p}>Oops! Something went wrong...</p>
      <button onClick={handleReload} className={css.button}>
        Reload the page
      </button>
    </div>
  );
};

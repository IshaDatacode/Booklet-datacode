import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({percentage}) => {
  return(
  <div className='w-25 h-25 position-absolute z-1'>
    <CircularProgressbar value={percentage} text={`${Math.round(percentage)}%`} 
    strokeWidth={15}
    styles={buildStyles({
      textColor: '#4A83F6',         // Text color
      pathColor: '#4A83F6',         // Progress bar color
      textSize: '18px',             // Optional: adjust text size
    })} />;
  </div>
  );
};
export default ProgressBar;

import './styles.scss'
import { Rings } from 'react-loader-spinner';

function Spinner () {
  return (
    <div>
     <Rings
  height="400"
  width="400"
  color="#ffa07a"
  radius="6"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="rings-loading"
/>
    </div>
  )
}

export default Spinner;

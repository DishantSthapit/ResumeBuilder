import './FacilityWrapper.scss';
import { FACILITY_ITEMS } from '../../../constants';

const FacilityWrapper = () => {
  return (
    <div className="facilityWrapper">
      <div className="facilityInnerWrapper">
        {
          FACILITY_ITEMS.map((item, key) =>
            (
              <div key={key}>
                <h2>{item.label}</h2>
                {item.img}
                <div>{item.text}</div>
              </div>
            )
          )
        }
      </div>
    </div>
  );
}

export default FacilityWrapper;

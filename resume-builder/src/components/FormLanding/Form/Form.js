import './Form.scss';
import { TagInput } from 'reactjs-tag-input'
import SkillsTags from '../../SkillsTag/SkillsTag';

export function Form({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched,
  values,
}) {
  return (
    <div className="form-wrapper">
      <form autoComplete="off">
        <div className="flex name-details">
          <label htmlFor="first-name-input">
            First Name *
                <input
              type="text"
              className="form-control"
              id="first-name-input"
              placeholder="Enter first name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="firstName"
              required
            />
            {touched.firstName && errors.firstName}
          </label>
          <label htmlFor="last-name-input">
            Last name *
                <input
              type="text"
              className="form-control"
              id="last-name-input"
              placeholder="Enter last name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="lastName"
              required
            />
            {touched.lastName && errors.lastName}
          </label>
          <label htmlFor="email">
            Email address *
              <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              required
            />
            {touched.email && errors.email}
          </label>
        </div>
        <div className="flex info-details">
          <label htmlFor="phone-input">
            Phone number *
                <input
              type="phonenumber"
              className="form-control"
              id="phone-input"
              placeholder="Enter phone number"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              name="phoneNumber"
              required
            />
            {touched.phoneNumber && errors.phoneNumber}
          </label>
          <label htmlFor="address-input">
            Address *
                <input
              type="text"
              className="form-control"
              id="address-input"
              placeholder="Enter address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              name="address"
              required
            />
            {touched.address && errors.address}
          </label>
          <label htmlFor="title-input">
            Title *
                <input
              type="text"
              className="form-control"
              id="title-input"
              placeholder="Enter title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              name="title"
              required
            />
            {touched.title && errors.title}
          </label>
        </div>
        <div className="column-flex summary">
          <label htmlFor="summary-input">
            Professional Summary *
          </label>
          <textarea rows="4" name="summary" onBlur={handleBlur} onChange={handleChange} value={values.summary}></textarea>
          {touched.summary && errors.summary}
        </div>
        <div className="column-flex summary">
          <label htmlFor="summary-input">
            Skills*
          </label>
          <SkillsTags />
        </div>
        <div>
          <button onClick={handleSubmit} type="button" className="btn btn-primary">
            Submit
            </button>
        </div>
      </form>
    </div>
  );
}
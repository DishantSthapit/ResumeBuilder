import './Form.scss';

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
        <form onSubmit={handleSubmit} autoComplete="off">
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
            <label htmlFor="summary-input">
              Professional Summary *
            <textarea  name="summary" onBlur={handleBlur} onChange={handleChange} value={values.summary}></textarea>
              {/* <input
                type="text"
                className="form-control"
                id="summary-input"
                placeholder="Enter Professional Summary"
                value={values.summary}
                onChange={handleChange}
                onBlur={handleBlur}
                name="summary"
                required
              /> */}
              {touched.summary && errors.summary}
            </label>
          </div>
          <div>
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
          <div>
            <label htmlFor="age">
              Age *
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="Enter age"
                value={values.age || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                name="age"
                min="0"
                required
              />
              {touched.age && errors.age}
            </label>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
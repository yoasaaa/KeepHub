import PropTypes from 'prop-types'

const FormRow = ({
  type,
  name,
  labelText,
  defaultValue,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 3,
}) => {
  const inputValue = value !== undefined ? value : defaultValue || ''
  const isControlled = value !== undefined

  if (type === 'textarea') {
    return (
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          {labelText || name}
        </label>
        <textarea
          id={name}
          name={name}
          className="form-textarea"
          {...(isControlled
            ? { value: inputValue }
            : { defaultValue: inputValue })}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
        />
      </div>
    )
  }

  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        {...(isControlled
          ? { value: inputValue }
          : { defaultValue: inputValue })}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

FormRow.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default FormRow

import PropTypes from 'prop-types'

const FormRowSelect = ({
  name,
  labelText,
  list,
  defaultValue = '',
  value,
  onChange,
  required = false,
}) => {
  const selectValue = value !== undefined ? value : defaultValue
  const isControlled = value !== undefined

  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className="form-select"
        {...(isControlled
          ? { value: selectValue }
          : { defaultValue: selectValue })}
        onChange={onChange}
        required={required}
      >
        {list.map((itemValue) => {
          return (
            <option key={itemValue} value={itemValue}>
              {itemValue}
            </option>
          )
        })}
      </select>
    </div>
  )
}

FormRowSelect.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  list: PropTypes.array.isRequired,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
}
export default FormRowSelect

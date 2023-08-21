
export const InputRecipeForm = (props) => {
  // eslint-disable-next-line react/prop-types
  const {name,value,handleChange,placeholder,type,classInput,classLabel,htmlFor,id,title}=props
  return (
    <>
     <label htmlFor={htmlFor} className={classLabel} >
        <h4>{title}</h4>
        </label>
        <input
        className={classInput}
        id={id}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        />
    </>
  )
}

import '@/assets/css/field.style.css';


const FieldComponent = ({type, title, placeholder, required}) =>{


    return(
        <div className={`field campo-${type}`}>
            <label>{title}</label>
            <input  
                placeholder={`${placeholder}...`}  
                required={required} 
                type={type}
            />
        </div>
    )
}

export default FieldComponent;
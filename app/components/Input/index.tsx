import type { inputType } from "~/utils/enums/inputTypeEnum";
import { Close } from "../images/close";
  
interface InputProps {
    type: inputType;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    required?: boolean;
    id: string;
}

export const Input = ({type, label, onChange, value, required, id}: InputProps) => {
    const clearInput = () => {
        onChange({ target: { value: '', name: id } } as React.ChangeEvent<HTMLInputElement>)
    }
    
    return (
        <div className="inputWrapper">
            <input placeholder={label} className='inputWrapper__input' name={id} type={type} id={label} required={required} onChange={onChange} value={value} />
            <Close className="inputWrapper__icon" onClick={clearInput} />
        </div>
    )
}
import { Input } from "../Input"
import { inputType } from "~/utils/enums/inputTypeEnum";

interface InputType {
    type: string;
    label: string;
    id: string;
    defaultValue?: string;
    required?: boolean;
}
interface Props {
    inputs: Array<InputType>
    formState: { [key: string]: string | undefined }
    setInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const GeneratedInputs = ({ inputs, formState, setInputValue }: Props) => {
    return (
        <>
            {inputs.map((input) => (
                <Input onChange={setInputValue} 
                       key={input.id} 
                       type={inputType[input.type as keyof typeof inputType]} 
                       value={formState[input.id] || ''} 
                       label={input.label} 
                       required={input.required} 
                       id={input.id}
                />
            ))}
        </>
    )
}
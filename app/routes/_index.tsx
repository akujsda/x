import type { V2_MetaFunction } from "@remix-run/react";
import { useEffect, useState } from "react";
import { GeneratedInputs } from "~/components/GeneratedInputs";
import { Toast } from "~/components/Toast";
import styles from "../index.css";
export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};


export const links = () => [
    { rel: "stylesheet", href: styles },
  ];

const inputs = [
  {
      id: 'first_name',
      type: 'inputText',
      label: 'First Name',
      defaultValue: 'Some first name'
  },
 {
      id:  'last_name',
      type: 'inputText',
      label: 'Last Name'
  },
  {
      id: 'email',
      type: 'inputEmail',
      label: 'Email',
      required: true
  },
  {
      id: 'password',
      type: 'inputPassword',
      label: 'Password',
      required: true
  },
]

export default function Index() {
  // const [isSubmitted, setIsSubmitted] = useState(false)
  const [formState, setFormState] = useState<{ [key: string]: string | undefined }>({})
  const [isToastVisible, setIsToastVisible] = useState(false)
  const setInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => ({
          ...prev,
          [e.target.name]: e.target.value
      }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setIsToastVisible(true)
      console.log(formState)
  }

  useEffect(() => {
      inputs.forEach((input) => {
          if (input.defaultValue) {
              setInputValue({ target: { value: input.defaultValue, name: input.id } } as React.ChangeEvent<HTMLInputElement>)
          }
      })
  }, [])

  useEffect(() => {
  if (!isToastVisible) return

  const timeout = setTimeout(() => {
      setIsToastVisible(false)
  }, 3000)

  return ()=> clearTimeout(timeout)
  }, [isToastVisible])
  

  return (
    <div className="formPage">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <h1 className="form__title">Авторизация</h1>
          <p className="form__subTitle">Для доступа к личному кабинету вашей компании авторизуйтесь на сайте</p>
        </div>
        <GeneratedInputs formState={formState} setInputValue={setInputValue} inputs={inputs}/>
        <button className="form__button" type="submit">Войти</button>
      </form>
      {isToastVisible && <Toast className="formPage__toast">
        <p>Успех!</p>
      </Toast>}
    </div>
  );
}

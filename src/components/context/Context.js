import { createContext, useState } from "react"

export const AppContext = createContext()

export function AppContextProvider({ children }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isMonthly, setIsMonthly] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [selected_AddOns, setSelected_AddOns] = useState([])
  const [step, setStep] = useState(1)
  const finalStep = step === 5;


  const completedStep1 =
    name.trim() !== "" &&
    email.trim() !== "" &&
    email.includes("@") &&
    phone.trim() !== "";

  const completedStep2 = selectedPlan !== null;

  const resetButton = () => {
    setName('');
    setEmail('');
    setPhone('');
    setStep(1);
    setIsMonthly(false);
    setSelectedPlan('');
    setSelected_AddOns([]);
  }


  return (
    <AppContext.Provider value={{
      name,
      setName,
      email,
      setEmail,
      phone,
      setPhone,
      isMonthly,
      setIsMonthly,
      selectedPlan,
      setSelectedPlan,
      selected_AddOns,
      setSelected_AddOns,
      step,
      setStep,
      completedStep1,
      completedStep2,
      finalStep,
      resetButton,
    }}>
      {children}
    </AppContext.Provider>
  )
}



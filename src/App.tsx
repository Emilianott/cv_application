import { Cv } from './Components/Cv'
import { Form } from './Components/Form'
import { useEffect, useState } from 'react'

export interface Data {
    name: string
    profession: string
    aboutYou: string
    nameInstitute: string
    diploma: string
    finishedDate: string
    pNumber: number
    pEmail: string
    pWebsite: string
    pAdrres: string
    wCompany: string
    wStart: string
    wEnd: string
    wJob: string
}
export interface formProps {
    form: Data
    setForm?: React.Dispatch<React.SetStateAction<Data>>
}

function App(): JSX.Element {

  
  const [form, setForm] = useState<Data>({
    name: '',
    profession: '',
        aboutYou: '',
        nameInstitute: '',
        diploma: '',
        finishedDate: '',
        pNumber: 0,
        pEmail: '',
        pWebsite: '',
        pAdrres: '',
        wCompany: '',
        wStart: '',
        wEnd: '',
        wJob: '',
      })
    
        
       
     
    

    return (
        <main className='w-full flex justify-center min-h-screen '>
            <Form
                form={form}
                setForm={setForm}
            />
            <Cv
                form={form}
                setForm={setForm}
            />
        </main>
    )
}

export default App

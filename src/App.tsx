
import { Cv } from "./Components/Cv"
import { Form } from "./Components/Form"
import {useState} from "react"

interface Data {
  name:string,
  profession:string,
  aboutYou:string,
  nameInstitute:string,
  diploma:string,
  finishedDate:string
  pNumber:number,
  pEmail:string,
  pWebsite:string,
  pAdrres:string,
  wCompany:string,
  wStart:string,
  wEnd:string,
  wJob:string
}



function App():JSX.Element {
  
  const data:Data = {
    name:"",
    profession:"",
    aboutYou:"",
    nameInstitute:"",
    diploma:"",
    finishedDate:"",
    pNumber:0,
    pEmail:"",
    pWebsite:"",
    pAdrres:"",
    wCompany:"",
    wStart:"",
    wEnd:"",
    wJob:""
  
  }
  const [form, setForm] = useState<Data>(data)




 

  return (
    <main className="w-full flex justify-center min-h-screen ">
    <Form/>
    <Cv/>
     
    </main>
  )
}

export default App

import { useState } from "react"

export const Form = (): JSX.Element => {
    const [basicInfo, setBasicInfo] = useState<boolean>(false)

    const handleBasicInfo=():void=>{
      setBasicInfo(!basicInfo)
    }

    



    return (
        <aside className='w-2/6 border border-black m-8 bg-gray-800 text-white'>
            <div className='w-full h-auto flex flex-col p-3'>

              
                <h2 onClick={handleBasicInfo} className='font-extrabold pl-10 text-xl mb-2 hover:scale-[1.3] w-full origin-left pointer hover:p-x cursor-pointer transition ease-in-out'>
                    Basic Information
                </h2>
                <hr className='bg-black border border-yellow-400 w-3/4 ml-8' />

                {basicInfo && 
                <form
                    className='w-full h-auto flex flex-col   '
                    onSubmit={(e) => e.preventDefault()}>
                    <label
                        htmlFor='name'
                        className='mt-4 pl-5 ml-1 font-extrabold  '>
                        Name
                    </label>
                    <input
                        id='name'
                        type='text'
                        placeholder='Enter your name '
                        className='border border-black w-1/2 rounded-xl pl-3 ml-4 '
                    />
                    <label
                        htmlFor='profession'
                        className='mt-6 pl-5 font-extrabold  '>
                        Profession
                    </label>
                    <input
                        id='profession'
                        type='text'
                        placeholder='Enter your profession '
                        className='border border-black w-1/2 rounded-xl pl-1 ml-4 '
                    />
                    <label
                        htmlFor='aboutyou '
                        className='mt-6 pl-5 font-extrabold '>
                        About you
                    </label>
                    <textarea
                        className='w-3/4 mb-5 ml-4 '
                        placeholder="Briefly describe yourself"
                        name='aboutyou'
                        id='aboutyou'
                        cols={1}
                        rows={2}></textarea>
                    <div className=" flex justify-center items-center mt-10 mb-8">
                    <button className='w-1/2 border border-black  hover:scale-110 hover:bg-yellow-400 bg-yellow-300 text-black mt-10 transition ease-in-out  rounded-xl'>
                        Save
                    </button>
                    </div>
                </form>
                  }
            </div>
            <div className='w-full h-auto'>
                <h2  className='font-extrabold  pl-10 text-xl mt-5 mb-2  hover:scale-[1.3] w-full origin-left pointer hover:p-x cursor-pointer transition ease-in-out'>
                    Education
                </h2>
                <hr className='bg border border-yellow-400 w-3/4 ml-8' />
                <form
                    className='mt-5 flex flex-col'
                    action=''>
                    <label
                        htmlFor='institute'
                        className='mt-4 pl-8 ml-1 font-extrabold  '>
                        Name of institution
                    </label>
                    <input
                        id='institute'
                        type='text'
                        placeholder='Name of the institution'
                        className='border border-black w-1/2 rounded-xl pl-1 ml-7 '
                    />

                    <label
                        htmlFor='Diploma'
                        className='mt-6 pl-8 ml-1 font-extrabold  '>
                        Diploma
                    </label>
                    <input
                        id='Diploma'
                        type='text'
                        placeholder='Enter your diploma'
                        className='border border-black w-1/2 rounded-xl pl-5 ml-7 '
                    />
                    <label
                        htmlFor='date'
                        className='mt-6 pl-8 ml-1 font-extrabold  '>
                        Finished Date
                    </label>
                    <input
                        id='date'
                        type='date'
                        placeholder='Enter your name '
                        className='border border-black w-1/2 rounded-xl pl-5 ml-7 text-black'
                    />
                    <div className=" flex justify-center items-center mt-16">

                    <button className='w-1/2 border border-black   mb-5 hover:scale-110 bg-yellow-300 text-black hover:bg-yellow-400 transition ease-in-out  rounded-xl'>
                        Save
                    </button>
                    </div>
                </form>
            </div>
        </aside>
    )
}

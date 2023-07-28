import { useState } from 'react'

export const Form = (): JSX.Element => {
    const [basicInfo, setBasicInfo] = useState<boolean>(true)
    const [education, setEducation] = useState<boolean>(false)
    const [personalInfo, setPersonalInfo] = useState<boolean>(false)
    const [workExperience, setWorkExperience] = useState<boolean>(false)

    const handleBasicInfo = (value: number): void => {
        if (value === 1) {
            setBasicInfo(!basicInfo)
        } else if (value === 2) {
            setEducation(!education)
        } else if (value === 3) {
            setPersonalInfo(!personalInfo)
        }else if (value === 4){
            setWorkExperience(!workExperience)
        }
    }

    return (
        <aside className='w-2/6 border border-black m-8 bg-gray-800 text-white shadow rounded-xl '>
            <div className='w-full h-auto flex flex-col p-3 justify-center items-center '>
                <h2
                    onClick={() => {
                        handleBasicInfo(1)
                    }}
                    className='font-extrabold mt-8 text-center text-xl mb-2 hover:scale-[1.3] w-full  pointer hover:p-x cursor-pointer transition ease-in-out'>
                    Basic Information
                </h2>
                <hr className='bg-black border border-yellow-400 w-3/4 ' />

                {basicInfo && (
                    <form
                        className={`w-full h-auto flex flex-col justify-center items-center text-center `}
                        onSubmit={(e) => e.preventDefault()}>
                        <label
                            htmlFor='name'
                            className='mt-4   font-extrabold  '>
                            Name
                        </label>
                        <input
                            id='name'
                            type='text'
                            placeholder='Enter your name '
                            className='border border-black w-1/2 rounded-xl text-center text-black'
                        />
                        <label
                            htmlFor='profession'
                            className='mt-6  font-extrabold  '>
                            Profession
                        </label>
                        <input
                            id='profession'
                            type='text'
                            placeholder='Enter your profession '
                            className='border border-black w-1/2 rounded-xl text-center text-black'
                        />
                        <label
                            htmlFor='aboutyou '
                            className='mt-6  font-extrabold '>
                            About you
                        </label>
                        <textarea
                            className='w-1/2 mb-5  text-center text-black'
                            placeholder='Briefly describe yourself '
                            name='aboutyou'
                            id='aboutyou'
                            cols={1}
                            rows={2}></textarea>
                        <div className=' flex justify-center items-center w-full mt-10 mb-8'>
                            <button className='w-1/2 border border-black  hover:scale-110 hover:bg-yellow-400 bg-yellow-300 text-black mt-6 transition ease-in-out  rounded-xl'>
                                Save
                            </button>
                        </div>
                    </form>
                )}
            </div>
            <div className='w-full h-auto p-3 flex flex-col justify-center items-center '>
                <h2
                    onClick={() => {
                        handleBasicInfo(2)
                    }}
                    className='font-extrabold text-center  text-xl mt-5 mb-2  hover:scale-[1.3] w-full  pointer hover:p-x cursor-pointer transition ease-in-out'>
                    Education
                </h2>
                <hr className='bg border border-yellow-400 w-3/4 ' />
                {education && (
                    <form
                        className='mt-5 flex flex-col w-full justify-center items-center'
                        action=''>
                        <label
                            htmlFor='institute'
                            className='mt-4  ml-1 font-extrabold  '>
                            Name of institution
                        </label>
                        <input
                            id='institute'
                            type='text'
                            placeholder='Name of the institution'
                            className='border border-black w-1/2 rounded-xl text-black text-center'
                        />

                        <label
                            htmlFor='Diploma'
                            className='mt-6  ml-1 font-extrabold  '>
                            Diploma
                        </label>
                        <input
                            id='Diploma'
                            type='text'
                            placeholder='Enter your diploma'
                            className='border border-black w-1/2 rounded-xl  text-black text-center'
                        />
                        <label
                            htmlFor='date'
                            className='mt-6   font-extrabold  '>
                            Finished Date
                        </label>
                        <input
                            id='date'
                            type='date'
                            placeholder='Enter your name '
                            className='border border-black w-1/2 rounded-xl   text-black text-center'
                        />
                        <div className=' flex justify-center w-full items-center mt-16'>
                            <button className='w-1/2 border border-black   mb-5 hover:scale-110 bg-yellow-300 text-black hover:bg-yellow-400 transition ease-in-out  rounded-xl'>
                                Save
                            </button>
                        </div>
                    </form>
                )}
            </div>

            <div className='w-full h-auto p-3 flex flex-col justify-center items-center '>
                <h2
                    onClick={() => handleBasicInfo(3)}
                    className='font-extrabold text-center  text-xl mt-5 mb-2  hover:scale-[1.3] w-full  pointer hover:p-x cursor-pointer transition ease-in-out'>
                    Personal Information
                </h2>
                <hr className='bg border border-yellow-400 w-3/4 ' />
                {personalInfo && (
                    <form
                        className='mt-5 flex flex-col w-full justify-center items-center'
                        action=''>
                        <label
                            htmlFor='phone'
                            className='mt-6   font-extrabold  '>
                            Phone Number
                        </label>
                        <input
                            id='phone'
                            type='tel'
                            placeholder='Enter your Phone Number'
                            className='border border-black w-1/2 rounded-xl   text-black text-center'
                        />

                        <label
                            htmlFor='email'
                            className='mt-6   font-extrabold  '>
                            Email Address
                        </label>
                        <input
                            id='email'
                            type='email'
                            placeholder='Enter your Email Address'
                            className='border border-black w-1/2 rounded-xl   text-black text-center'
                        />

                        <label
                            htmlFor='website'
                            className='mt-6   font-extrabold  '>
                            Website
                        </label>
                        <input
                            id='website'
                            type='text'
                            placeholder='Enter your Website'
                            className='border border-black w-1/2 rounded-xl   text-black text-center'
                        />

                        <label
                            htmlFor='address'
                            className='mt-6   font-extrabold  '>
                            Address
                        </label>
                        <input
                            id='adress'
                            type='text'
                            placeholder='Enter your Address'
                            className='border border-black w-1/2 rounded-xl   text-black text-center'
                        />
                        <div className=' flex justify-center w-full items-center mt-16'>
                            <button className='w-1/2 border border-black   mb-5 hover:scale-110 bg-yellow-300 text-black hover:bg-yellow-400 transition ease-in-out  rounded-xl'>
                                Save
                            </button>
                        </div>
                    </form>
                )}
            </div>
            <div className='w-full h-auto p-3 flex flex-col justify-center items-center '>
                <h2
                    onClick={() => handleBasicInfo(4)}
                    className='font-extrabold text-center  text-xl mt-5 mb-2  hover:scale-[1.3] w-full  pointer hover:p-x cursor-pointer transition ease-in-out'>
                    Work Experience
                </h2>
                <hr className='bg border border-yellow-400 w-3/4 ' />
                {workExperience && 
                <form
                    className='mt-5 flex flex-col w-full justify-center gap-5 items-center'
                    action=''>
                    <label
                        htmlFor='company'
                        className='mt-6   font-extrabold  '>
                        Company Name
                    </label>
                    <input
                        id='company'
                        type='text'
                        placeholder='Enter the Company Name'
                        className='border border-black w-1/2 rounded-xl   text-black text-center'
                    />
                    <div className='w-full flex justify-center '>
                        <div className='pl-28  flex flex-col w-1/2 '>
                            <label
                                htmlFor='company'
                                className='mt-6 pl-14  font-extrabold  '>
                                Start
                            </label>
                            <input
                                id='company'
                                type='date'
                                placeholder='Enter the Company Name'
                                className='border border-black w-36 rounded-xl   text-black text-center'
                            />
                        </div>
                        <div className=' pl-5 flex flex-col w-1/2 '>
                            <label
                                htmlFor='company'
                                className='mt-6 pl-14  font-extrabold  '>
                                End
                            </label>
                            <input
                                id='company'
                                type='date'
                                placeholder='Enter the Company Name'
                                className='border border-black w-36 rounded-xl   text-black text-center'
                            />
                        </div>
                    </div>
                    <label
                        htmlFor='job'
                        className='mt-6  font-extrabold '>
                        Job description
                    </label>
                    <textarea
                        className='w-1/2 mb-5  text-center text-black'
                        placeholder='Briefly describe your job '
                        name='job'
                        id='job'
                        cols={1}
                        rows={2}></textarea>

                    <div className=' flex justify-center w-full items-center mt-5 mb-10'>
                        <button className='w-1/2 border border-black   mb-5 hover:scale-110 bg-yellow-300 text-black hover:bg-yellow-400 transition ease-in-out  rounded-xl'>
                            Save
                        </button>
                    </div>
                </form>}
            </div>
        </aside>
    )
}

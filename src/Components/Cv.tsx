import { Education } from './Education'
import { PersonDetails } from './PersonDetails'
import { WorkExperience } from './WorkExperience'
import { formProps } from '../App'

export const Cv = ({ form, setForm }: formProps): JSX.Element => {
    return (
        <div className='w-2/3  mx-6  flex py-8 rounded-xl'>
            <div className='border bg-gray-800  border-black h-full w-1/3 rounded-l-xl'>
                <div className='flex justify-center items-center'>
                    <img
                        className='w-64 h-64 rounded-[50%]'
                        src='src\assets\avatar.png'
                        alt='avatar'
                    />
                </div>

                <div>
                    <h2 className='text-white text-2lg font-bold mt-12 mx-6'>
                        {' '}
                        EDUCATION{' '}
                    </h2>
                    <hr className='  border-1 border-yellow-400 rounded-full mt-2 mx-6' />
                    <Education />
                    <Education />
                </div>
                <div>
                    <h2 className='text-white text-2lg font-bold mt-12 mx-6'>
                        {' '}
                        Personal Information{' '}
                    </h2>
                    <hr className=' bg-black border-1 border-yellow-400 rounded-full mt-2 mx-6' />
                </div>
                <div className='h-auto'>
                    <PersonDetails />
                </div>
            </div>
            <div className='w-2/3 border bg-gray-300 rounded-r-xl'>
                <div className='w-full border border-black h-28 mt-12 bg-yellow-400 flex justify-center flex-col pl-12'>
                    <h1 className='text-2xl font-bold'>
                        Emiliano Tejeda Trinidad
                    </h1>
                    <p className='text-1xl pt-2 '>
                        <span className='font-semibold'>Profession</span>:
                        {form.diploma}
                    </p>
                </div>
                <div className='w-full h-28 mt-8 px-12'>
                    <h2 className='pl-1 mb-2 font-extrabold'>ABOUT ME </h2>
                    <hr className=' border-2 border-yellow-400 rounded-full' />
                    <p className='mt-2 pl-1'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Odit odio provident cumque recusandae at vel ea
                        natus, sint, adipisci culpa accusantium{''}
                    </p>
                </div>
                <div className='w-full  mt-12 px-12 h-auto '>
                    <h2 className='pl-1 mb-2 font-extrabold '>
                        Work Experience{' '}
                    </h2>
                    <hr className='  border-2 border-yellow-400 rounded-full ' />
                    <WorkExperience />
                    <WorkExperience />
                </div>

                <div className='w-full mb-8 mt-8 px-12 h-auto'>
                    <h2 className='pl-1 mb-2 font-extrabold'>
                        SOFTWARE SKILL{' '}
                    </h2>
                    <hr className='border-2 border-yellow-400 rounded-full ' />
                </div>
            </div>
        </div>
    )
}

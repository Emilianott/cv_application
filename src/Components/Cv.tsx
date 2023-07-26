import { Education } from './Education'
import { WorkExperience } from './WorkExperience'

export const Cv = (): JSX.Element => {
    return (
        <div className='w-2/3 border-black border m-6 flex '>
            <div className='border bg-gray-800  border-black h-full w-1/3'>
                <div className='flex justify-center items-center'>
                    <img
                        className='w-64 h-64 rounded-[50%]'
                        src='src\assets\avatar.png'
                        alt='avatar'
                    />
                </div>

                <div>
                <h2 className="text-white text-2lg font-bold mt-12 mx-6"> EDUCATION </h2>
                <hr className=' bg-black border-1 border-yellow-400 rounded-full mt-2 mx-6' />
                    <Education/>
                    <Education/>
                    
                </div>
                <div>
                <h2 className="text-white text-2lg font-bold mt-12 mx-6"> PREFERENCE </h2>
                <hr className=' bg-black border-1 border-yellow-400 rounded-full mt-2 mx-6' />

                </div>


            </div>
            <div className='w-2/3 border bg-gray-300'>
                <div className='w-full border border-black h-28 mt-12 bg-yellow-400 flex justify-center flex-col pl-12'>
                    <h1 className='text-2xl'>Emiliano Tejeda Trinidad</h1>
                    <p className='text-1xl'>Profesion: Software Developer</p>
                </div>
                <div className='w-full h-28 mt-8 px-12'>
                    <h2 className='pl-1 mb-2 font-bold'>ABOUT ME </h2>
                    <hr className=' bg-black border-1 border-gray-800 rounded-full' />
                    <p className='mt-2 pl-1'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Odit odio provident cumque recusandae at vel ea
                        natus, sint, adipisci culpa accusantium{''}
                    </p>
                </div>
                <div className='w-full  mt-12 px-12 h-auto '>
                    <h2 className='pl-1 mb-2 font-bold '>Work Experience </h2>
                    <hr className=' bg-black border-1 border-gray-800 rounded-full ' />
                    <WorkExperience />
                    <WorkExperience />
                </div>

                <div className='w-full mb-8 mt-8 px-12 h-auto'>
                    <h2 className='pl-1 mb-2 font-bold'>SOFTWARE SKILL </h2>
                    <hr className=' bg-black border-1 border-gray-800 rounded-full ' />
                </div>
            </div>
        </div>
    )
}

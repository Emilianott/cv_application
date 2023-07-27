export const PersonDetails = (): JSX.Element => {
    return (
        <div className='mx-6 h-auto text-white mb-5  mt-8'>
            <h2 className='font-bold text-yellow-400 pl-5'>Phone: </h2>
            <p className='w-full border border-black p-1 bg-black  bg-opacity-[0.30] rounded-3xl pl-5'>
                82255-5444-551
            </p>

            <h2 className='pt-2 font-bold text-yellow-400 pl-5'>Email: </h2>
            <p className='w-full border border-black p-1 bg-black  bg-opacity-[0.30] rounded-3xl pl-5'>
                asdujasd@gmail.com
            </p>

            <h2 className='pt-2 font-bold text-yellow-400 pl-5'>Website: </h2>
            <p className='w-full border border-black p-1 bg-black  bg-opacity-[0.30] rounded-3xl pl-5'>
                www.myweb.com
            </p>

            <h2 className='pt-2 font-bold text-yellow-400 pl-5'>Address: </h2>
            <p className='w-full border border-black p-1 bg-black  bg-opacity-[0.30] rounded-3xl pl-5'>
                av los Palitos #81
            </p>
        </div>
    )
}

import React from 'react'

const Contect = ({ IsContect }) => {
    return (
        <>
            {IsContect &&
                <main className='h-[580px]'>
                    <h1 className='text-6xl font-bold text-center'>Contect</h1>

                    <div className='h-[400px] w-[350px] flex flex-col gap-8 mt-16 m-auto'>
                        <div>
                            <label className='text-2xl' htmlFor="name">Name </label >
                            <input className='border-2  border-black px-2 py-2 w-[100%]' id='name' type="text" placeholder='eg : name...' />
                        </div>

                        <div>
                            <label className='text-2xl' htmlFor="email">Email </label >
                            <input className='border-2  border-black px-2 py-2 w-[100%]' id='email' type="email" placeholder='eg : email...' />
                        </div>

                        <div>
                            <label className='text-2xl' htmlFor="number">Number </label >
                            <input className='border-2  border-black px-2 py-2 w-[100%]' id='number' type="number" placeholder='eg : number...' />
                        </div>

                        <button className='bg-[crimson] text-white px-10 py-2 font-bold rounded border-2 border-transparent duration-500
                                         hover:bg-white hover:text-[crimson] hover:border-[crimson]'
                        >Contect</button>
                    </div>

                </main>
            }
        </>
    )
}

export default Contect

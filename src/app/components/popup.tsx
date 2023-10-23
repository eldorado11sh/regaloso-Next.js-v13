"use client"
import React, { useEffect, useState } from 'react'
import { CrossIcon } from './icons'
// import PrimaryBtn from './PrimaryBtn'

type Props = {
  onCrossClick?: () => void;
  onSubmitClick?: () => void;
}

const Popup: React.FC<Props> = ({ onCrossClick, onSubmitClick }) => {
  let [width, setWidth] = useState<number>()

  useEffect(() => {
    setWidth(width = window.innerWidth)
    window.addEventListener('resize', () => setWidth(width = window.innerWidth))
    return () => window.removeEventListener('resize', () => setWidth(width = window.innerWidth))
  }, [])

  return (
    <>
      <div className='fixed min-h-screen w-full flex md:items-center justify-center bg-black/70 backdrop-blur-lg inset-0 z-[999] overflow-y-auto'>
        <div className='md:pb-0 pb-20 md:mt-0 mt-20'>
          <div className="container mx-auto bg-white xl:px-[200px] md:px-10 px-4 md:py-[90px] py-10 rounded-[20px] shadow-card-shadow relative">
            <div className="flex flex-wrap items-center justify-between">
              <div className="md:text-center">
                <h2 className='text-titles md:text-[64px] text-[32px] font-semibold'>Spedizione</h2>
              </div>
              <button className='bg-transparent outline-none focus:outline-none md:absolute top-[53px] right-[52px] md:w-auto md:h-auto w-7 h-7' onClick={onCrossClick}>
                <CrossIcon width={width! > 768 ? 54 : 28} height={width! > 768 ? 54 : 28} />
              </button>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:my-28 my-10 w-full md:gap-[100px] gap-12'>
                <div className='flex flex-col'>
                  <label className='text-titles text-[22px] font-semibold mb-[10px]'>Nome</label>
                  <input type="text" className='border border-[#363636] h-[51px] text-titles rounded-[10px] px-5 py-[5px] w-full' placeholder='II tuo nome' />
                </div>
                <div className='flex flex-col'>
                  <label className='text-titles text-[22px] font-semibold mb-[10px]'>Cognome</label>
                  <input type="text" className='border border-[#363636] h-[51px] text-titles rounded-[10px] px-5 py-[5px] w-full' placeholder='I tuo cognome' />
                </div>
                <div className='flex flex-col'>
                  <label className='text-titles text-[22px] font-semibold mb-[10px]'>Nazione</label>
                  <input type="text" className='border border-[#363636] h-[51px] text-titles rounded-[10px] px-5 py-[5px] w-full' placeholder='Inserisci città' />
                </div>
                <div className='flex flex-col'>
                  <label className='text-titles text-[22px] font-semibold mb-[10px]'>Città</label>
                  <input type="text" className='border border-[#363636] h-[51px] text-titles rounded-[10px] px-5 py-[5px] w-full' placeholder='Inserisci città' />
                </div>
                <div className='grid grid-cols-2 gap-12'>
                  <div className='flex flex-col'>
                    <label className='text-titles text-[22px] font-semibold mb-[10px]'>Provincia</label>
                    <select className='border border-[#363636] h-[51px] text-titles rounded-[10px] pl-2 py-[5px] w-full'>
                      <option value="province 1">province 1</option>
                      <option value="province 2">province 2</option>
                      <option value="province 3">province 3</option>
                    </select>
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-titles text-[22px] font-semibold mb-[10px]'>Cap</label>
                    <input type="text" className='border border-[#363636] h-[51px] text-titles rounded-[10px] px-5 py-[5px] w-full' placeholder='Inserisci cap' />
                  </div>
                </div>
                <div className='flex flex-col'>
                  <label className='text-titles text-[22px] font-semibold mb-[10px]'>Via</label>
                  <input type="text" className='border border-[#363636] h-[51px] text-titles rounded-[10px] px-5 py-[5px] w-full' placeholder='Inserisci via' />
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                {/* <PrimaryBtn onClick={onSubmitClick}>Pagamento Spedizione</PrimaryBtn> */}
                <button className='outline-none focus:outline-none py-3 px-[50px] rounded-3xl text-white font-semibold text-lg bg-[#0ACF83]' onClick={onSubmitClick}>Pagamento Spedizione</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Popup

import classNames from 'classnames'
import styles from './page.module.scss'
import Image from 'next/image'
import CompleteImage from '../../assets/logged3.png'

export default function CompleteSubscription() {
  return (
    <main className={classNames('justify-center', styles.main)}>
      <div className='w-[70%] flex flex-col items-center gap-[50px] max-[768px]:w-full'>
        <div className='text-[64px] font-semibold leading-[89px] text-center max-[991px]:text-[44px] max-[768px]:leading-[70px] max-[475px]:text-[32px] max-[475px]:leading-[50px]'>
          <span className='text-[#0ACF83]'>Grazie!!</span> <br />
          Hai acquistato 100 sottoscrizioni!
        </div>
        <Image src={CompleteImage} alt='Complete' />
        <div className='flex flex-col items-center'>
          <p className='text-[34px] font-normal leading-[89px] max-[768px]:text-[28px] max-[768px]:leading-[50px] text-center'>inizia a farti dei regalarti</p>
          <p className='text-[20px] font-normal text-[#0ACF83] underline'>torna alla home</p>
        </div>
      </div>
    </main>
  )
}
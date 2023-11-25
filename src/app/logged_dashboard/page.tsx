import styles from './page.module.scss'
import Image from "next/image";
import LoggedOne from '../../assets/logged1.png';
import LoggedTwo from '../../assets/logged2.png';
import LoggedThree from '../../assets/logged3.png';
import classNames from 'classnames';

export default function LoggedDashboard() {
  return (
    <main className={classNames("text-[#363636] dark:text-[#F3F3F3]", styles.main)}>
      <div className='flex flex-col gap-8 items-center w-full'>
        <div className={styles.title}>Regaloso</div>
        <div className={styles.subtitle}>Come Funziona?</div>
        <div className={styles.container}>

          <div className='relative rounded-[20px] shadow-normal py-6 dark:bg-[#2B2B2B]'>
            <div className={classNames(styles.indexMark)}>1</div>
            <div className='w-4/5 m-auto flex items-center justify-between max-[768px]:flex-col max-[768px]:py-12 max-[768px]:gap-[50px] max-[475px]:py-4 max-[475px]:w-full max-[475px]:px-5 max-[475px]:gap-0'>
              <div className='flex flex-col gap-[20px] w-1/2 max-[991px]:w-3/5 max-[768px]:w-full'>
                <p className='text-[44px] leading-[59px] font-semibold max-[991px]:text-[34px]'>Pubblicando dei regali guadagni <span className='text-[#0ACF83]'>3 sottoscrizioni</span></p>
                <p className='text-[22px] font-light leading-[41px] max-[991px]:text-[18px]'>Primo step, semplice e veloce, tutto gratuito</p>
              </div>
              <Image src={LoggedOne} alt='loggedOne' width={316} className='max-[991px]:w-1/3 max-[768px]:w-1/2 max-[475px]:w-full' />
            </div>
          </div>

          <div className='relative rounded-[20px] shadow-normal py-6 dark:bg-[#2B2B2B]'>
            <div className={classNames(styles.indexMark)}>2</div>
            <div className='w-4/5 m-auto flex items-center justify-between max-[768px]:flex-col max-[768px]:py-12 max-[768px]:gap-[50px] max-[475px]:py-4 max-[475px]:w-full max-[475px]:px-5 max-[475px]:gap-5'>
              <div className='flex flex-col gap-[20px] w-1/2 max-[991px]:w-3/5 max-[768px]:w-full'>
                <p className='text-[44px] leading-[59px] font-semibold max-[991px]:text-[34px]'>Quante <span className='text-[#0ACF83]'>sottoscrizioni </span> posso avere?</p>
                <p className='text-[22px] font-light leading-[41px] max-[991px]:text-[18px]'>10 sottoscrizioni mensili, tutto il resto lo guadagni con le pubblicazioni!</p>
              </div>
              <Image src={LoggedTwo} alt='loggedOne' width={400} className='max-[991px]:w-1/3 max-[768px]:w-1/2 max-[475px]:w-full' />
            </div>
          </div>

          <div className='relative rounded-[20px] shadow-normal py-6 dark:bg-[#2B2B2B]'>
            <div className={classNames(styles.indexMark)}>3</div>
            <div className='w-4/5 m-auto flex items-center justify-between max-[768px]:flex-col max-[768px]:py-12 max-[768px]:gap-[50px] max-[475px]:py-4 max-[475px]:w-full max-[475px]:px-5 max-[475px]:gap-0'>
              <div className='flex flex-col gap-[20px] w-3/5 max-[768px]:w-full'>
                <p className='text-[44px] leading-[59px] font-semibold max-[991px]:text-[34px]'>Ho terminato le <span className='text-[#0ACF83]'>sottoscrizioni</span></p>
                <p className='text-[24px] font-light leading-[41px] max-[991px]:text-[18px]'>
                  <span className='font-bold'>Keep calm,</span> nel caso avessi terminato le sottoscrizioni gratuite mensili <span className='font-bold'>(10)</span>, 
                  puoi acquistare un abbonamento mensile di <span className='font-bold text-[#0ACF83]'>100 sottoscrizioni </span>
                  (oltre le <span className='font-bold'>10 regalate da Regaloso</span>)
                </p>
              </div>
              <Image src={LoggedThree} alt='loggedOne' width={271} className='max-[991px]:w-1/3 max-[768px]:w-1/2 max-[475px]:w-full' />
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
import styles from './page.module.scss'
import HomeCarousel from '../components/carousel'
import HomeCategory from '../components/homeCategory'
import ItemCard from '../components/itemCard'

const gifts = [
  {
    id: 1,
    title: 'Cuffie Wireless', 
    description: 'Regalo cuffie Jabra xts 5 in zona Roma, mai usate, disposto anche a spedirle',
    expireTime: '02:20:35',
    favourite: false, 
    status: true,
    img: require('../../assets/CuffieWireless.png'), 
    background: false
  }, 
  {
    id: 2,
    title: 'Smartwatch', 
    description: 'Regalo smartwatch usato ma perfettamente funzionante',
    expireTime: '02:20:35',
    favourite: true, 
    status: false ,
    img: require('../../assets/Smartwatch.png'), 
    background: false
  }, 
  {
    id: 3,
    title: 'Custodia airpod seconda generazione', 
    description: 'Regalo custodia airpods perfettamente funzionante',
    expireTime: '02:20:35',
    favourite: false, 
    status: true,
    img: require('../../assets/Custopia.png'), 
    background: true
  }, 
  {
    id: 4,
    title: 'Cuffie Wireless', 
    description: 'Regalo cuffie Jabra xts 5 in zona Roma, mai usate, disposto anche a spedirle',
    expireTime: '02:20:35',
    favourite: false, 
    status: true,
    img: require('../../assets/CuffieWireless.png'), 
    background: false
  }, 
  {
    id: 5,
    title: 'Smartwatch', 
    description: 'Regalo smartwatch usato ma perfettamente funzionante',
    expireTime: '02:20:35',
    favourite: true, 
    status: false,
    img: require('../../assets/Smartwatch.png'), 
    background: false
  }, 
  {
    id: 6,
    title: 'Custodia airpod seconda generazione', 
    description: 'Regalo custodia airpods perfettamente funzionante',
    expireTime: '02:20:35',
    favourite: false, 
    status: true,
    img: require('../../assets/Custopia.png'), 
    background: true
  },
  {
    id: 7,
    title: 'Cuffie Wireless', 
    description: 'Regalo cuffie Jabra xts 5 in zona Roma, mai usate, disposto anche a spedirle',
    expireTime: '02:20:35',
    favourite: false, 
    status: true,
    img: require('../../assets/CuffieWireless.png'), 
    background: false
  }, 
  {
    id: 8,
    title: 'Smartwatch', 
    description: 'Regalo smartwatch usato ma perfettamente funzionante',
    expireTime: '02:20:35',
    favourite: true, 
    status: false,
    img: require('../../assets/Smartwatch.png'), 
    background: false
  }, 
  {
    id: 9,
    title: 'Custodia airpod seconda generazione', 
    description: 'Regalo custodia airpods perfettamente funzionante',
    expireTime: '02:20:35',
    favourite: false, 
    status: true,
    img: require('../../assets/Custopia.png'), 
    background: true
  },
]

export default function Page() {
  return(
    <section className={styles.home}>
      <HomeCarousel />
      <HomeCategory />
      <div className='flex flex-wrap justify-between gap-y-16 max-[915px]:justify-center mb-[100px]'>
        {
          gifts.map((gift, i) => (
            <ItemCard key={i}
              status={gift.status}
              img={gift.img}
              background={gift.background}
              title={gift.title}
              favourite={gift.favourite}
              description={gift.description}
            />
          ))
        }
      </div>
    </section>
  )
}
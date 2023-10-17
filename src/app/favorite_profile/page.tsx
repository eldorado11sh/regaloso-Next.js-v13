'use client'
import styles from './page.module.scss';
import classNames from 'classnames';
import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { IoGift } from "react-icons/io5";
import GiftHeart from "../../assets/giftHeart.png";
import { BiSolidUser } from "react-icons/bi";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import ItemWidthCard from '../components/itemWidthCard';
import FavoriteCard from '../components/favoriteCard';
import ShippingModal from '../components/shippingModal';
import ProfileOption from '../components/profileOption';
import UserMarkImg from "../../assets/userMark.png"

export default function VisitorProfile() {

  const assignedCategories = ["Regali In Corso", "RegaliVinti", "Regali Scaduti"]
  const stages = ["Regalino", "Regaluccio", "Regalosetto", "Regaloso", "Regalosissimo"]

  const [user, setUser] = useState({
    firstname: "", 
    lastname: "", 
    location: "",
    gifts: [
      {
        status: false, 
        image: "", 
        background: false, 
        title: "",
        favourite: false, 
        description: "",
      }
    ], 
    favorite: [
      {
        background: false, 
        title: "", 
        description: "",
      }
    ]
  })
  const [filter, setFilter] = useState("Preferiti")
  const [showMenu, setShowMenu] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [profileOption, setProfileOption] = useState("Il tuo profilo")
  const [progress, setProgress] = useState(75)

  useEffect(() => {
    axios.get('http://localhost:5000/currentUser')
    .then((res) => {
      setUser(res.data[0])
    })
  }, [])

  const activeTab = (tag: string) => {
    setFilter(tag)
  }

  const showShippingModal = () => {
    setModalShow(true)
  }


  return (
    <main className={styles.main}>
      <div className={classNames('shadow-normal px-10 py-16 rounded-[20px] flex flex-col h-fit items-center gap-y-10 w-[30%] max-[991px]:px-5  max-[768px]:hidden', styles.profile)}>
        <div className={classNames("text-[#0ACF83] font-semibold bg-[#F3F3F3] rounded-full text-[38px] py-4 px-8 w-fit", styles['userMark'])}>{user.firstname[0]}</div>
        <div className='text-[38px] font-bold max-[475px]:text-[19px] max-[991px]:text-center'>{user.firstname + " " + user.lastname}</div>
        <div className={classNames({
          'w-full py-1 px-4 flex items-center gap-9 rounded-[50px] cursor-pointer': true, 
          "bg-[#F3F3F3]": filter === "Preferiti"
        })} onClick={() => activeTab('Preferiti')}>
          <AiFillHeart color="#0ACF83" size={30} />
          <div className='text-[18px] font-semibold leading-10'>Preferiti</div>
        </div>
        <div className={classNames({
          'w-full py-1 px-4 flex items-center gap-9 rounded-[50px] cursor-pointer': true, 
          "bg-[#F3F3F3]": filter === "I miei Regali"
        })}  onClick={() => activeTab('I miei Regali')} >
          <IoGift color="#0ACF83" size={35} />
          <div className='text-[18px] font-semibold leading-10'>I miei Regali</div>
        </div>
        <div className={classNames({
          'w-full py-1 px-4 flex items-center gap-9 rounded-[50px] cursor-pointer': true, 
          "bg-[#F3F3F3]": filter === "I Regali Assegnati"
        })}  onClick={() => activeTab('I Regali Assegnati')} >
          <Image src={GiftHeart} alt="GiftHeart" style={{marginLeft: "5px"}} />
          <div className='text-[18px] font-semibold leading-10' style={{marginLeft: "-5px"}}>I Regali Assegnati</div>
        </div>
        <div className={classNames({
          'w-full py-1 px-4 flex items-center gap-9 rounded-[50px] cursor-pointer': true, 
          "bg-[#F3F3F3]": filter === "Profilo"
        })}  onClick={() => activeTab('Profilo')} >
          <BiSolidUser color="#0ACF83" size={28} />
          <div className='text-[18px] font-semibold leading-10'>Profilo</div>
        </div> 
        <div className={classNames({
          'w-full py-1 px-4 flex items-center gap-9 rounded-[50px] cursor-pointer': true, 
          "bg-[#F3F3F3]": filter === "Notifiche"
        })}  onClick={() => activeTab('Notifiche')} > 
          <IoNotificationsSharp color="#0ACF83" size={28} />
          <div className='text-[18px] font-semibold leading-10'>Notifiche</div>
        </div>
        <div className={classNames({
          'w-full py-1 px-4 flex items-center gap-9 rounded-[50px] cursor-pointer': true, 
          "bg-[#F3F3F3]": filter === "Impostazioni"
        })}  onClick={() => activeTab('Impostazioni')} >
          <IoSettings color="#0ACF83" size={28} />
          <div className='text-[18px] font-semibold leading-10'>Impostazioni</div>
        </div>
        <div className={classNames({
          'w-full py-1 px-4 flex items-center gap-9 rounded-[50px] cursor-pointer hover:bg-[#F3F3F3]': true, 
        })}>
          <IoLogOut color="#0ACF83" size={28} />
          <div className='text-[18px] font-semibold leading-10'>Logout</div>
        </div>
      </div>
      <div className='hidden  max-[768px]:block'>
        <div className='w-full text-[18px] font-medium text-[#0ACF83] px-10 py-2.5 border-2 border-[#0ACF83] rounded-[200px] text-center' onClick={() => setShowMenu(!showMenu)}>profilo menu</div>
        <div className='text-[32px] font-semibold mt-8'>{filter}</div>
      </div>
      {
        filter === "Preferiti" && <div className={classNames('flex flex-col gap-[55px] w-[60%] max-[991px]:w-[67%] max-[991px]:gap-8', styles.product)}>
          {
            user.gifts.map((gift, i) => (
              <ItemWidthCard key={i}
                status={gift.status}
                img={gift.image}
                background={gift.background}
                title={gift.title}
                favourite={gift.favourite}
                description={gift.description}
              />
            ))
          }
        </div>
      }
      {
        filter === "I miei Regali" && <div className={classNames('flex flex-col gap-[55px] w-[60%] max-[991px]:w-[67%] max-[991px]:gap-8', styles.product)}>
          {
            user.favorite.map((favorite, i) => (
              <FavoriteCard key={i}
                background={favorite.background}
                title={favorite.title}
                description={favorite.description}
                showShipping={showShippingModal}
              />
            ))
          }
        </div>
      }
      {
        filter === "I Regali Assegnati" && <div className={classNames('flex flex-col gap-[55px] w-[60%] max-[991px]:w-[67%] max-[991px]:gap-8', styles.product)}>
          <div className='flex items-center gap-5 flex-wrap'>
            {
              assignedCategories.map((category, index) => (
                <p 
                  key={index}
                  className='text-[18px] font-normal py-1 px-6 border border-[#363636] rounded-[70px]'
                >
                  {category}
                </p>
              ))
            }
          </div>
          <div className='flex flex-col gap-[55px] max-[991px]:gap-8'>
            {
              user.gifts.map((gift, i) => (
              <ItemWidthCard key={i}
                status={gift.status}
                img={gift.image}
                background={gift.background}
                title={gift.title}
                favourite={gift.favourite}
                description={gift.description}
              />
              ))
            }
            </div>
          </div>
      }
      {
        filter === "Profilo" && <div className={classNames('flex flex-col gap-[55px] w-[60%] max-[991px]:w-[67%] max-[991px]:gap-8', styles.product)}>
          <div className='flex items-center justify-around rounded-[40px] bg-[#F3F3F3] mr-auto ml-auto'>
            <ProfileOption 
              title="Il tuo profilo" 
              status={profileOption}
              handleToggle={(title:string) => setProfileOption(title)}
            />
            <ProfileOption
              title="Annunci" 
              status={profileOption}
              handleToggle={(title:string) => setProfileOption(title)}
            />
          </div>
          {
            profileOption === "Il tuo profilo" && <div className='flex flex-col gap-[55px] max-[991px]:gap-8'>
              <div className='rounded-[20px] shadow-normal py-[30px] px-20 flex items-center gap-[110px] max-[991px]:px-14 max-[991px]:gap-[60px] max-[768px]:px-10 max-[475px]:gap-[40px]'>
                <div className='relative px-12 py-8 rounded-full bg-[#F3F3F3] max-[768px]:py-5 max-[768px]:px-10 max-[475px]:py-3 max-[475px]:px-5'>
                  <p className='text-[#0ACF83] text-[45px] font-bold max-[768px]:text-[35px] max-[475px]:text-[19px]'>{user.firstname[0]}</p>
                  <Image className='absolute bottom-0 right-[10px] max-[475px]:w-1/3 max-[475px]:right-0' src={UserMarkImg} alt='UserMark' />
                </div>
                <p className='text-[#363636] text-[50px] font-semibold max-[991px]:text-[40px] max-[475px]:text-[28px]'>{user.firstname + " " + user.lastname}</p>
              </div>
              <div className='rounded-[20px] shadow-normal p-10 flex flex-col gap-[42px]'>
                <div>
                  <p className='text-[30px] font-semibold'>Quanto sei Regaloso?</p>
                  <p className='text-[18px] font-normal'>Condivi regali e ottieni recensioni positivi per aumentare il tuo livello di regalosità!</p>
                </div>
                <div>

                </div>
              </div>
            </div>
          }
          {
            profileOption === "Annunci" && <div>
              this si Annunci
            </div>
          }
        </div>
      }
      
      {/* {modalShow &&
        <ShippingModal title="Spedizione" onClose={() => setModalShow(false)}>
          <div className='m-auto flex flex-col gap-12'>
            <div className='flex items-center gap-x-[80px] gap-y-[20px] flex-wrap'>
              <div className='flex flex-col gap-2 w-[350px]'>
                <p className='text-22px font-semibold'>Nome</p>
                <input type='text' placeholder='Il tuo nome' 
                  className={classNames('border px-5 py-[5px] rounded-[10px] border-[#363636]' )}
                />
              </div>

              <div className='flex flex-col gap-2 w-[350px]'>
                <p className='text-22px font-semibold'>Cognome</p>
                <input type='text' placeholder='I tuo cognome' 
                  className={classNames('border px-5 py-[5px] rounded-[10px] border-[#363636]' )}
                />
              </div>
              
              <div className='flex flex-col gap-2 w-[350px]'>
                <p className='text-22px font-semibold'>Nazione</p>
                <input type='text' placeholder='Inserisci città' 
                  className={classNames('border px-5 py-[5px] rounded-[10px] border-[#363636]' )}
                />
              </div>
            </div>
            <div className='flex items-center gap-x-[80px] gap-y-[20px] flex-wrap'>
              <div className='flex flex-col gap-2 w-[350px]'>
                <p className='text-22px font-semibold'>Città</p>
                <input type='text' placeholder='Inserisci città' 
                  className={classNames('border px-5 py-[5px] rounded-[10px] border-[#363636]' )}
                />
              </div>

              <div className='flex items-center gap-2 justify-between w-[350px]'>
                <div className='flex flex-col gap-2 w-[150px]'>
                  <p className='text-22px font-semibold'>Provincia</p>
                  <input type='text' placeholder='Provincia' 
                    className={classNames('border px-5 py-[5px] rounded-[10px] border-[#363636]' )}
                  />
                </div>
                <div className='flex flex-col gap-2 w-[150px]'>
                  <p className='text-22px font-semibold'>Cap</p>
                  <input type='text' placeholder='Inserisci cap' 
                    className={classNames('border px-5 py-[5px] rounded-[10px] border-[#363636]' )}
                  />
                </div>
              </div>
              
              <div className='flex flex-col gap-2 w-[350px]'>
                <p className='text-22px font-semibold'>Via</p>
                <input type='text' placeholder='Inserisci via' 
                  className={classNames('border px-5 py-[5px] rounded-[10px] border-[#363636]' )}
                />
              </div>
            </div>
            <button 
              className='bg-[#0ACF83] text-white text-[22px] font-semibold py-[10px] px-[63px] rounded-[20px] w-fit m-auto'
              onClick={() => setModalShow(false)}
            >
              Pagamento Spedizione
            </button>
          </div>
        </ShippingModal>
      } */}
    </main>
  )
}
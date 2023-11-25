'use client'
import styles from './page.module.scss';
import classNames from 'classnames';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { IoGift } from "react-icons/io5";
import GiftHeart from "../../assets/giftHeart.png";
import { BiSolidUser, BiSolidUserCircle } from "react-icons/bi";
import { IoLogOut, IoSettings, IoNotificationsSharp, IoNotifications, IoMailUnread, IoSend } from "react-icons/io5";
import ItemWidthCard from '../components/itemWidthCard';
import FavoriteCard from '../components/favoriteCard';
import ProfileOption from '../components/profileOption';
import UserMarkImg from "../../assets/userMark.png";
import DromMenuArrow from '../../assets/dropMenu_arrow.png'
import { BsCheckCircleFill, BsPlusLg } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import CheckedRadio from "../../assets/checkedRadio.png";
import NormalRadio from "../../assets/normalRadio.png";
import Advertisement from "../../assets/ads.png"
import MyGiftItem from '../components/myGiftItem';
import { AiOutlineLeft } from "react-icons/ai";
import Popup from '../components/popup';
import { useSearchParams } from 'next/navigation';
import SettingTab from './settingTab';
import { apiService } from '@/app/_services/apiService';

export default function VisitorProfile() {
  const searchParams = useSearchParams()
  const initialTab = searchParams.get('tab')
  const assignedCategories = ["Regali In Corso", "RegaliVinti", "Regali Scaduti"]
  const stages = ["Regalino", "Regaluccio", "Regalosetto", "Regaloso", "Regalosissimo"]
  const options = [
    {
      title: "Completa Profilo", 
      point: 10, 
      status: true
    }, 
    {
      title: "1 Regalo Aggiunto", 
      point: 1, 
      status: true
    }, 
    {
      title: "5 Regali Aggiunti", 
      point: 5, 
      status: true
    }, 
    {
      title: "10 Regali Aggiunti", 
      point: 10, 
      status: false
    }, 
    {
      title: "20 Regali Aggiunti", 
      point: 20, 
      status: false
    }, 
    {
      title: "50 Regali Aggiunti", 
      point: 50, 
      status: false
    }, 
    {
      title: "100 Regali Aggiunti", 
      point: 100, 
      status: false
    }, 
    {
      title: "Invita un amico", 
      point: 5, 
      status: false
    }, 
    {
      title: "Email Verificata", 
      point: 5, 
      status: true
    }, 
  ]
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const years = [1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2025, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
  const sections = [
    { gender: "Uomo", status: true }, 
    { gender: "Donna", status: false }, 
    { gender: "Altro", status: false }, 
  ]
  const notifications = [
    {
      id: 1, 
      title: "Giovanni Sanna si è iscritto al tuo regalo", 
      status: true
    },
    {
      id: 2, 
      title: "Eren Jager si è iscritto al tuo regalo", 
      status: false
    },
    {
      id: 3, 
      title: "Il regalo Airposd a cui ti sei iscritto è scaduto", 
      status: false
    },
    {
      id: 4, 
      title: "Il regalo Airposd a cui ti sei iscritto è scaduto", 
      status: false
    },
    {
      id: 5, 
      title: "Il regalo Airposd a cui ti sei iscritto è scaduto", 
      status: false
    },
    {
      id: 6, 
      title: "Il regalo Airposd a cui ti sei iscritto è scaduto", 
      status: false
    }
  ]
  const messages = [
    {
      id: 1, 
      name: "Giovanni Sanna", 
      content: "", 
      status: true
    }, 
    {
      id: 2, 
      name: "Eren Jager", 
      content: "Ciao, volevo contattarti per il dispositivo di manovra tridimensionale Ciao, volevo contattarti per il dispositivo di manovra tridimensionale", 
      status: false
    }, 
    {
      id: 3, 
      name: "Eren Jager", 
      content: "Ciao, volevo contattarti per il dispositivo di manovra tridimensionale Ciao, volevo contattarti per il dispositivo di manovra tridimensionale", 
      status: false
    }, 
    {
      id: 4, 
      name: "Eren Jager", 
      content: "Ciao, volevo contattarti per il dispositivo di manovra tridimensionale Ciao, volevo contattarti per il dispositivo di manovra tridimensionale", 
      status: false
    }, 
  ]
  const chats = [
    {
      id: 1, 
      name: "Giovanni", 
      message: "Ciao, volevo contattarti per le airpods in regalo, sono disponibile a pagare la spedizione", 
      status: true
    }, 
    {
      id: 2, 
      name: "Fanny", 
      message: "Ciao, va benissimo, mi dai il tuo indirizzo, ti invio il mio pay pal", 
      status: false
    }, 
    {
      id: 3, 
      name: "Giovanni", 
      message: "grazie mille.", 
      status: true
    }
  ]

  const [user, setUser] = useState({
    firstname: "", 
    lastname: "", 
    email: "",
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
    ], 
    myGifts: [
      {
        title: "", 
        editable: false, 
        description: "", 
        status: false, 
        background: false, 
        image: ""
      }
    ]
  })
  const [filter, setFilter] = useState("Preferiti")
  const [showMenu, setShowMenu] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [profileOption, setProfileOption] = useState("Il tuo profilo")
  const [progress, setProgress] = useState(3)
  const [showPoints, setShowPoints] = useState(false)
  const [notificationOption, setNotificationOption] = useState("Notifiche")
  const [mailBox, setMailBox] = useState({
    id: 0, 
    status: true, 
    name: ""
  })

  useEffect(() => {
    apiService.get('currentUser')
      .then((res) => setUser(res[0]))
      .catch((error: any) => console.error(error));

    // TODO: Ask question about this condition on useEffect
    if (initialTab) {
      setFilter(initialTab)
    }

  }, [])

  const activeTab = (tag: string) => {
    setFilter(tag)
  }

  const showShippingModal = () => {
    setModalShow(true)
  }

  const displayDays = () => {
    return days.map((day, index) => (
      <option key={index} value="day" className='dark:text-[#F3F3F3]'>{day}</option>
    ))
  }

  const displayMonths = () => {
    return months.map((month, index) => (
      <option key={index} value="month" className='dark:text-[#F3F3F3]'>{month}</option>
    ))
  }
  
  const displayYears = () => {
    return years.map((year, index) => (
      <option key={index} value="year" className='dark:text-[#F3F3F3]'>{year}</option>
    ))
  }

  return (
    <main className={classNames("text-[#363636] dark:text-[#F3F3F3]", styles.main)}>
      <div className={classNames('shadow-normal px-10 py-16 rounded-[20px] flex flex-col h-fit items-center gap-y-10 w-[30%] dark:bg-[#2B2B2B] max-[991px]:px-5  max-[768px]:hidden', styles.profile)}>
        <div className={classNames("text-[#0ACF83] font-semibold bg-[#F3F3F3] dark:bg-[#2B2B2B] rounded-full text-[38px] py-4 px-8 w-fit", styles['userMark'])}>{user.firstname[0]}</div>
        <div className='text-[38px] font-bold max-[475px]:text-[19px] max-[991px]:text-center'>{user.firstname + " " + user.lastname}</div>
        <div className={classNames({
          'w-full py-1 px-4 flex items-center gap-9 rounded-[50px] cursor-pointer': true, 
          "bg-[#F3F3F3] dark:bg-[#221F1F]": filter === "Preferiti"
        })} onClick={() => activeTab('Preferiti')}>
          <AiFillHeart color="#0ACF83" size={30} />
          <div className='text-[18px] font-semibold leading-10'>Preferiti</div>
        </div>
        <div className={classNames({
          'w-full py-1 px-4 flex items-center gap-9 rounded-[50px] cursor-pointer': true, 
          "bg-[#F3F3F3] dark:bg-[#221F1F]": filter === "I miei Regali"
        })}  onClick={() => activeTab('I miei Regali')} >
          <IoGift color="#0ACF83" size={35} />
          <div className='text-[18px] font-semibold leading-10'>I miei Regali</div>
        </div>
        <div className={classNames({
          'w-full py-1 px-4 flex items-center gap-9 rounded-[50px] cursor-pointer': true, 
          "bg-[#F3F3F3] dark:bg-[#221F1F]": filter === "I Regali Assegnati"
        })}  onClick={() => activeTab('I Regali Assegnati')} >
          <Image src={GiftHeart} alt="GiftHeart" style={{marginLeft: "5px"}} />
          <div className='text-[18px] font-semibold leading-10' style={{marginLeft: "-5px"}}>I Regali Assegnati</div>
        </div>
        <div className={classNames({
          'w-full py-1 px-4 flex items-center gap-9 rounded-[50px] cursor-pointer': true, 
          "bg-[#F3F3F3] dark:bg-[#221F1F]": filter === "Profilo"
        })}  onClick={() => activeTab('Profilo')} >
          <BiSolidUser color="#0ACF83" size={28} />
          <div className='text-[18px] font-semibold leading-10'>Profilo</div>
        </div> 
        <div className={classNames({
          'w-full py-1 px-4 flex items-center gap-9 rounded-[50px] cursor-pointer': true, 
          "bg-[#F3F3F3] dark:bg-[#221F1F]": filter === "Notifiche"
        })}  onClick={() => activeTab('Notifiche')} > 
          <IoNotificationsSharp color="#0ACF83" size={28} />
          <div className='text-[18px] font-semibold leading-10'>Notifiche</div>
        </div>
        <div className={classNames({
          'w-full py-1 px-4 flex items-center gap-9 rounded-[50px] cursor-pointer': true, 
          "bg-[#F3F3F3] dark:bg-[#221F1F]": filter === "Impostazioni"
        })}  onClick={() => activeTab('Impostazioni')} >
          <IoSettings color="#0ACF83" size={28} />
          <div className='text-[18px] font-semibold leading-10'>Impostazioni</div>
        </div>
        <div className={classNames({
          'w-full py-1 px-4 flex items-center gap-9 rounded-[50px] cursor-pointer hover:bg-[#F3F3F3] hover:dark:bg-[#221F1F]': true, 
        })}>
          <IoLogOut color="#0ACF83" size={28} />
          <div className='text-[18px] font-semibold leading-10'>Logout</div>
        </div>
      </div>
      <div className='hidden  max-[768px]:block'>
        <div className='w-full text-[18px] font-medium text-[#0ACF83] px-10 py-2.5 border-2 border-[#0ACF83] rounded-[200px] text-center' onClick={() => setShowMenu(!showMenu)}>profilo menu</div>
        <div className='text-[32px] font-semibold mt-8 dark:text-[#F3F3F3]'>{filter}</div>
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
          <div className='flex items-center justify-around rounded-[40px] bg-[#F3F3F3] dark:bg-[#2B2B2B] mr-auto ml-auto w-[70%] max-[991px]:w-[80%] max-[768px]:w-full'>
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
              <div className='rounded-[20px] shadow-normal dark:bg-[#2B2B2B] py-[30px] px-20 flex items-center gap-[110px] max-[991px]:px-14 max-[991px]:gap-[60px] max-[768px]:px-[20px] max-[475px]:justify-between'>
                <div className='relative px-12 py-8 rounded-full bg-[#F3F3F3] dark:bg-[#2B2B2B] max-[768px]:py-5 max-[768px]:px-10 max-[475px]:py-3 max-[475px]:px-5'>
                  <p className='text-[#0ACF83] text-[45px] font-bold max-[768px]:text-[35px] max-[475px]:text-[19px]'>{user.firstname[0]}</p>
                  <Image className='absolute bottom-0 right-[10px] max-[475px]:w-1/3 max-[475px]:right-0' src={UserMarkImg} alt='UserMark' />
                </div>
                <p className=' text-[50px] font-semibold max-[991px]:text-[40px] max-[475px]:text-[28px]'>{user.firstname + " " + user.lastname}</p>
              </div>

              <div className='rounded-[20px] dark:bg-[#2B2B2B] shadow-normal p-10 flex flex-col gap-[20px] max-[768px]:p-[20px]'>
                <div>
                  <p className='text-[30px] dark:text-[#F3F3F3] font-semibold max-[475px]:text-[24px]'>Quanto sei Regaloso?</p>
                  <p className='text-[18px] dark:text-[#F3F3F3] font-normal max-[475px]:text-[16px]'>Condivi regali e ottieni recensioni positivi per aumentare il tuo livello di regalosità!</p>
                </div>
                <div>
                  <div className='flex items-center justify-between mt-[42px] max-[475px]:hidden'>
                    {
                      stages.map((stage, index) => (
                        <div key={index} className='relative'>
                          <p className='text-[14px] font-normal text-[#363636] dark:text-[#F3F3F3]'>{stage}</p>
                          <div className={classNames({
                            'border-dotted border-r-2 h-[33px] border-black dark:border-[#F3F3F3] dark:opacity-100 absolute top-[25px] z-10 opacity-20': true, 
                            "right-0": index === stages.length - 1, 
                            "right-1/2": stages.length !== index, 
                          })}></div>
                        </div>
                      ))
                    }
                  </div>
                  <div className='h-[20px] bg-[#F3F3F3] dark:bg-[#221F1F] rounded-[2000px] w-full mt-[20px]'>
                    <div className='h-full bg-[#0ACF83] rounded-[2000px]  transiton-[width 2s ease-in-out] relative' style={{width: `${progress*25}%`}}>
                      <div className='absolute top-[25px] right-0 flex flex-col items-end'>
                        <div className={styles.triangle}></div>
                        <div className='text-[18px] font-semibold text-[#0ACF83] mt-1 max-[475px]:text-[16px]'>{"Sei " + stages[progress] + "!"}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className='text-right mt-16 mb-5 max-[475px]:mb-0'>
                  <button className='text-white dark:text-[#2B2B2B] bg-[#0ACF83] py-2 px-6 text-[16px] font-semibold rounded-[110px] max-[475px]:text-[16px]'>Scopri i Premi</button>
                </div>
              </div>

              <div className={classNames({
                "py-8 px-10 rounded-[20px] flex flex-col dark:bg-[#2B2B2B] gap-[30px] max-[768px]:p-[20px]": true, 
                "shadow-normal": !showPoints, 
                "border border-[#363636]": showPoints
              })}>
                <div className='flex items-center justify-between'>
                  <p className='text-[31px] font-semibold max-[475px]:text-[23px]'>Ottieni punti</p>
                  <Image src={DromMenuArrow} alt='DropDown' onClick={() => setShowPoints(!showPoints)} />
                </div>
                {
                  showPoints && <div className='mb-6'>
                    {
                      options.map((option) => (
                        <div className='flex items-center justify-between border-b border-[#363636] border-opacity-20 py-5'>
                          <p className='text-[26px] font-semibold max-[475px]:text-[20px]'>{option.title}</p>
                          <div className='flex items-center gap-4'>
                            <p className='text-[22px] font-light max-[475px]:text-[16px]'>{option.point + "pt"}</p>
                            <BsCheckCircleFill size={31} className={classNames({
                              "text-[#0ACF83]": option.status,
                              "text-[#F3F3F3] dark:text-[#221F1F]": !option.status
                            }, styles.optionMark)} />
                          </div>
                        </div>
                      ))
                    }
                  </div>
                }
              </div>

              <div className='rounded-[20px] dark:bg-[#2B2B2B] p-12 shadow-normal flex flex-col gap-[30px] max-[768px]:p-0 max-[768px]:shadow-none'>
                <p className='text-[39px] dark:text-[#F3F3F3] font-semibold max-[475px]:text-[27px]'>I tuoi Dati</p>
                <div className='flex flex-col gap-[15px]'>
                  <p className='text-[22px] font-semibold'>Informazioni Pubbliche</p>
                  <div className='border-b border-black dark:border-opacity-100 border-opacity-20 py-3 flex gap-[30px]'>
                    <BiSolidUserCircle color="#0ACF83" size={30} />
                    <p className='text-[18px] font-semibold'>{user.firstname + " " + user.lastname}</p>
                  </div>
                  <div className='border-b border-black dark:border-opacity-100 border-opacity-20 py-3 flex gap-[30px]'>
                    <MdEmail color="#0ACF83" size={30} />
                    <p className='text-[18px] font-semibold'>{user.email}</p>
                  </div>
                  <div className='border-b border-black dark:border-opacity-100 border-opacity-20 py-3 flex gap-[30px]'>
                    <FaLocationDot color="#0ACF83" size={30} />
                    <p className='text-[18px] font-semibold'>{user.location}</p>
                  </div>
                </div>
                <div className='flex flex-col gap-[15px]'>
                  <p className='text-[22px] font-semibold'>Informazioni Personali</p>
                  <div className='border-b border-black dark:border-opacity-100 border-opacity-20 pt-3 pb-6 flex flex-col gap-[15px]'>
                    <p className='text-[18px] font-semibold'>Data di nascita</p>
                    <div className='flex items-center gap-4'>
                      <select name="days" id="days" className='w-[100px] border border-[#363636] border-opacity-20 pl-1 text-[#363636] dark:text-[#F3F3F3] py-1 text-[15px] font-semibold rounded-[10px]'>
                      {
                        displayDays()
                      }
                      </select>
                      <select name="days" id="days" className='w-[100px] border border-[#363636] border-opacity-20 pl-1 text-[#363636] dark:text-[#F3F3F3] py-1 text-[15px] font-semibold rounded-[10px]'>
                      {
                        displayMonths()
                      }
                      </select>
                      <select name="days" id="days" className='w-[100px] border border-[#363636] border-opacity-20 pl-1 text-[#363636] dark:text-[#F3F3F3] py-1 text-[15px] font-semibold rounded-[10px]'>
                      {
                        displayYears()
                      }
                      </select>
                    </div>
                  </div>
                  <div className='pt-8 pb-6 flex flex-col gap-[15px]'>
                    <p className='text-[18px] font-semibold'>Genere</p>
                    <div className='border border-[#363636] dark:border-black dark:border-opacity-100 border-opacity-20 px-5 py-1 rounded-[10px] w-[400px]'>
                      {
                        sections.map((section, index) => (
                          <div key={section.gender} className={classNames({
                            'flex items-center justify-between py-4': true, 
                            "border-b border-[#363636] dark:border-black dark:border-opacity-100 border-opacity-20": index !== sections.length - 1
                          })}>
                            <p className='text-[15px] font-semibold'>{section.gender}</p>
                            {
                              section.status === true ? <Image src={CheckedRadio} alt="Checked" /> : <Image src={NormalRadio} alt='unChecked' />
                            }
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
                <div className='flex gap-10'>
                  <button className='bg-white dark:bg-[#2B2B2B] border border-[#0ACF83] py-2.5 px-8 rounded-[10px] text-[15px] text-[#0ACF83] font-semibold'>Annulla</button>
                  <button className='bg-[#0ACF83] py-2.5 px-8 rounded-[10px] text-[15px] text-white dark:text-[#2B2B2B] font-semibold'>Conferma</button>
                </div>
              </div>
            </div>
          }
          {
            profileOption === "Annunci" && <div className='flex flex-col justify-center gap-[55px]'>
              <div className='flex flex-col items-center justify-center w-[70%] m-auto max-[768px]:w-full'>
                <Image src={Advertisement} alt="advertisement" className='pt-[50px] pb-[100px]' />
                <button className='bg-[#0ACF83] rounded-[20px] px-[100px] py-[10px] flex items-center gap-10 max-[991px]:px-[80px] max-[768px]:gap-5 max-[768px]:px-[60px] max-[475px]:gap-2.5'>
                  <BsPlusLg size={50} className={classNames("text-[#F3F3F3] dark:text-[#2B2B2B]")} />
                  <p className='text-[32px] font-semibold text-white dark:text-[#2B2B2B] max-[768px]:text-[28px] max-[475px]:text-[22px]'>Pubblica un regalo</p>
                </button>
              </div>
              <div className='flex flex-col gap-[55px]'>
                {
                  user.myGifts.map((gift, i) => (
                    <MyGiftItem 
                      key={i}
                      status={gift.status}
                      img={gift.image}
                      background={gift.background}
                      title={gift.title}
                      description={gift.description}
                      editable={gift.editable}
                    />
                  ))
                }
              </div>
            </div>
          }
        </div>
      }
      {
        filter === "Notifiche" && <div className={classNames({
          'flex flex-col gap-[55px] w-[60%] max-[991px]:w-[67%] max-[991px]:gap-8': true, 
          "w-[69%]": mailBox.status, 
        }, styles.product)}>
          <div className='flex items-center justify-around rounded-[40px] bg-[#F3F3F3] dark:bg-[#2B2B2B] mr-auto ml-auto w-[70%] max-[991px]:w-[80%] max-[768px]:w-full'>
            <ProfileOption 
              title="Notifiche" 
              status={notificationOption}
              handleToggle={(title:string) => setNotificationOption(title)}
            />
            <ProfileOption
              title="Messaggi" 
              status={notificationOption}
              handleToggle={(title:string) => { setNotificationOption(title); setMailBox({id: 0, status: false, name: ""}); }}
            />
          </div>
          {
            notificationOption === "Notifiche" && <div className='rounded-[20px] dark:bg-[#2B2B2B] shadow-normal py-[68px] px-[26px] flex flex-col gap-20'>
              <p className='text-[61px] font-semibold max-[768px]:hidden'>Notifiche</p>
              {/* <ImCross className="hidden max-[768px]:block" /> */} 
              <div className='flex flex-col gap-[30px]'>
              {
                notifications.map((notification) => (
                  <div key={notification.id}
                    className={classNames({
                      'flex items-center justify-between p-5 rounded-[20px]': true, 
                      "bg-[#F3F3F3] dark:bg-[#221F1F]": notification.status, 
                      "bg-white dark:bg-[#2B2B2B] border border-black dark:border-white": !notification.status
                    })}
                  >
                    <p className='text-[18px] font-normal w-4/5'>{notification.title}</p>
                    <IoNotifications color={notification.status === true ? "#0ACF83" : "#F3F3F3"} size={35} />
                  </div>
                ))
              }
              </div>
            </div>
          }
          {
            notificationOption === "Messaggi" && mailBox.status 
            ? <div className='flex gap-[20px] max-[991px]:flex-col'>
                <div className='rounded-[20px] shadow-normal py-10 px-2 flex flex-col gap-[20px] w-[30%] dark:bg-[#2B2B2B] h-fit max-[991px]:hidden'>
                  {
                    messages.map((message, index) => (
                      <div key={index}
                        className={classNames({
                        "text-[20px] font-semibold  rounded-[10px] px-3 p-1": true, 
                        "text-white bg-[#0ACF83] dark:text-[#2B2B2B]": index + 1 === mailBox.id, 
                        "border-black border": index + 1 !== mailBox.id
                      })}>{message.name}</div>
                    ))
                  }
                </div>
                <div className='hidden max-[991px]:flex max-[991px]:items-center max-[991px]:gap-8 max-[991px]:justify-center'>
                  <div className='px-2 py-2 rounded-full bg-[#0ACF83]'><AiOutlineLeft size={20} color="white" /></div>
                  <div className='text-[24px] text-[#0ACF83] font-normal'>{mailBox.name}</div>
                </div>
                <div className='flex flex-col gap-10 bg-[#F3F3F3] dark:bg-[#2B2B2B] h-fit rounded-[20px] py-16 px-6 w-[70%] max-[991px]:w-full'>
                  {
                    chats.map((chat, index) => (
                      <div key={chat.id}
                        className={classNames({
                          "flex": true, 
                          "justify-start": chat.status, 
                          "justify-end": !chat.status
                        })}
                      >
                        <div className='w-3/5 flex items-end gap-2 max-[1503px]:w-[80%]'>
                          {
                            chat.status && <div className={classNames({
                              "text-[32px] px-5 py-1 rounded-full shadow-normal": true,    
                              "bg-[#F3F3F3] dark:bg-[#221F1F] text-[#0ACF83]": chat.status, 
                              "bg-[#0ACF83] text-[#F3F3F3]": !chat.status
                            })}>{chat.name[0]}</div>
                          }
                          <div className={classNames({
                            "py-5 px-7 rounded-t-[30px] text-[14px] font-normal mb-3 shadow-normal w-full": true, 
                            "bg-white dark:bg-[#221F1F] rounded-br-[30px]": chat.status, 
                            "bg-[#0ACF83] text-white rounded-bl-[30px] dark:text-[#2B2B2B]": !chat.status
                          })}>{chat.message}</div>
                          {
                            !chat.status && <div className={classNames({
                              "text-[32px] px-5 py-1 rounded-full shadow-normal": true,    
                              "bg-[#F3F3F3] text-[#0ACF83]": chat.status, 
                              "bg-[#0ACF83] text-[#F3F3F3] dark:text-[#2B2B2B]": !chat.status
                            })}>{chat.name[0]}</div>
                          }
                        </div>
                        
                      </div>
                    ))
                  }
                  <div className='flex border border-black py-[5px] pl-[30px] pr-[8px] rounded-[30px]'>
                    <input type='text' className='w-full bg-transparent focus:outline-none' />
                    <div className="bg-[#0ACF83] py-3 px-3 rounded-full">
                      <IoSend className={classNames("text-white, dark:text-[#2B2B2B]")} size={18} />
                    </div>
                  </div>
                </div>
            </div> 
            : <div className='px-[26px] flex flex-col gap-10 max-[768px]:px-0'>
              <p className='text-[61px] font-semibold max-[768px]:hidden'>Messaggi</p>
              {/* <ImCross className="hidden max-[768px]:block" /> */} 
              <div className='flex flex-col gap-[30px]'>
              {
                messages.map((message) => (
                  <div key={message.id}
                    className={classNames({
                      'flex items-center justify-between p-5 rounded-[20px]': true, 
                      "bg-[#F3F3F3] dark:bg-[#2B2B2B]": message.status, 
                      "bg-white dark:bg-[#2B2B2B] border border-black dark:border-[#F3F3F3]": !message.status
                    })}
                  >
                    <div className='flex flex-col gap-2 w-4/5'>
                      <p className='text-[22px] font-semibold'>{message.name}</p>
                      <p className='text-[18px] font-normal'>{message.content ? message.content.substring(0, 60) + "..." : " "}</p>
                    </div>
                    <IoMailUnread color={message.status === true ? "#0ACF83" : "#F3F3F3"} size={35} onClick={() => setMailBox({id: message.id, status: true, name: message.name})} />
                  </div>
                ))
              }
              </div>
            </div>
          }
        </div>
      }
      {
        filter === "Impostazioni" && <SettingTab user={user} />
      }
      {
        modalShow && <Popup onCrossClick={() => setModalShow(false)} onSubmitClick={() => setModalShow(false)} />
      }
    </main>
  )
}
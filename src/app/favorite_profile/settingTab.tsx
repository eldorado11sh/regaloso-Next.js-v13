'use client';
import React, { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { PlusIcon } from "../components/icons";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { IoCloseCircleOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { PiLockKeyLight } from "react-icons/pi";
import { AiOutlineExclamation } from "react-icons/ai";
import { TfiNewWindow } from "react-icons/tfi";
import { MdPersonAddAlt } from "react-icons/md";

type Props = {
  user: {
    email: string
  }
}

export default function SettingTab({ user }:Props) {
  const [emailAccordion, setEmailAccordion] = useState(false)
  const [notificationAccordion, setNotificationAccordion] = useState(false)
  const [logoutAccordion, setLogoutAccordion] = useState(false)
  const [languageAccordion, setLanguageAccordion] = useState(false)
  const [passwordAccordion, setPasswordAccordion] = useState(false)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [stepAccordion, setStepAccordion] = useState(false)
  const [inviteAccordion, setInviteAccordion] = useState(false)

  const handleEmailAccordion = (e:any) => {
    e.preventDefault();
    setEmailAccordion(!emailAccordion);
    setNotificationAccordion(false);
    setLogoutAccordion(false);
    setLanguageAccordion(false);
    setPasswordAccordion(false);
    setStepAccordion(false);
    setInviteAccordion(false);
  }

  const handleInviteAccordion = (e:any) => {
    e.preventDefault();
    setInviteAccordion(!inviteAccordion);
    setEmailAccordion(false);
    setNotificationAccordion(false);
    setLogoutAccordion(false);
    setLanguageAccordion(false);
    setPasswordAccordion(false);
    setStepAccordion(false);
  }

  const handleNotificationAccordion = (e:any) => {
    e.preventDefault();
    setNotificationAccordion(!notificationAccordion);
    setEmailAccordion(false);
    setLogoutAccordion(false);
    setLanguageAccordion(false);
    setPasswordAccordion(false);
    setStepAccordion(false);
    setInviteAccordion(false);
  }

  const handleLanguageAccordion = (e:any) => {
    e.preventDefault();
    setLanguageAccordion(!languageAccordion);
    setEmailAccordion(false);
    setNotificationAccordion(false);
    setLogoutAccordion(false);
    setPasswordAccordion(false);
    setStepAccordion(false);
    setInviteAccordion(false)
  }

  const handlePasswordAccordion = (e:any) => {
    e.preventDefault();
    setPasswordAccordion(!passwordAccordion);
    setLanguageAccordion(false);
    setEmailAccordion(false);
    setNotificationAccordion(false);
    setLogoutAccordion(false);
    setStepAccordion(false);
    setInviteAccordion(false)
  }

  const handleStepAccordion = (e:any) => {
    e.preventDefault();
    setStepAccordion(!stepAccordion);
    setNotificationAccordion(false);
    setEmailAccordion(false);
    setLogoutAccordion(false);
    setLanguageAccordion(false);
    setPasswordAccordion(false);
    setInviteAccordion(false);
  }

  const handleLogoutAccordion = (e:any) => {
    e.preventDefault();
    setLogoutAccordion(!logoutAccordion);
    setNotificationAccordion(false);
    setEmailAccordion(false);
    setLanguageAccordion(false);
    setPasswordAccordion(false);
    setStepAccordion(false);
    setInviteAccordion(false)
  }

  return (
    <main className="flex flex-col w-[60%] max-[991px]:w-[67%] max-[768px]:w-full">
      {/* email */}
      <div className={classNames({
        "shadow-small rounded-[20px]": emailAccordion
      })}>
        <div className={classNames({
          "p-4 flex items-center justify-between hover:bg-[#F3F3F3] dark:hover:bg-[#181717]":true,
          "border-b border-[#363636] rounded-b-[0px] border-opacity-30": emailAccordion, 
          "rounded-[20px]": !emailAccordion
        })} 
          onClick={(e) => handleEmailAccordion(e)}>
          <div className="flex items-center gap-[20px]">
            <div className="p-3 rounded-full bg-[#E3E3E3] dark:bg-[#2B2B2B]">
              <MdOutlineMailOutline size={30} />
            </div>
            <div>
              <p className="text-[20px] font-semibold">Impostazioni dell 'email</p>
              <p className="text-[16px] font-normal">{user.email}</p>
            </div>
          </div>
          <PlusIcon accordionOpen={emailAccordion} />
        </div>
        {
          emailAccordion === true && <div className="px-4 py-4 flex flex-col gap-6">
            <button className="bg-[#0ACF83] px-8 py-2 rounded-[30px] text-[20px] font-semibold text-white dark:text-[#202020] w-fit">Cambia indirizzo email</button>
            <div className="text-[16px] font-normal mb-8">Per mantenere il tuo account sicuro, ti faremo alcune domande di sicurezza per autorizzare la modifica dell'email.</div>
          </div> 
        }
      </div>

      {/* Invite Friend */}
      <div className={classNames({
        "shadow-small rounded-[20px]": inviteAccordion
      })}>
        <div className={classNames({
          "p-4 flex items-center justify-between hover:bg-[#F3F3F3] dark:hover:bg-[#181717]":true,
          "border-b border-[#363636] rounded-b-[0px] border-opacity-30": inviteAccordion, 
          "rounded-[20px]": !inviteAccordion
        })} 
          onClick={(e) => handleInviteAccordion(e)}>
          <div className="flex items-center gap-[20px]">
            <div className="p-3 rounded-full bg-[#E3E3E3] dark:bg-[#2B2B2B]">
              <MdPersonAddAlt size={30} />
            </div>
            <div>
              <p className="text-[20px] font-semibold">Invita un amico</p>
              <p className="text-[16px] font-normal">Puoi invitare un amico a Regaloso</p>
            </div>
          </div>
          <PlusIcon accordionOpen={inviteAccordion} />
        </div>
        {
          inviteAccordion === true && <div className="px-4 py-4 flex flex-col gap-6">
            <button className="bg-[#0ACF83] px-8 py-2 rounded-[30px] text-[20px] font-semibold text-white dark:text-[#202020] w-fit">Invita un amico</button>
          </div> 
        }
      </div>
      
      {/* notificaton  */}
      <div className={classNames({
        "shadow-small rounded-[20px]": notificationAccordion
      })}>
        <div className={classNames({
          "p-4 flex items-center justify-between hover:bg-[#F3F3F3] dark:hover:bg-[#181717]":true,
          "border-b border-[#363636] rounded-b-[0px] border-opacity-30": notificationAccordion, 
          "rounded-[20px]": !notificationAccordion
        })} 
          onClick={(e) => handleNotificationAccordion(e)}>
          <div className="flex items-center gap-[20px]">
            <div className="p-3 rounded-full bg-[#E3E3E3] dark:bg-[#2B2B2B]">
              <IoIosNotificationsOutline size={30} />
            </div>
            <div>
              <p className="text-[20px] font-semibold">Notifiche</p>
              <p className="text-[16px] font-normal">Choose what we get in touch about</p>
            </div>
          </div>
          <PlusIcon accordionOpen={notificationAccordion} />
        </div>
        {
          notificationAccordion === true && <div className="px-4 py-4 flex flex-col gap-6">
            <table className="border border-opacity-30 border-[#363636] rounded-[10px]">
              <thead>
                <tr className="bg-[#F3F3F3] dark:bg-[#202020] text-left border-b border-opacity-30 border-[#363636]">
                  <th className="p-4 max-[603px]:p-1">Notifiche</th>
                  <th className="p-4 max-[603px]:p-1">
                    <div className="flex gap-4 items-center max-[1099px]:flex-col">
                      <input type="checkbox" className='h-[20px] w-[20px]'/>
                      <span>E-mail</span>
                    </div>
                  </th>
                  <th className="p-4  max-[603px]:p-1">
                    <div className="flex gap-4 max-[603px]:p-1 items-center max-[1099px]:flex-col">
                      <input type="checkbox" className='h-[20px] w-[20px]'/>
                      <span>Spingere</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-opacity-30 border-[#363636]">
                  <td className="p-4 max-[603px]:p-1 flex flex-col">
                    <span className="text-[16px] font-bold">I tuoi trasferimenti e saldi</span>
                    <span className="text-[16px] font-normal">Notifiche su dove sono i tuoi soldi.</span>
                  </td>
                  <td className="p-4 max-[603px]:p-1 max-[1099px]:text-center"><input type="checkbox" className='h-[20px] w-[20px]'/></td>
                  <td className="p-4 max-[603px]:p-1 max-[1099px]:text-center"><input type="checkbox" className='h-[20px] w-[20px]' /></td>
                </tr>
                <tr className="border-b border-opacity-30 border-[#363636]">
                  <td className="p-4 max-[603px]:p-1 flex flex-col">
                    <span className="text-[16px] font-bold">La tua carta di debito</span>
                    <span className="text-[16px] font-normal">Notifiche sulle transazioni con la tua carta</span>
                  </td>
                  <td className="p-4 max-[603px]:p-1 max-[1099px]:text-center"><input type="checkbox" className='h-[20px] w-[20px]'/></td>
                  <td className="p-4 max-[603px]:p-1 max-[1099px]:text-center"><input type="checkbox" className='h-[20px] w-[20px]' /></td>
                </tr>
                <tr className="border-b border-opacity-30 border-[#363636]">
                  <td className="p-4 max-[603px]:p-1 flex flex-col">
                    <span className="text-[16px] font-bold">Valute e caratteristiche</span>
                    <span className="text-[16px] font-normal">Notizie sul nostro ultimo e più grande lavoro.</span>
                  </td>
                  <td className="p-4 max-[603px]:p-1 max-[1099px]:text-center"><input type="checkbox" className='h-[20px] w-[20px]'/></td>
                  <td className="p-4 max-[603px]:p-1 max-[1099px]:text-center"><input type="checkbox" className='h-[20px] w-[20px]' /></td>
                </tr>
              </tbody>
            </table>
            <button className="bg-[#0ACF83] px-8 py-2 rounded-[30px] text-[20px] font-semibold text-white dark:text-[#202020] w-fit">Salvare le modifiche</button>
          </div> 
        }
      </div>

      {/* language settings */}
      <div className={classNames({
        "shadow-small rounded-[20px]": languageAccordion
      })}>
        <div className={classNames({
          "p-4 flex items-center justify-between hover:bg-[#F3F3F3] dark:hover:bg-[#181717]":true,
          "border-b border-[#363636] rounded-b-[0px] border-opacity-30": languageAccordion, 
          "rounded-[20px]": !languageAccordion
        })} 
          onClick={(e) => handleLanguageAccordion(e)}>
          <div className="flex items-center gap-[20px]">
            <div className="p-3 rounded-full bg-[#E3E3E3] dark:bg-[#2B2B2B]">
              <GrLanguage size={30} color="#F3F3F3" />
            </div>
            <div>
              <p className="text-[20px] font-semibold">Impostazioni della lingua</p>
              <p className="text-[16px] font-normal">Italiano</p>
            </div>
          </div>
          <PlusIcon accordionOpen={languageAccordion} />
        </div>
        {
          languageAccordion === true && <div className="px-4 py-4 flex flex-col gap-6 w-[300px]">
            <span>Seleziona la lingua predefinita</span>
            <select name="language" defaultValue="Italian" className="w-full px-4 py-2 border border-[#363636] border-opacity-30 rounded-[10px] appearance-none">
              <option value="English">English (UK)</option>
              <option value="Italian">Italiano</option>
              <option value="Spanish">Español</option>
            </select>
            <button className="bg-[#0ACF83] px-8 py-2 rounded-[30px] text-[20px] font-semibold text-white dark:text-[#202020] w-full">Salva</button>
          </div> 
        }
      </div>

      {/* Change Password */}
      <div className={classNames({
        "shadow-small rounded-[20px]": passwordAccordion
      })}>
        <div className={classNames({
          "p-4 flex items-center justify-between hover:bg-[#F3F3F3] dark:hover:bg-[#181717]":true,
          "border-b border-[#363636] rounded-b-[0px] border-opacity-30": passwordAccordion, 
          "rounded-[20px]": !passwordAccordion
        })} 
          onClick={(e) => handlePasswordAccordion(e)}>
          <div className="flex items-center gap-[20px]">
            <div className="p-3 rounded-full bg-[#E3E3E3] dark:bg-[#2B2B2B]">
              <PiLockKeyLight size={30} />
            </div>
            <div>
              <p className="text-[20px] font-semibold">Cambiare la password</p>
              <p className="text-[16px] font-normal">************</p>
            </div>
          </div>
          <PlusIcon accordionOpen={passwordAccordion} />
        </div>
        {
          passwordAccordion === true && <div className="px-4 py-4 flex flex-col gap-6">
            <div className="bg-[#F3F3F3] dark:bg-[#181717] rounded-[20px] p-4 flex items-start gap-5 w-[450px] max-[768px]:w-full">
              <div className="p-2 rounded-full bg-[#edc843]">
                <AiOutlineExclamation size={30} color="#363636" />
              </div>
              <div className="flex flex-col gap-3"> 
                <span className="text-[18px]">We will never send you a temporary password by phone, email or text message. When changing your password, always use something that’s only known by you.</span>
                <div className="flex gap-2 items-center">
                  <p className="font-semibold text-[18px] pb-[5px] border-b border-[#363636]">Learn how to keep your account safe</p>
                  <TfiNewWindow size={20} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-[450px] max-[768px]:w-full">
              <span className="text-[18px]">password attuale</span>
              <input 
                value={currentPassword} 
                className='text-titles px-[10px] bg-transparent py-[5px] w-full focus:outline-none border border-[#363636] border-opacity-30 rounded-[10px]' 
                type='password' 
                placeholder="Inserisci la tua password" 
                onChange={(e) => setCurrentPassword(e.target.value)} />
            </div>
            <div className="flex flex-col gap-2 w-[450px] max-[768px]:w-full">
              <span className="text-[18px]">nuova password</span>
              <input 
                value={newPassword} 
                className='text-titles px-[10px] bg-transparent py-[5px] w-full focus:outline-none border border-[#363636] border-opacity-30 rounded-[10px]' 
                type='password' 
                placeholder="Inserisci la tua password" 
                onChange={(e) => setNewPassword(e.target.value)} />
            </div>
            <button disabled={currentPassword !== "" && newPassword !== "" ? false : true} 
              className={classNames({
                "px-12 py-2 rounded-[30px] text-[20px] font-semibold w-fit": true,  
                "bg-[#D6D6D6] text-[#959595]": currentPassword === "" || newPassword === "", 
                "bg-[#0ACF83] text-white": currentPassword !== "" && newPassword !== ""
              })}>Salva</button>
          </div> 
        }
      </div>

      {/* two step Verification */}
      <div className={classNames({
        "shadow-small rounded-[20px]": stepAccordion
      })}>
        <div className={classNames({
          "p-4 flex items-center justify-between hover:bg-[#F3F3F3] dark:hover:bg-[#181717]":true,
          "border-b border-[#363636] rounded-b-[0px] border-opacity-30": stepAccordion, 
          "rounded-[20px]": !stepAccordion
        })} 
          onClick={(e) => handleStepAccordion(e)}>
          <div className="flex items-center gap-[20px]">
            <div className="p-3 rounded-full bg-[#E3E3E3] dark:bg-[#2B2B2B]">
              <IoPhonePortraitOutline size={30} />
            </div>
            <div>
              <p className="text-[20px] font-semibold">Verifica in due passaggi</p>
              <p className="text-[16px] font-normal">Gestisci i tuoi metodi di verifica in due passaggi</p>
            </div>
          </div>
          <PlusIcon accordionOpen={stepAccordion} />
        </div>
        {
          stepAccordion === true && <div className="px-4 py-4 flex flex-col gap-6">
            <button className="bg-[#0ACF83] px-8 py-2 rounded-[30px] text-[20px] font-semibold text-white dark:text-[#202020] w-fit">Modifica le impostazioni della verifica in due passaggi</button>
          </div> 
        }
      </div>

      {/* log out */}
      <div className={classNames({
        "shadow-small rounded-[20px]": logoutAccordion
      })}>
        <div className={classNames({
          "p-4 flex items-center justify-between hover:bg-[#F3F3F3] dark:hover:bg-[#181717]":true,
          "border-b border-[#363636] rounded-b-[0px] border-opacity-30": logoutAccordion, 
          "rounded-[20px]": !logoutAccordion
        })} 
          onClick={(e) => handleLogoutAccordion(e)}>
          <div className="flex items-center gap-[20px]">
            <div className="p-3 rounded-full bg-[#E3E3E3] dark:bg-[#2B2B2B]">
              <IoCloseCircleOutline size={30} />
            </div>
            <div>
              <p className="text-[20px] font-semibold">Chiudi il tuo account</p>
              <p className="text-[16px] font-normal">Se vuoi smettere di usare Regaloso</p>
            </div>
          </div>
          <PlusIcon accordionOpen={logoutAccordion} />
        </div>
        {
          logoutAccordion === true && <div className="px-4 py-4 flex flex-col gap-6">
            <button className="bg-[#0ACF83] px-8 py-2 rounded-[30px] text-[20px] font-semibold text-white dark:text-[#202020] w-fit">Continua</button>
          </div> 
        }
      </div>
    </main>
  )
}
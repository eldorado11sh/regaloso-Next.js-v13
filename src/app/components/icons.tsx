import React from 'react';

type Props = {
  width?: number;
  height?: number;
  accordionOpen: Boolean
}

export const CrossIcon: React.FC<Props> = ({ width = 53, height = 54 }) => {
  return (
    <>
      <svg width={width} height={height} viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.0132 27L39.8472 16.9805C40.3139 16.5058 40.5765 15.8616 40.577 15.1897C40.5776 14.5178 40.3162 13.8732 39.8503 13.3977C39.3844 12.9222 38.7522 12.6547 38.0928 12.6541C37.4333 12.6535 36.8006 12.9198 36.3339 13.3945L26.4999 23.4141L16.6659 13.3945C16.1992 12.919 15.5662 12.6519 14.9062 12.6519C14.2461 12.6519 13.6131 12.919 13.1464 13.3945C12.6797 13.8701 12.4175 14.515 12.4175 15.1875C12.4175 15.86 12.6797 16.5049 13.1464 16.9805L22.9804 27L13.1464 37.0195C12.6797 37.4951 12.4175 38.14 12.4175 38.8125C12.4175 39.485 12.6797 40.1299 13.1464 40.6055C13.6131 41.081 14.2461 41.3481 14.9062 41.3481C15.5662 41.3481 16.1992 41.081 16.6659 40.6055L26.4999 30.5859L36.3339 40.6055C36.8006 41.081 37.4336 41.3481 38.0937 41.3481C38.7537 41.3481 39.3867 41.081 39.8534 40.6055C40.3201 40.1299 40.5823 39.485 40.5823 38.8125C40.5823 38.14 40.3201 37.4951 39.8534 37.0195L30.0132 27Z" fill="#363636" />
        <rect x="0.5" y="0.5" width="52" height="53" rx="26" stroke="#363636" />
      </svg>

    </>
  )
}

export const PlusIcon: React.FC<Props> = ({ accordionOpen }) => {
  return (
    <>
      <svg className="fill-[#0ACF83] shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <rect y="7" width="16" height="2" rx="1" className={`ttransform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
        <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
      </svg>   

    </>
  )
}
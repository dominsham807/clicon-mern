import React, { useEffect, useRef } from 'react'

const PaymentCardModal = ({ showCardModal, setShowCardModal }) => {
    const paymentCardRef = useRef()

    useEffect(() => {
        const paymentHandler = (e) => {
            if(paymentCardRef.current && paymentCardRef.current.contains(e.target) && e.target === paymentCardRef.current){
                setShowCardModal(false) 
            }
        }

        const setOverflowHidden = () => {
            if(showCardModal){
                document.body.style.overflowY = "hidden" 
            } else{
                document.body.style.overflowY = "scroll" 
            }
        }
        setOverflowHidden()

        document.addEventListener("click", paymentHandler)  

        return() => {
            document.removeEventListener("click", paymentHandler)  
        }
    }, [showCardModal])

    return (
        <div className={`modal fade ${showCardModal ? "show" : ""}`} id='paymentCardModal' tabIndex={-1} aria-modal="true" role='dialog'>
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    afds
                </div>
            </div>
            <div className="modal-overlay hidden" ref={paymentCardRef}></div>
        </div>
    )
}

export default PaymentCardModal
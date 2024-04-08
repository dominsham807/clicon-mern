import React, { useEffect, useRef } from 'react' 
import ProductDetails from './ProductDetails'

const ProductModal = ({ show, setShow, selectedProduct }) => {  
    const modalRef = useRef()

    useEffect(() => { 
        const modalHandler = (e) => { 
            if(modalRef.current && modalRef.current.contains(e.target) && e.target === modalRef.current){
                setShow(false) 
            }
        }
    
        const setOverflowHidden = () => {
            if(show){
                document.body.style.overflowY = "hidden" 
            } else{
                document.body.style.overflowY = "scroll"
            }
        }
        setOverflowHidden()
       
        document.addEventListener("click", modalHandler)  

        return() => {
            document.removeEventListener("click", modalHandler)  
        }
    }, [show])

    return (
        <div className={`modal fade ${show ? "show" : ""}`} tabIndex={-1} aria-modal="true" role='dialog'>
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="product-modal-slider"> 
                        <ProductDetails selectedProduct={selectedProduct} />
                    </div>
                </div>
            </div>
            <div className="modal-overlay hidden" ref={modalRef}></div>
        </div>
    )
}

export default ProductModal
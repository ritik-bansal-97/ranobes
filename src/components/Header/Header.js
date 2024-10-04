import React, { useState } from "react";
import './Header.scss'
import Bottomsheet from "../../widgets/Bottomsheet/Bottomsheet";
import LoginPage from "../LoginPage/LoginPage";

const Header = () => {
    const [showOptions, setShowOptions] = useState(false)
    const [hamburgerHidden, setHamburgerHidden] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [showBottomsheet, setShowBottomsheet] = useState(false)
    const listOfItems1 = [{ title: "Home", count: null, icon: "fas fa-home" }, { title: "Novels", count: 2345, icon: "fas fa-book-open" }, { title: "Updates", count: 1209, icon: "fas fa-sync" }, { title: "Popular", count: 100, icon: "fas fa-fire" }]
    const listOfItems2 = [{ title: "Genre Catalog", count: 150, icon: "fas fa-list" }, { title: "Completed Novels", count: 1500, icon: "fas fa-clipboard-check" }, { title: "Suggest a novel", count: null, icon: "fas fa-folder-plus" }, { title: "Collections", count: null, icon: "fa-solid fa-share-nodes" }]
    const listOfItems3 = [{ title: "Statistics", count: null, icon: "fas fa-home" }, { title: "Local Search Engine", count: null, icon: "fas fa-search" }, { title: "Contacts", count: null, icon: "fas fa-envelope" }, { title: "Rules", count: null, icon: "fas fa-receipt" }]
    return (
        <div className="relative">
            <div className="container">
                <div onClick={() => {
                    if (showOptions) {
                        setHamburgerHidden(true)
                        document.body.classList.remove('overflowHidden');
                        setTimeout(() => {
                            setInputValue("")
                            setShowOptions(!showOptions)
                        }, 400)
                    } else {
                        setHamburgerHidden(false)
                        document.body.classList.add('overflowHidden');
                        setShowOptions(!showOptions)
                    }

                }}>
                    {showOptions ? "X" : "Menu"}
                </div>
                <div className="flex">
                    <div onClick={() => setShowBottomsheet(true)} className="button">Login</div>
                    <div className="marginLeft8 button" onClick={() => window.location.href = "/"}>
                        Sign up
                    </div>

                </div>
            </div>
            {showOptions &&
                <div className={`hamburgerContainer ${hamburgerHidden && "hidden"}`} >
                    <div className="flex alignCenter">
                        <input placeholder="Search for a novel" className="input" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                        <i className="fas fa-search searchIcon"></i>
                    </div>
                    <div className="width100Per">{listOfItems1?.map((item) => {
                        return (<div className="hamburgerElementContainer width100Per justifyBetween">
                            <div className="title">
                                <i className={`${item.icon} elementTag`}></i>
                                <div className="hamburgerElement">{item.title}</div>
                            </div>
                            {item.count && <div className="marginRight16">{item.count}</div>}
                        </div>)
                    })
                    }</div>
                    <div className="separator" />
                    <div className="width100Per">{listOfItems2?.map((item) => {
                        return (<div className="hamburgerElementContainer width100Per justifyBetween">
                            <div className="title">
                                <i className={`${item.icon} elementTag`}></i>
                                <div className="hamburgerElement">{item.title}</div>
                            </div>
                            {item.count && <div className="marginRight16">{item.count}</div>}
                        </div>)
                    })
                    }</div>
                    <div className="separator" />
                    <div className="width100Per">{listOfItems3?.map((item) => {
                        return (<div className="hamburgerElementContainer width100Per justifyBetween">
                            <div className="title">
                                <i className={`${item.icon} elementTag`}></i>
                                <div className="hamburgerElement">{item.title}</div>
                            </div>
                            {item.count && <div className="marginRight16">{item.count}</div>}
                        </div>)
                    })
                    }</div>



                </div>}
            <Bottomsheet show={showBottomsheet} handleToggle={() => setShowBottomsheet(false)}>
                <LoginPage />
            </Bottomsheet>

        </div>
    )

}

export default Header
import {useEffect, useState} from "react";

// import {modalAction} from "../../store/actions/modal";
// import {setSticky} from "../../store/actions/sticky";

// import {scroll} from "../total/scrollOnClick";
// import { useDispatch, useSelector } from "react-redux";

export function HeaderMenu() {
    // const dispatch = useDispatch();
    // const isSticky = useSelector(store=>store.sticky.sticky);
    // useEffect(()=>{
    //     const offsetY = 150;
    //     const menuEl = document.querySelector(".menu");
    //
    //     document.addEventListener("scroll", (e) => {
    //
    //         if (Math.abs(document.documentElement.getBoundingClientRect().y) > offsetY && !menuEl.classList.contains("sticky")) {
    //             menuEl.classList.add("sticky");
    //             dispatch(setSticky(true));
    //         } else if (Math.abs(document.documentElement.getBoundingClientRect().y) < offsetY) {
    //             menuEl.classList.remove("sticky");
    //             dispatch(setSticky(false));
    //         }
    //     })
    // }, []);
    //
    // const menuClasses = isSticky ? "menu sticky" : "menu";

    return (
        <header className="header-menu">
            <div className="header-menu__container container">
                <div className="header-menu__logo">
                    <img src='/assets/img/logo.svg' className="logo" alt="Логотип"/>
                </div>
                <div className="header-menu__navigation-bar">
                    <nav className="header-menu__navigation-bar--navigation">
                        <div className="header-menu__navigation-bar--link">Команда</div>
                        <div className="header-menu__navigation-bar--link">Доставка</div>
                        <div className="header-menu__navigation-bar--link">Контакты</div>
                    </nav>
                    <div className="header-menu__navigation-bar--contact">
                        <span className="phone">+7 978 062 52 81</span>
                        <span className="telegram"></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

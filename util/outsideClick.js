import { useEffect, useRef, useState } from "react";
import Route from 'next/router';


const useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        // let maybeHandler = (event) => {
        //     if (!domNode.current.contains(event.target)) {
        //         handler();
        //     }
        // };

        // document.addEventListener("mousedown", maybeHandler);

        // return () => {
        //     document.removeEventListener("mousedown", maybeHandler);
        // };
        const listRouteMiddleware = ['/profile']
        if(listRouteMiddleware.includes(Route.pathname) && localStorage.getItem('token') == null)
        {
            Route.push('login')
        }
        const isLogin = ['/login','/register']
        if(isLogin.includes(Route.pathname) && localStorage.getItem('token') !== null)
        {
            Route.push('/')
        }

    });

    return domNode;
};

export default useClickOutside;
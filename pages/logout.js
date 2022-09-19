import { useEffect, useRef, useState } from "react";
import Route from 'next/router';

function Blank() {
    useEffect(async () => {
        if(localStorage.getItem('token') !== null){
            localStorage.removeItem('token')
            Route.push('/')
        }   
    });
    return (<div></div>)
}

export default Blank
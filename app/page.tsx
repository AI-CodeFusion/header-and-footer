"use client"

import { useEffect } from "react";
import Hero from "./components/hero/page";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function myname() {
useEffect(() => {
  AOS.init ({
    easing:"ease-out-back",
    duration:1200,
    delay:100,
    once:true,
  });
  AOS.refresh();
},[]);
  return (
    <div>
<Hero/>
    </div>
  );
}

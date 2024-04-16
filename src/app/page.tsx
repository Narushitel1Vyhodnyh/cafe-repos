import About from '@/components/About/About';
import Image from "next/image";

import React from 'react'
import Contact from "@/components/Contact/Contact";
import Menu from "@/components/Menu/Menu";

export default function page() {
  return (
    <main>
      <About />
      <Menu />
      <Contact />
    </main>
  )
}

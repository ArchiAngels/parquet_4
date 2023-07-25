'use client'

import ru_eng from "@/ru_eng";
import Header from "@/components/header/header";
import NextSection from '@/components/section_1/html';
import NextSection2 from '@/components/section_2/html';
import NextSection3 from '@/components/section_3/html';
import NextSection4 from '@/components/section_4/html';
import React, { useState } from 'react'
import "./globals.css"



export default function Main(){

  const [language, setLanguage] = useState("RU");

  let onRus = () => {
    setLanguage("RU")
  }
  let onEng = () => {
    setLanguage("EN")
  }

  return(
    <>

      <Header onEng={onEng} onRus={onRus} language={language} texts={ru_eng}></Header>

      <NextSection language={language} texts={ru_eng}/>
      <NextSection2 language={language} texts={ru_eng}/>
      <NextSection3 language={language} texts={ru_eng}/>
      <NextSection4 language={language} texts={ru_eng}/>
      <h1>{language}</h1>
    </>
  )
}
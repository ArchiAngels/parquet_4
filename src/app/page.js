'use client'

import ru_eng from "@/ru_eng";
import Header from "@/components/header/header";
import NextSection from '@/components/section_1/html';
import NextSection2 from '@/components/section_2/html';
import React, { useState } from 'react'
import "./globals.css"



export default function main(){

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
      <h1>{language}</h1>
    </>
  )
}
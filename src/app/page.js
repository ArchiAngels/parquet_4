'use client'

import ru_eng from "@/ru_eng";
import Header from "@/components/header/header";
import NextSection from '@/components/section_1/html';
import NextSection2 from '@/components/section_2/html';
import NextSection3 from '@/components/section_3/html';
import NextSection4 from '@/components/section_4/html';
import NextSection5 from '@/components/section_5/html';
import NextSection6 from '@/components/section_6/html';

import NextSection7 from '@/components/section_7/html';

import NextSection8 from '@/components/section_8/html';

import NextSection9 from '@/components/section_9/html';

import NextSection10 from '@/components/section_10/html';

import NextSection11 from '@/components/section_11/html';

import NextSection12 from '@/components/section_12/html';

import NextSection13 from '@/components/section_13/html';

import NextSection14 from '@/components/section_14/html';

import NextSection15 from '@/components/section_15/html';
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
      <NextSection5 language={language} texts={ru_eng}/>
      <NextSection6 language={language} texts={ru_eng}/>
      <NextSection7 language={language} texts={ru_eng}/>
      <NextSection8 language={language} texts={ru_eng}/>
      <NextSection9 language={language} texts={ru_eng}/>

      <NextSection10 language={language} texts={ru_eng}/>

      <NextSection11 language={language} texts={ru_eng}/>

      <NextSection12 language={language} texts={ru_eng}/>

      <NextSection13 language={language} texts={ru_eng}/>

      <NextSection14 language={language} texts={ru_eng}/>

      <NextSection15 language={language} texts={ru_eng}/>
    </>
  )
}
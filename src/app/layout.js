export const metadata = {
  title: 'Global Parquet',
}

import localFont from 'next/font/local'
const MyFonts = localFont({ src: [
    {
      path:'../../public/fonts/Inter-Bold.ttf',
      weight:'700',
      style:'normal'
    },
    {
      path:'../../public/fonts/mont/SemiBold.ttf',
      weight:'600',
      style:'normal'
    },
    {
      path:'../../public/fonts/mont/Regular.ttf',
      weight:'400',
      style:'normal'
    },
    {
      path:'../../public/fonts/mont/Medium.ttf',
      weight:'500',
      style:'normal'
    }

]})
 
export default function RootLayout({ children }) {
 return (
    <html lang="en" className={MyFonts.className}>
      <body>{children}</body>
    </html>
  )
}

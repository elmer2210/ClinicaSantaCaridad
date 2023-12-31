import '@/assets/css/base/global.css'

export const metadata = {
  title: 'La Caridad',
  description: 'Clínica especialista',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet"/>
        <link rel='icon' href='/faicon.ico' />
      </head>
      <body>{children}</body>
    </html>
  )
}

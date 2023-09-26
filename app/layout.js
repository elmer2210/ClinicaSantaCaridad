import '@/assets/css/base/global.css'
import '@/assets/css/base/reset.style.css'

export const metadata = {
  title: 'Santa Caridad',
  description: 'Clínica especialista',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet"/>
      </head>
      <body>{children}</body>
    </html>
  )
}

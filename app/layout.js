import '@/assets/css/global.css'

export const metadata = {
  title: 'Santa Caridad',
  description: 'Clínica especialista',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

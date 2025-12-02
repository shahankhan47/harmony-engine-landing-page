import './globals.css'
import './variables.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


export const metadata = {
  title: 'Harmony Engine',
  description: 'Understand legacy codebase with AI',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
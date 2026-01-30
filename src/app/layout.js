import './globals.css'
import './variables.css'
import Script from "next/script";
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


export const metadata = {
  title: 'Harmony Engine',
  description: 'Understand legacy codebase with AI',
}

const isProd = process.env.NODE_ENV === "production";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {isProd && <head>
        <Script
          id="ms-clarity"
          strategy="afterInteractive"
        >
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/v4x0ebm5c7";
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script");
          `}
        </Script>
      </head>}
      <body>
        <Header />
          <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
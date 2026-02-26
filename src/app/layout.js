import "./globals.css";
import "./variables.css";

import Script from "next/script";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: 'Harmony Engine',
  description: 'Understand legacy codebase with AI',
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
  },
}

const isProd = process.env.NEXT_PUBLIC_HE_ENVIRONMENT === "production";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {isProd && (
          <Script id="ms-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/v4x0ebm5c7";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script");
            `}
          </Script>
        )}
      </head>
      <body>
        <Header />
          <main>
            {children}
          </main>
        <Footer />
        {isProd && (
          <>
            {/* LinkedIn Insight Tag */}
            <Script id="linkedin-partner-init" strategy="afterInteractive">
              {`
                _linkedin_partner_id = "8872668";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              `}
            </Script>

            <Script
              id="linkedin-insight"
              src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
              strategy="afterInteractive"
            />

            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                alt=""
                src="https://px.ads.linkedin.com/collect/?pid=8872668&fmt=gif"
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
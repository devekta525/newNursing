'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'

const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ?? '919391330877527'

type FacebookWindow = Window & {
  fbq?: (...args: unknown[]) => void
}

export function FacebookPixel() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const hasTrackedInitialPage = useRef(false)
  const search = searchParams.toString()

  useEffect(() => {
    const fbq = (window as FacebookWindow).fbq
    if (!fbq) return

    if (!hasTrackedInitialPage.current) {
      hasTrackedInitialPage.current = true
      return
    }

    fbq('track', 'PageView')
  }, [pathname, search])

  return (
    <>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          alt=""
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  )
}

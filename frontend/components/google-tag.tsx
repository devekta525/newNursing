'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'

const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID ?? 'G-J4GRYXCJP6'

type GoogleWindow = Window & {
  gtag?: (...args: unknown[]) => void
  dataLayer?: unknown[]
}

export function GoogleTag() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const hasTrackedInitialPage = useRef(false)
  const search = searchParams.toString()

  useEffect(() => {
    const gtag = (window as GoogleWindow).gtag
    if (!gtag) return

    if (!hasTrackedInitialPage.current) {
      hasTrackedInitialPage.current = true
      return
    }

    const pagePath = search ? `${pathname}?${search}` : pathname
    gtag('config', googleTagId, { page_path: pagePath })
  }, [pathname, search])

  return (
    <>
      <Script
        id="google-tag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${googleTagId}');
        `}
      </Script>
    </>
  )
}

import styled from '@emotion/styled'
import { memo, useEffect, useRef } from 'react'

export function UtterancesImpl({ theme }: { theme: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current

    if (!container) return

    // Check if iframe already exists
    const iframe =
      container.querySelector<HTMLIFrameElement>('.utterances-frame')

    if (!iframe) {
      // If no iframe exists, create the script for the first time
      const script = document.createElement('script')
      script.src = 'https://utteranc.es/client.js'
      script.crossOrigin = 'anonymous'
      script.async = true
      script.setAttribute('repo', 'swampholyten/blog-comments')
      script.setAttribute('issue-term', 'title')
      script.setAttribute('theme', theme)
      script.setAttribute('label', '✨💬✨ Utterances')
      container.append(script)
    } else {
      // If iframe exists, send a postMessage to change the theme
      iframe.contentWindow?.postMessage(
        { type: 'set-theme', theme },
        'https://utteranc.es'
      )
    }
  }, [theme]) // Dependency array ensures effect runs only when theme changes

  return <StyledWrapper id='comments' ref={containerRef}></StyledWrapper>
}

export const Utterances = memo(UtterancesImpl)

const StyledWrapper = styled.div`
  @media (min-width: 768px) {
    margin-left: -4rem;
  }
`

import { useEffect, useRef, useState } from 'react'

function RevealSection({ id, className = '', children }) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(() => typeof IntersectionObserver === 'undefined')

    useEffect(() => {
        const element = ref.current

        if (!element || typeof IntersectionObserver === 'undefined') {
            return undefined
        }

        const observer = new IntersectionObserver(
            ([entry], currentObserver) => {
                if (!entry.isIntersecting) {
                    return
                }

                setIsVisible(true)
                currentObserver.disconnect()
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -12% 0px',
            },
        )

        observer.observe(element)

        return () => {
            observer.disconnect()
        }
    }, [])

    const sectionClassName = isVisible
        ? `reveal-section is-visible ${className}`.trim()
        : `reveal-section ${className}`.trim()

    return (
        <section ref={ref} id={id} className={sectionClassName}>{children}</section>
    )
}

export default RevealSection

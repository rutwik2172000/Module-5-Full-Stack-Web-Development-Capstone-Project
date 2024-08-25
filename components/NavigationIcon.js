import Link from 'next/link'

export default function NavigationIcon({ children, href }) {
  return (
    <Link href={href} passHref className='cursor-pointer'>{children}
    </Link>
  )
}

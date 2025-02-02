import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'PowerhouseElectrics - Professional Electrical Services',
    description: 'Expert electrical services for residential and commercial needs',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>

        {children}
        </body>
        </html>
    )
}


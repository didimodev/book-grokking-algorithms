import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ThemeProvider } from '@/components/theme-provider'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/global/app-sidebar'
import { ModeToggle } from '@/components/global/mode-toggle'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Entendendo Algoritmos - Esse é um projeto de estudo de algoritmos',
  description:
    'Esse é um projeto de estudo de algoritmos, sem fins lucrativos, com o objetivo de ajudar a comunidade de desenvolvedores a entender melhor como os algoritmos funcionam.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <SidebarProvider>
            <AppSidebar />
            <main className="w-screen">
              <div className="w-full flex flex-row justify-between p-4">
                <SidebarTrigger />
                <ModeToggle />
              </div>

              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

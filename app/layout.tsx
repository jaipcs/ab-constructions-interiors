import './globals.css'

export const metadata = {
  title: 'A & B Constructions and Interiors Ltd',
  description:
    'Luxury Architecture, Interior Design, Construction, Commercial and Residential Projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
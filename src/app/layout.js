import './globals.css'

export const metadata = {
  title: 'IMDb',
  description: 'This is IMDb clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

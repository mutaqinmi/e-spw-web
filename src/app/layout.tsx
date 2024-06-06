export const metadata = {
  title: 'eSPW',
  description: 'Beli apa aja, bisa dimana aja!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

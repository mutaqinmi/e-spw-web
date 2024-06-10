export const metadata = {
  title: 'eSPW | Beli apa aja, bisa dimana aja!',
  description: 'Dapatkan produk yang kamu inginkan dengan kemudahan berbelanja online hanya di eSPW!',
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

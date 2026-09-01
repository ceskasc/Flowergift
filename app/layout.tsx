import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'Bir Buket, Bir Özür 🌷',description:'Sana anlatmak istediğim küçük bir dünya.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="tr"><body>{children}</body></html>}
import './globals.css';
import type {Metadata} from 'next';
export const metadata:Metadata={title:'Insta-Doctor | Healthcare, One Click Away',description:'Find trusted doctors and book healthcare appointments online.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

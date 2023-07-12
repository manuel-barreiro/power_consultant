import '@styles/globals.css';
import { Children } from 'react';
import Nav from '@components/Nav';

export const metadata = {
    title: 'Power Consultant S.A.',
    description: 'Power Consultant Cajeros Automaticos'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>

            <main className='app font-inter'>
                <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;
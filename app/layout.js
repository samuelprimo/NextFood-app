import './globals.css';
import MainHeader from '../components/main-header/main-header';


export const metadata = {
  title: 'Unifood',
  description: 'Aqui você encontra as melhores refeições da universidade!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        
        <MainHeader />
        {children}
      </body>
    </html>
  );
}

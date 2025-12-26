import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ThankYou from './pages/ThankYou'
import LegalAdvice from './pages/Legal/LegalAdvice'
import PrivacyPolicy from './pages/Legal/PrivacyPolicy'
import CookiesPolicy from './pages/Legal/CookiesPolicy'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="thank-you" element={<ThankYou />} />

          {/* Legal */}
          <Route path="aviso-legal" element={<LegalAdvice />} />
          <Route path="politica-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="politica-de-cookies" element={<CookiesPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Ensure viewport-fit=cover for iPhone notch / home indicator safe areas
const viewportMeta = document.querySelector('meta[name="viewport"]')
if (viewportMeta && !viewportMeta.getAttribute('content')?.includes('viewport-fit')) {
  viewportMeta.setAttribute('content', (viewportMeta.getAttribute('content') ?? '') + ', viewport-fit=cover')
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; message: string }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false, message: '' }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error.message }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100dvh', padding: '24px', fontFamily: 'sans-serif', background: '#f6faf2', color: '#1f3b28', textAlign: 'center' }}>
          <p style={{ fontSize: '2rem', marginBottom: '12px' }}>⚠️</p>
          <p style={{ fontWeight: 700, marginBottom: '8px' }}>Terjadi kesalahan saat memuat app</p>
          <p style={{ fontSize: '13px', color: '#6d8a76', marginBottom: '24px' }}>{this.state.message}</p>
          <button
            onClick={() => window.location.reload()}
            style={{ padding: '10px 24px', borderRadius: '12px', background: '#58a700', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer' }}
          >
            Muat Ulang
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)

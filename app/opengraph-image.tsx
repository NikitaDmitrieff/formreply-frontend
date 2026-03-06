import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'FormReply — AI Reply Drafts for Typeform Submissions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '60px 80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Left side */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '640px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#6366f1',
              }}
            />
            <span
              style={{
                color: '#6b7280',
                fontSize: '16px',
                fontFamily: 'monospace',
                letterSpacing: '0.02em',
              }}
            >
              Typeform webhook received
            </span>
          </div>

          <h1
            style={{
              color: '#ffffff',
              fontSize: '54px',
              fontWeight: 700,
              lineHeight: 1.15,
              margin: 0,
              marginBottom: '32px',
            }}
          >
            Reply draft in your inbox in 10 seconds.
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ color: '#6366f1', fontSize: '22px', fontWeight: 700 }}>
              FormReply
            </span>
            <span style={{ color: '#374151', fontSize: '22px' }}>·</span>
            <span style={{ color: '#6b7280', fontSize: '20px' }}>$19/month</span>
            <span style={{ color: '#374151', fontSize: '22px' }}>·</span>
            <span style={{ color: '#6b7280', fontSize: '20px' }}>14-day free trial</span>
          </div>
        </div>

        {/* Right side — email draft card mockup */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            background: '#111827',
            borderRadius: '20px',
            padding: '28px',
            width: '360px',
            border: '1px solid #1f2937',
          }}
        >
          {/* Card header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: '#6366f1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '14px',
                fontWeight: 700,
              }}
            >
              AI
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ color: '#f9fafb', fontSize: '13px', fontWeight: 600 }}>
                Reply draft ready
              </span>
              <span style={{ color: '#6b7280', fontSize: '11px' }}>
                delivered in ~10 seconds
              </span>
            </div>
          </div>

          {/* Draft body */}
          <div style={{ color: '#9ca3af', fontSize: '12px', lineHeight: 1.7 }}>
            <div style={{ marginBottom: '10px' }}>Hi Alex,</div>
            <div style={{ marginBottom: '10px' }}>
              Thank you for reaching out! I&apos;d be happy to share more about our services and how we can help with your project.
            </div>
            <div
              style={{
                background: '#1f2937',
                height: '8px',
                borderRadius: '4px',
                marginBottom: '8px',
                width: '100%',
              }}
            />
            <div
              style={{
                background: '#1f2937',
                height: '8px',
                borderRadius: '4px',
                marginBottom: '8px',
                width: '85%',
              }}
            />
            <div
              style={{
                background: '#1f2937',
                height: '8px',
                borderRadius: '4px',
                width: '60%',
              }}
            />
          </div>

          {/* Card footer */}
          <div
            style={{
              marginTop: '20px',
              paddingTop: '16px',
              borderTop: '1px solid #1f2937',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ color: '#4b5563', fontSize: '11px' }}>Draft · Review before sending</span>
            <div
              style={{
                background: '#6366f1',
                color: 'white',
                fontSize: '11px',
                fontWeight: 600,
                padding: '4px 12px',
                borderRadius: '6px',
              }}
            >
              Send
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

'use client';

import Link from 'next/link';

export default function CTASection() {
    return (
        <section style={{
            background: '#fff',
            padding: '120px 20px',
            position: 'relative'
        }}>
            <div className="container-max" style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
                <div style={{
                    background: 'linear-gradient(135deg, #0A0F1E 0%, #1A2642 100%)',
                    borderRadius: '24px',
                    padding: '80px 40px',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 32px 64px rgba(10, 15, 30, 0.15)'
                }}>
                    {/* Background decorations */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
                        backgroundSize: '32px 32px',
                        pointerEvents: 'none',
                    }} />

                    <div style={{
                        position: 'absolute',
                        top: '-150px',
                        right: '-150px',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(0, 87, 255, 0.2) 0%, transparent 70%)',
                        pointerEvents: 'none',
                    }} />

                    <div style={{
                        position: 'absolute',
                        bottom: '-150px',
                        left: '-150px',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(0, 198, 255, 0.15) 0%, transparent 70%)',
                        pointerEvents: 'none',
                    }} />

                    {/* Content */}
                    <div style={{ position: 'relative', zIndex: 2, maxWidth: '640px', margin: '0 auto' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '64px',
                            height: '64px',
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '50%',
                            marginBottom: '32px'
                        }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="#00C6FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 10h.01M12 10h.01M16 10h.01" stroke="#00C6FF" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </div>

                        <h2 style={{
                            fontFamily: 'Outfit, sans-serif',
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 800,
                            color: '#fff',
                            marginBottom: '24px',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.1
                        }}>
                            Talk to a Solutions Consultant
                        </h2>

                        <p style={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '1.15rem',
                            lineHeight: 1.6,
                            marginBottom: '48px',
                            maxWidth: '540px',
                            margin: '0 auto 48px auto'
                        }}>
                            Get a free 30-minute discovery call to map the right technology path for your operations: SaaS, Custom, or AI.
                        </p>

                        <div style={{
                            display: 'flex',
                            gap: '16px',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            marginBottom: '32px'
                        }}>
                            <Link href="/contact" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: '#0057FF',
                                color: '#fff',
                                padding: '16px 36px',
                                borderRadius: '8px',
                                fontSize: '1.05rem',
                                fontWeight: 600,
                                textDecoration: 'none',
                                transition: 'background 0.2s',
                                boxShadow: '0 4px 14px rgba(0,87,255,0.4)',
                            }}
                                onMouseEnter={e => e.currentTarget.style.background = '#004DE6'}
                                onMouseLeave={e => e.currentTarget.style.background = '#0057FF'}
                            >
                                Book a Call
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.33334 8H12.6667M8.66668 4L12.6667 8L8.66668 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>

                            <Link href="/demo" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '16px 36px',
                                background: 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: '#fff',
                                borderRadius: '8px',
                                fontSize: '1.05rem',
                                fontWeight: 600,
                                textDecoration: 'none',
                                transition: 'all 0.2s'
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                                }}
                            >
                                Request Demo
                            </Link>
                        </div>

                        <div style={{
                            fontSize: '0.9rem',
                            color: 'rgba(255,255,255,0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px'
                        }}>
                            Prefer Email? <a href="mailto:hello@knoweb.com" style={{ color: '#00C6FF', textDecoration: 'none', fontWeight: 600 }}>hello@knoweb.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

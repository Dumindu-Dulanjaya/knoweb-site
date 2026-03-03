'use client';

import Link from 'next/link';

export default function WhyKnowebSection() {
    return (
        <section className="section-pad surface-light" style={{ padding: '100px 0' }}>
            <div className="container-max">
                <div className="layout-2col" style={{ alignItems: 'center', gap: '80px' }}>

                    {/* ── Left: Story & CTA ── */}
                    <div>
                        <div className="tag" style={{ marginBottom: '24px' }}>Our Purpose</div>
                        <h2 style={{
                            fontFamily: 'Outfit, sans-serif',
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 800,
                            marginBottom: '28px',
                            color: '#0A0F1E',
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em'
                        }}>
                            Why Knoweb Exists
                        </h2>
                        <p style={{
                            color: '#4B5563',
                            fontSize: '1.1rem',
                            lineHeight: 1.7,
                            marginBottom: '24px',
                            maxWidth: '520px'
                        }}>
                            Most businesses don't need more software complexity. They need platforms that work on day one.
                            Knoweb was built on a simple belief: prioritize <strong>practical systems over complexity</strong>,
                            focus relentlessly on <strong>measurable business improvement</strong>, and stand by our clients
                            as a <strong>long-term technology partner</strong> through every stage of growth.
                        </p>

                        <div style={{ marginTop: '40px' }}>
                            <Link href="/about" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                color: '#0057FF', fontWeight: 700, fontSize: '1rem',
                                textDecoration: 'none', transition: 'gap 0.2s',
                            }}
                                onMouseEnter={(e) => (e.currentTarget.style.gap = '12px')}
                                onMouseLeave={(e) => (e.currentTarget.style.gap = '8px')}
                            >
                                Know More About Us
                                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10H16M10 4L16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* ── Right: Abstract System SVG ── */}
                    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                        {/* Decorative background blob */}
                        <div style={{
                            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                            width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,87,255,0.06) 0%, transparent 70%)',
                            zIndex: 0
                        }}></div>

                        {/* Abstract System SVG Illustration */}
                        <svg width="100%" height="auto" viewBox="0 0 400 360" fill="none" style={{ position: 'relative', zIndex: 1, maxWidth: '420px' }}>
                            {/* Central Hub */}
                            <circle cx="200" cy="180" r="45" fill="#fff" stroke="#E5E7EB" strokeWidth="2" />
                            <circle cx="200" cy="180" r="35" fill="url(#blue_grad_center)" />
                            <path d="M192 180L198 186L210 174" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                            {/* Lines connecting to nodes */}
                            <path d="M200 135V70" stroke="#0057FF" strokeWidth="2" strokeDasharray="6 6" strokeOpacity="0.4" />
                            <path d="M245 180H310" stroke="#0057FF" strokeWidth="2" strokeDasharray="6 6" strokeOpacity="0.4" />
                            <path d="M200 225V290" stroke="#0057FF" strokeWidth="2" strokeDasharray="6 6" strokeOpacity="0.4" />
                            <path d="M155 180H90" stroke="#0057FF" strokeWidth="2" strokeDasharray="6 6" strokeOpacity="0.4" />
                            <path d="M232 148L270 110" stroke="#0057FF" strokeWidth="2" strokeDasharray="6 6" strokeOpacity="0.4" />
                            <path d="M168 212L130 250" stroke="#0057FF" strokeWidth="2" strokeDasharray="6 6" strokeOpacity="0.4" />

                            {/* Node 1: Top */}
                            <rect x="170" y="30" width="60" height="40" rx="8" fill="#fff" stroke="#E5E7EB" strokeWidth="1.5" />
                            <rect x="180" y="46" width="40" height="8" rx="4" fill="#EEF2FF" />

                            {/* Node 2: Right */}
                            <rect x="310" y="160" width="60" height="40" rx="8" fill="#fff" stroke="#E5E7EB" strokeWidth="1.5" />
                            <circle cx="340" cy="180" r="8" fill="#EEF2FF" />

                            {/* Node 3: Bottom */}
                            <rect x="170" y="290" width="60" height="40" rx="8" fill="#fff" stroke="#E5E7EB" strokeWidth="1.5" />
                            <rect x="185" y="306" width="10" height="10" rx="2" fill="#EEF2FF" />
                            <rect x="205" y="306" width="10" height="10" rx="2" fill="#EEF2FF" />

                            {/* Node 4: Left */}
                            <rect x="30" y="160" width="60" height="40" rx="8" fill="#fff" stroke="#E5E7EB" strokeWidth="1.5" />
                            <rect x="42" y="176" width="36" height="8" rx="4" fill="#EEF2FF" />

                            {/* Node 5: Top Right */}
                            <circle cx="280" cy="100" r="20" fill="#fff" stroke="#E5E7EB" strokeWidth="1.5" />
                            <circle cx="280" cy="100" r="10" fill="#00C6FF" fillOpacity="0.2" />

                            {/* Node 6: Bottom Left */}
                            <circle cx="120" cy="260" r="20" fill="#fff" stroke="#E5E7EB" strokeWidth="1.5" />
                            <circle cx="120" cy="260" r="10" fill="#0057FF" fillOpacity="0.1" />

                            {/* Floating decorative elements */}
                            <circle cx="260" cy="240" r="4" fill="#00C6FF" />
                            <circle cx="140" cy="110" r="6" fill="#0057FF" fillOpacity="0.4" />
                            <circle cx="330" cy="260" r="5" fill="#EEF2FF" stroke="#0057FF" strokeWidth="1" />

                            <defs>
                                <linearGradient id="blue_grad_center" x1="165" y1="145" x2="235" y2="215" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#0057FF" />
                                    <stop offset="1" stopColor="#00C6FF" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                </div>
            </div>
        </section>
    );
}

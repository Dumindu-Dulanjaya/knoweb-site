'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function WhyKnowebSection() {
    return (
        <section
            style={{
                background: '#0B0F14',
                padding: '100px 0',
                borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
        >
            <div className="container-max">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '80px',
                        alignItems: 'center',
                    }}
                    className="why-knoweb-grid"
                >
                    {/* ── Left: Text Content ── */}
                    <div>
                        {/* Tag */}
                        <div
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                background: 'rgba(34,197,94,0.1)',
                                border: '1px solid rgba(34,197,94,0.2)',
                                padding: '4px 14px', borderRadius: '100px',
                                fontSize: '0.7rem', fontWeight: 700,
                                color: '#22C55E', marginBottom: '24px',
                                letterSpacing: '0.06em', textTransform: 'uppercase',
                            }}
                        >
                            Our Purpose
                        </div>

                        <h2
                            style={{
                                fontFamily: 'Outfit, sans-serif',
                                fontSize: 'clamp(1.8rem, 3.5vw, 2.7rem)',
                                fontWeight: 800, lineHeight: 1.15,
                                color: '#F1F5F9', marginBottom: '24px',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Practical Software for{' '}
                            <span style={{ color: '#22C55E' }}>Real Business Growth.</span>
                        </h2>

                        <p
                            style={{
                                color: 'rgba(255,255,255,0.55)',
                                fontSize: '1.05rem', lineHeight: 1.75,
                                marginBottom: '20px', maxWidth: '500px',
                            }}
                        >
                            Most businesses don&apos;t need more software complexity — they need
                            platforms that work on day one. Knoweb was built on a simple belief:
                            prioritize{' '}
                            <strong style={{ color: 'rgba(255,255,255,0.8)' }}>practical systems over complexity</strong>,
                            focus relentlessly on{' '}
                            <strong style={{ color: 'rgba(255,255,255,0.8)' }}>measurable business improvement</strong>,
                            and stand by our clients as a{' '}
                            <strong style={{ color: 'rgba(255,255,255,0.8)' }}>long-term technology partner</strong>{' '}
                            through every stage of growth.
                        </p>

                        <p
                            style={{
                                color: 'rgba(255,255,255,0.45)',
                                fontSize: '0.98rem', lineHeight: 1.7,
                                marginBottom: '36px', maxWidth: '500px',
                            }}
                        >
                            From subscription-based SaaS platforms to fully custom enterprise systems
                            and AI-powered products — we replace messy spreadsheets and fragmented
                            tools with structured digital operations.
                        </p>

                        {/* CTA Link */}
                        <Link
                            href="/about"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.14)',
                                color: 'rgba(255,255,255,0.85)',
                                textDecoration: 'none',
                                fontSize: '0.9rem', fontWeight: 600,
                                padding: '12px 28px', borderRadius: '8px',
                                transition: 'all 0.22s ease',
                                letterSpacing: '0.01em',
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.1)';
                                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(34,197,94,0.3)';
                                (e.currentTarget as HTMLAnchorElement).style.color = '#22C55E';
                                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)';
                                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.14)';
                                (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.85)';
                                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                            }}
                        >
                            Know More About Us
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>

                    {/* ── Right: Team Photo ── */}
                    <div style={{ position: 'relative' }}>
                        {/* Green glow behind image */}
                        <div style={{
                            position: 'absolute', top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '80%', height: '80%',
                            background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)',
                            pointerEvents: 'none', zIndex: 0,
                        }} />

                        <div
                            style={{
                                borderRadius: '0', overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.1)',
                                boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
                                position: 'relative', zIndex: 1,
                            }}
                        >
                            <Image
                                src="/about-team.png"
                                alt="Knoweb team working on software systems"
                                width={600}
                                height={420}
                                style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                        </div>

                        {/* Floating Stat Badge */}
                        <div style={{
                            position: 'absolute', bottom: '-24px', left: '-24px', zIndex: 10,
                            background: '#131C2E',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '14px', padding: '16px 22px',
                            boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
                            display: 'flex', alignItems: 'center', gap: '14px',
                            animation: 'heroFloat1 6s ease-in-out infinite',
                        }}>
                            <div style={{
                                width: '42px', height: '42px', borderRadius: '10px',
                                background: 'rgba(34,197,94,0.12)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#22C55E', fontSize: '1.2rem',
                            }}>
                                ✓
                            </div>
                            <div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#F1F5F9', lineHeight: 1.1 }}>50+</div>
                                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', fontWeight: 500, marginTop: '2px' }}>
                                    Businesses Deployed
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

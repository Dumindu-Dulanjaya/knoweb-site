'use client';

import Link from 'next/link';

export default function HeroSection() {
    return (
        <section
            style={{
                background: 'linear-gradient(135deg, #020C1F 0%, #061A3A 50%, #020C1F 100%)',
                color: '#fff',
                padding: '110px 0 90px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {/* Background grid pattern */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
                backgroundSize: '48px 48px', pointerEvents: 'none',
            }} />
            <div style={{ position: 'absolute', top: '-150px', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,87,255,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-100px', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,198,255,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />

            <div className="container-max" style={{ position: 'relative', zIndex: 1 }}>
                <div className="hero-grid" style={{ alignItems: 'center', gap: '64px' }}>

                    {/* ── Left Content ── */}
                    <div style={{ animation: "heroFadeIn 0.8s ease-out forwards" }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                            padding: '6px 14px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600,
                            color: '#9CA3AF', marginBottom: '28px', letterSpacing: '0.02em',
                        }}>
                            <span style={{ color: '#00C6FF' }}>★</span>
                            Trusted by growing businesses in Sri Lanka
                        </div>

                        <h1 style={{
                            fontFamily: 'Outfit, sans-serif',
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 800, lineHeight: 1.05, color: '#fff', marginBottom: '24px', letterSpacing: '-0.02em',
                        }}>
                            Practical SaaS Platforms + <br />
                            <span style={{ background: 'linear-gradient(135deg, #0057FF, #00C6FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                Custom Software Systems
                            </span>
                        </h1>

                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '40px', maxWidth: '540px' }}>
                            Built for real operations. We replace messy spreadsheets and fragmented tools with structured digital platforms that actually solve your operational bottlenecks.
                        </p>

                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                            <Link href="/contact" style={{
                                background: 'linear-gradient(135deg,#0057FF,#0080FF)',
                                color: '#fff', textDecoration: 'none',
                                fontSize: '0.95rem', fontWeight: 600,
                                padding: '14px 32px', borderRadius: '8px',
                                display: 'flex', alignItems: 'center', gap: '8px',
                                transition: 'opacity 0.2s',
                                boxShadow: '0 4px 16px rgba(0,87,255,0.25)',
                            }}
                                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                            >
                                Talk to Sales
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </Link>
                            <Link href="/solutions" style={{
                                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)',
                                color: '#fff', textDecoration: 'none',
                                fontSize: '0.95rem', fontWeight: 600,
                                padding: '14px 32px', borderRadius: '8px',
                                transition: 'background 0.2s',
                            }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                            >
                                Explore Solutions
                            </Link>
                        </div>
                    </div>

                    {/* ── Right — Animated Dashboard visual ── */}
                    <div style={{ position: 'relative', animation: "heroSlideUp 1s cubic-bezier(0.1, 0, 0.2, 1) forwards" }}>

                        {/* Floating Mini Card 1 */}
                        <div style={{
                            position: 'absolute', top: '10%', left: '-8%', zIndex: 10,
                            background: '#fff', color: '#0A0F1E', padding: '14px 20px', borderRadius: '12px',
                            boxShadow: '0 12px 32px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', gap: '12px',
                            animation: 'heroFloat1 6s ease-in-out infinite',
                        }}>
                            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(0,87,255,0.1)', color: '#0057FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>SaaS Subscription</div>
                                <div style={{ fontSize: '0.7rem', color: '#6B7280', fontWeight: 500 }}>Ready to deploy</div>
                            </div>
                        </div>

                        {/* Floating Mini Card 2 */}
                        <div style={{
                            position: 'absolute', bottom: '15%', right: '-5%', zIndex: 10,
                            background: '#fff', color: '#0A0F1E', padding: '14px 20px', borderRadius: '12px',
                            boxShadow: '0 12px 32px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', gap: '12px',
                            animation: 'heroFloat2 7s ease-in-out infinite',
                        }}>
                            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(124,58,237,0.1)', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>Custom Delivery</div>
                                <div style={{ fontSize: '0.7rem', color: '#6B7280', fontWeight: 500 }}>Built to spec</div>
                            </div>
                        </div>

                        {/* Main Dashboard Card */}
                        <div style={{
                            background: '#0B1527', border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '16px', padding: '0',
                            boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
                            overflow: 'hidden',
                        }}>
                            {/* Dashboard Header */}
                            <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.02)' }}>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F57' }} />
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }} />
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28CA41' }} />
                                </div>
                                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: 600 }}>Command Center</div>
                                <div style={{ width: '40px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px' }} />
                            </div>

                            {/* Dashboard Body */}
                            <div style={{ padding: '24px' }}>
                                {/* Skeleton chart */}
                                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '140px', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '16px' }}>
                                    {[30, 50, 40, 70, 60, 90, 80, 100].map((h, i) => (
                                        <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 7 ? 'linear-gradient(180deg,#0057FF,#00C6FF)' : 'rgba(255,255,255,0.05)', borderRadius: '4px 4px 0 0', position: 'relative' }}>
                                            {i === 7 && <div style={{ position: 'absolute', top: '-24px', left: '50%', transform: 'translateX(-50%)', background: '#fff', color: '#0057FF', fontSize: '0.65rem', fontWeight: 800, padding: '2px 6px', borderRadius: '4px' }}>+24%</div>}
                                        </div>
                                    ))}
                                </div>

                                {/* Skeleton List */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'rgba(0,198,255,0.1)', color: '#00C6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
                                                <div>
                                                    <div style={{ width: '120px', height: '8px', background: 'rgba(255,255,255,0.15)', borderRadius: '4px', marginBottom: '6px' }} />
                                                    <div style={{ width: '80px', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
                                                </div>
                                            </div>
                                            <div style={{ width: '60px', height: '24px', borderRadius: '100px', background: 'rgba(40,202,65,0.1)', color: '#28CA41', fontSize: '0.65rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Active</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

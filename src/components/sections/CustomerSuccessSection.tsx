'use client';

import Link from 'next/link';

const caseStudies = [
    {
        title: 'National Retail Chain POS Automation',
        industry: 'Retail',
        highlights: ['Multi-branch Sync', 'Inventory Control', 'Real-time Reporting'],
        gradient: 'linear-gradient(135deg, #0057FF 0%, #00C6FF 100%)'
    },
    {
        title: 'Automotive Parts Distributor ERP',
        industry: 'Distribution',
        highlights: ['Custom Workflows', 'Order Management', 'B2B Portal'],
        gradient: 'linear-gradient(135deg, #0A0F1E 0%, #2D3748 100%)'
    },
    {
        title: 'Manufacturing Group HR Integration',
        industry: 'Manufacturing',
        highlights: ['Cross-site Attendance', 'Complex Payroll', 'Compliance'],
        gradient: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)'
    },
    {
        title: 'Healthcare Clinic Staff Management',
        industry: 'Healthcare',
        highlights: ['Shift Scheduling', 'Performance Tracking', 'Automated Rosters'],
        gradient: 'linear-gradient(135deg, #E11D48 0%, #FB7185 100%)'
    }
];

export default function CustomerSuccessSection() {
    return (
        <section className="section-pad" style={{ background: '#fff', padding: '100px 0' }}>
            <div className="container-max">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
                    <div style={{ maxWidth: '640px' }}>
                        <div className="tag" style={{ marginBottom: '20px' }}>Our Impact</div>
                        <h2 style={{
                            fontFamily: 'Outfit, sans-serif',
                            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                            fontWeight: 800,
                            color: '#0A0F1E',
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em',
                            margin: 0
                        }}>
                            Customer Success Highlights
                        </h2>
                    </div>

                    <Link href="/customer-success" className="btn-primary" style={{ background: '#0A0F1E', border: 'none' }}>
                        View All Case Studies
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3.33334 8H12.6667M8.66668 4L12.6667 8L8.66668 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '32px'
                }}>
                    {caseStudies.map((study, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '1px solid #E5E7EB',
                            transition: 'all 0.3s ease',
                            background: '#fff',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,0,0,0.08)';
                                (e.currentTarget.querySelector('.image-placeholder') as HTMLElement).style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                (e.currentTarget.querySelector('.image-placeholder') as HTMLElement).style.transform = 'scale(1)';
                            }}>
                            {/* Graphic Placeholder */}
                            <div style={{
                                height: '200px',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <div
                                    className="image-placeholder"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        background: study.gradient,
                                        transition: 'transform 0.5s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" opacity="0.2">
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <line x1="12" y1="22.08" x2="12" y2="12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            {/* Content */}
                            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <div style={{
                                    color: '#6B7280',
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    fontWeight: 700,
                                    marginBottom: '12px'
                                }}>
                                    {study.industry}
                                </div>

                                <h3 style={{
                                    fontFamily: 'Outfit, sans-serif',
                                    fontWeight: 700,
                                    fontSize: '1.25rem',
                                    color: '#0A0F1E',
                                    lineHeight: 1.3,
                                    marginBottom: '20px'
                                }}>
                                    {study.title}
                                </h3>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                                    {study.highlights.map((highlight, idx) => (
                                        <span key={idx} style={{
                                            background: '#F3F4F6',
                                            color: '#4B5563',
                                            padding: '4px 12px',
                                            borderRadius: '100px',
                                            fontSize: '0.75rem',
                                            fontWeight: 600
                                        }}>
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

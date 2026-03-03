'use client';

import Link from 'next/link';

const solutions = [
    {
        title: 'Accounting & Financial Management',
        desc: 'Complete financial control across your organization, from daily transactions to board-level reporting.',
        outcomes: [
            'Eliminate manual reconciliation errors',
            'Accelerate month-end closing cycles',
            'Gain real-time cash flow visibility'
        ],
        link: '/products/accounting'
    },
    {
        title: 'HR & Workforce Management',
        desc: 'Streamline employee lifecycle management, from attendance tracking to complex payroll calculation requirements.',
        outcomes: [
            'Reduce administrative payroll hours',
            'Ensure statutory compliance automatically',
            'Improve employee transparency'
        ],
        link: '/products/hr-payroll'
    },
    {
        title: 'Retail & Hospitality Operations',
        desc: 'End-to-end operational control for single or multi-outlet environments, seamlessly integrating sales and backend operations.',
        outcomes: [
            'Prevent inventory stockouts and shrinkage',
            'Standardize multi-branch processes',
            'Improve customer check-out speed'
        ],
        link: '/products/retail-pos'
    },
    {
        title: 'Monitoring & Dashboards',
        desc: 'Transform raw operational data into actionable insights with real-time tracking and automated reporting.',
        outcomes: [
            'Identify operational bottlenecks instantly',
            'Centralize multi-site performance data',
            'Automate compliance and audit reporting'
        ],
        link: '/products/dashboards'
    }
];

export default function SolutionsWeDeliverSection() {
    return (
        <section className="section-pad surface-light" style={{ padding: '100px 0' }}>
            <div className="container-max">
                <div className="section-header" style={{ marginBottom: '60px', maxWidth: '640px' }}>
                    <div className="tag" style={{ marginBottom: '20px' }}>Our Services</div>
                    <h2 style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                        fontWeight: 800,
                        color: '#0A0F1E',
                        lineHeight: 1.1,
                        marginBottom: '16px',
                        letterSpacing: '-0.02em'
                    }}>
                        Solutions We Deliver
                    </h2>
                    <p style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                        We build, deploy, and support structured digital platforms that target core operational areas to generate rapid business value.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '40px'
                }}>
                    {solutions.map((s, i) => (
                        <div key={i} style={{
                            padding: '32px',
                            background: '#fff',
                            border: '1px solid #E5E7EB',
                            borderRadius: '16px',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,87,255,0.06)';
                                e.currentTarget.style.borderColor = 'rgba(0,87,255,0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = '#E5E7EB';
                            }}>
                            <h3 style={{
                                fontFamily: 'Outfit, sans-serif',
                                fontSize: '1.5rem',
                                fontWeight: 800,
                                color: '#0A0F1E',
                                marginBottom: '16px',
                                paddingBottom: '16px',
                                borderBottom: '1px solid #F3F4F6'
                            }}>
                                {s.title}
                            </h3>

                            <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                                {s.desc}
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {s.outcomes.map((outcome, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem', color: '#111827', fontWeight: 500 }}>
                                        <span style={{
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            width: '20px', height: '20px',
                                            background: '#EEF2FF', borderRadius: '50%', flexShrink: 0, marginTop: '2px'
                                        }}>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#0057FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        {outcome}
                                    </li>
                                ))}
                            </ul>

                            <Link href={s.link} style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                color: '#0057FF', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
                                transition: 'gap 0.2s'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.gap = '12px'}
                                onMouseLeave={(e) => e.currentTarget.style.gap = '8px'}
                            >
                                Learn more
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.33334 8H12.6667M8.66668 4L12.6667 8L8.66668 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

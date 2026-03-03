'use client';

export default function TargetAudienceSection() {
    const audiences = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0057FF" strokeWidth="1.5">
                    <path d="M3 21V9l9-6 9 6v12M9 21v-6h6v6" />
                </svg>
            ),
            title: 'SMEs & Growing Businesses',
            desc: 'Small and medium enterprises scaling their operations with structured digital systems.'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0057FF" strokeWidth="1.5">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
                </svg>
            ),
            title: 'Retail & Hospitality Operators',
            desc: 'Single and multi-outlet retailers, restaurants, and hospitality businesses.'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0057FF" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" />
                </svg>
            ),
            title: 'Multi-Branch Organizations',
            desc: 'Businesses managing operations across multiple locations requiring centralized visibility.'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0057FF" strokeWidth="1.5">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            ),
            title: 'Professional Services',
            desc: 'Service firms, consultancies, and professional organizations managing client operations.'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0057FF" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
                </svg>
            ),
            title: 'Sector-Specific Operators',
            desc: 'Industry verticals with specialized operational requirements and compliance needs.'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0057FF" strokeWidth="1.5">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
            ),
            title: 'Custom Workflow Organizations',
            desc: 'Organizations with complex, unique processes that require tailored digital solutions.'
        },
    ];

    return (
        <section className="section-pad surface-mid" style={{ padding: '100px 0' }}>
            <div className="container-max">
                <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '640px', margin: '0 auto 60px' }}>
                    <div className="tag" style={{ marginBottom: '20px', display: 'inline-block' }}>Target Audience</div>
                    <h2 style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                        fontWeight: 800,
                        color: '#0A0F1E',
                        lineHeight: 1.1,
                        marginBottom: '16px',
                        letterSpacing: '-0.02em'
                    }}>
                        Who Knoweb Is Built For
                    </h2>
                    <p style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                        We build operational platforms for organizations ready to scale beyond manual processes.
                        <strong> Choose SaaS or Custom based on your operation.</strong>
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '24px'
                }}>
                    {audiences.map((audience, i) => (
                        <div
                            key={i}
                            style={{
                                background: '#fff',
                                border: '1px solid #E5E7EB',
                                borderRadius: '16px',
                                padding: '32px',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
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
                            }}
                        >
                            <div style={{
                                width: '48px',
                                height: '48px',
                                background: 'rgba(0,87,255,0.06)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '20px'
                            }}>
                                {audience.icon}
                            </div>
                            <h3 style={{
                                fontFamily: 'Outfit, sans-serif',
                                fontSize: '1.15rem',
                                fontWeight: 700,
                                color: '#0A0F1E',
                                marginBottom: '10px'
                            }}>
                                {audience.title}
                            </h3>
                            <p style={{
                                color: '#6B7280',
                                fontSize: '0.95rem',
                                lineHeight: 1.6,
                                margin: 0
                            }}>
                                {audience.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

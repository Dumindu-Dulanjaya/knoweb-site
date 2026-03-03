'use client';

export default function TargetAudienceSection() {
    const audiences = [
        { icon: '🏢', title: 'SMEs & Growing Businesses', desc: 'Small and medium enterprises scaling their operations with structured digital systems.' },
        { icon: '🏪', title: 'Retail & Hospitality Operators', desc: 'Single and multi-outlet retailers, restaurants, and hospitality businesses.' },
        { icon: '🏬', title: 'Multi-Branch Organizations', desc: 'Businesses managing operations across multiple locations requiring centralized visibility.' },
        { icon: '💼', title: 'Professional Services', desc: 'Service firms, consultancies, and professional organizations managing client operations.' },
        { icon: '⚙️', title: 'Sector-Specific Operators', desc: 'Industry verticals with specialized operational requirements and compliance needs.' },
        { icon: '🔧', title: 'Custom Workflow Organizations', desc: 'Organizations with complex, unique processes that require tailored digital solutions.' },
    ];

    return (
        <section className="section-pad">
            <div className="container-max">
                <div className="audience-grid">
                    <div>
                        <div className="tag" style={{ marginBottom: '20px' }}>Who We Serve</div>
                        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 800, marginBottom: '20px', color: '#0A0F1E' }}>
                            Built for Businesses That Are Ready to Operate Smarter
                        </h2>
                        <p style={{ color: '#6B7280', lineHeight: 1.7, marginBottom: '24px', fontSize: '0.95rem' }}>
                            Knoweb serves organizations at the point where manual methods are no longer enough and a structured digital operating layer is needed.
                        </p>
                        <p style={{ color: '#6B7280', lineHeight: 1.7, fontSize: '0.95rem' }}>
                            Whether you need a ready platform or a custom-built system, Knoweb delivers the right solution for your industry and scale.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        {audiences.map((a) => (
                            <div
                                key={a.title}
                                style={{ background: '#F8FAFF', border: '1px solid #E5E7EB', borderRadius: '10px', padding: '20px', transition: 'all 0.2s' }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = '#EEF2FF'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,87,255,0.3)'; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = '#F8FAFF'; (e.currentTarget as HTMLDivElement).style.borderColor = '#E5E7EB'; }}
                            >
                                <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{a.icon}</div>
                                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#0A0F1E', marginBottom: '6px' }}>{a.title}</h3>
                                <p style={{ color: '#6B7280', fontSize: '0.8rem', lineHeight: 1.5 }}>{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

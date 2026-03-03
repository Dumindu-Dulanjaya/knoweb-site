'use client';

export default function StatsStripSection() {
    const stats = [
        {
            value: '2–4 Weeks',
            title: 'Fast Implementation',
            desc: 'Deploy our core SaaS platforms into your business quickly and seamlessly.',
        },
        {
            value: '10+ Modules',
            title: 'Multi-branch Ready',
            desc: 'Designed to scale safely across multiple locations from day one.',
        },
        {
            value: 'Support SLAs',
            title: 'Ongoing Support',
            desc: 'Real human operational support backed by clear response time SLAs.',
        }
    ];

    return (
        <section className="section-pad" style={{ background: '#fff', padding: '60px 0' }}>
            <div className="container-max">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '24px'
                }}>
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            style={{
                                background: '#fff',
                                border: '1px solid #F3F4F6',
                                borderRadius: '16px',
                                padding: '32px',
                                boxShadow: '0 12px 32px rgba(0,0,0,0.03)',
                                transition: 'all 0.3s',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,87,255,0.08)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.03)';
                            }}
                        >
                            <div style={{
                                fontFamily: 'Outfit, sans-serif',
                                fontSize: '2.5rem',
                                fontWeight: 800,
                                color: '#0057FF',
                                lineHeight: 1.1,
                                marginBottom: '16px',
                                letterSpacing: '-0.03em'
                            }}>
                                {stat.value}
                            </div>
                            <h3 style={{
                                fontFamily: 'Outfit, sans-serif',
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                color: '#0A0F1E',
                                marginBottom: '12px'
                            }}>
                                {stat.title}
                            </h3>
                            <p style={{
                                color: '#6B7280',
                                fontSize: '0.95rem',
                                lineHeight: 1.6,
                                margin: 0
                            }}>
                                {stat.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

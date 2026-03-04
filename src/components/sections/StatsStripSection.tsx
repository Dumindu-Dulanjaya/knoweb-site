'use client';

const stats = [
    {
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
            </svg>
        ),
        value: '2–4',
        unit: 'Weeks',
        label: 'Fast Implementation',
    },
    {
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ),
        value: '50+',
        unit: '',
        label: 'Businesses Deployed',
    },
    {
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        value: '10+',
        unit: '',
        label: 'Years of Pixel‑Perfect Craft',
    },
];

export default function StatsStripSection() {
    return (
        <section
            style={{
                background: '#0F172A',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                padding: '52px 0',
            }}
        >
            <div className="container-max">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '0',
                    }}
                >
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                padding: '24px 36px',
                                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                                transition: 'background 0.2s',
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.background = 'rgba(34,197,94,0.04)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.background = 'transparent';
                            }}
                        >
                            {/* Icon circle */}
                            <div
                                style={{
                                    width: '52px', height: '52px', borderRadius: '50%',
                                    background: 'rgba(34,197,94,0.08)',
                                    border: '1px solid rgba(34,197,94,0.15)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#22C55E', flexShrink: 0,
                                }}
                            >
                                {stat.icon}
                            </div>

                            {/* Text */}
                            <div>
                                <div
                                    style={{
                                        fontFamily: 'Outfit, sans-serif',
                                        fontSize: '1.9rem', fontWeight: 800,
                                        color: '#F1F5F9', lineHeight: 1,
                                        letterSpacing: '-0.03em',
                                        marginBottom: '4px',
                                    }}
                                >
                                    {stat.value}
                                    {stat.unit && (
                                        <span style={{ fontSize: '1rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginLeft: '4px' }}>
                                            {stat.unit}
                                        </span>
                                    )}
                                </div>
                                <div
                                    style={{
                                        fontSize: '0.82rem', fontWeight: 500,
                                        color: 'rgba(255,255,255,0.4)',
                                        letterSpacing: '0.01em',
                                    }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

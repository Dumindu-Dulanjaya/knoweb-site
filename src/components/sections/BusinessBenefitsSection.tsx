const benefits = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 16L8 12L11 15L15 9L18 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="2" y="2" width="18" height="18" rx="3" stroke="white" strokeWidth="1.5" />
            </svg>
        ),
        title: 'Real-Time Visibility',
        desc: 'Operational dashboards and live reporting across all business functions and branches.',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="9" stroke="white" strokeWidth="1.5" />
                <path d="M7 11L10 14L15 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Reduced Manual Errors',
        desc: 'Structured automation removes repetitive manual tasks and reduces costly human errors.',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 2l2.5 6.5H20l-5.5 4 2 6.5L11 15l-5.5 4 2-6.5L2 8.5h6.5L11 2z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Compliance Confidence',
        desc: 'Built-in regulatory compliance support for statutory requirements, tax, and labour law.',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 11h14M4 7h10M4 15h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        title: 'Better Decision-Making',
        desc: 'Consolidated data and automated reports give management the insight to make faster, better decisions.',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="2" y="8" width="4" height="12" rx="1" stroke="white" strokeWidth="1.5" />
                <rect x="9" y="4" width="4" height="16" rx="1" stroke="white" strokeWidth="1.5" />
                <rect x="16" y="2" width="4" height="18" rx="1" stroke="white" strokeWidth="1.5" />
            </svg>
        ),
        title: 'Operational Scalability',
        desc: 'Systems that grow with you — from a single location to multi-branch enterprise operations.',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 2v3M11 17v3M2 11h3M17 11h3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="11" cy="11" r="5" stroke="white" strokeWidth="1.5" />
            </svg>
        ),
        title: 'Integrated Workflows',
        desc: 'Connected modules eliminate data silos and create seamless cross-functional business processes.',
    },
];

export default function BusinessBenefitsSection() {
    return (
        <section className="section-pad section-dark">
            <div className="container-max">
                <div className="section-header centered" style={{ color: '#fff' }}>
                    <div className="tag-dark" style={{ marginBottom: '16px', display: 'inline-flex' }}>Business Benefits</div>
                    <h2 style={{ color: '#fff' }}>The Value We Deliver</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)' }}>
                        Knoweb solutions are measured by the tangible business outcomes they produce — not by feature lists.
                    </p>
                </div>

                <div className="grid-3">
                    {benefits.map((b) => (
                        <div key={b.title} className="card-dark">
                            <div style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '10px',
                                background: 'linear-gradient(135deg,#0057FF,#00C6FF)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '18px',
                            }}>
                                {b.icon}
                            </div>
                            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#fff', marginBottom: '10px' }}>
                                {b.title}
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.65 }}>{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

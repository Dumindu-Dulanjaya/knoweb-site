'use client';

import Link from 'next/link';

const footerLinks = {
    'Quick Links': [
        { label: 'About Knoweb', href: '/about' },
        { label: 'How We Work', href: '/how-we-work' },
        { label: 'Customer Success', href: '/customer-success' },
        { label: 'Resources', href: '/resources' },
        { label: 'Contact Us', href: '/contact' },
    ],
    'Solutions': [
        { label: 'Accounting & Finance', href: '/solutions#accounting' },
        { label: 'HR & Workforce', href: '/solutions#hr' },
        { label: 'Retail & Hospitality', href: '/solutions#retail' },
        { label: 'Operational Dashboards', href: '/solutions#dashboards' },
    ],
    'Products': [
        { label: 'SaaS Platforms', href: '/products' },
        { label: 'Custom & Enterprise', href: '/custom-enterprise' },
        { label: 'AI Development', href: '/ai-development' },
        { label: 'Integrations', href: '/custom-enterprise#integrations' },
    ]
};

export default function Footer() {
    return (
        <footer style={{ background: '#0A0F1E', color: '#fff' }}>
            <div className="container-max" style={{ padding: '80px 24px 40px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '48px',
                    marginBottom: '80px'
                }}>
                    {/* Brand column */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                            <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #0057FF 0%, #00C6FF 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10L8 6L12 10L16 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 14L8 10L12 14L16 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                                </svg>
                            </div>
                            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#fff', letterSpacing: '-0.02em' }}>Knoweb</span>
                        </Link>

                        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '32px', maxWidth: '320px' }}>
                            A hybrid technology company combining ready SaaS platforms and custom software solutions, supported by long-term customer success.
                        </p>

                        {/* Social Links Placeholders */}
                        <div style={{ display: 'flex', gap: '16px', marginTop: 'auto' }}>
                            {['LinkedIn', 'Twitter', 'Facebook'].map((social, i) => (
                                <Link key={i} href="#" style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    width: '40px', height: '40px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '50%',
                                    color: 'rgba(255,255,255,0.7)',
                                    transition: 'all 0.2s ease'
                                }}
                                    title={social}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = '#0057FF';
                                        e.currentTarget.style.color = '#fff';
                                        e.currentTarget.style.borderColor = '#0057FF';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                        e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                    }}>
                                    {/* Generic icon placeholder representing social icon */}
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                        <path d="M8 12h8m-4-4v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Columns Wrapper Container */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                        gap: '32px',
                        gridColumn: 'span 2'
                    }}>
                        {/* Link columns */}
                        {Object.entries(footerLinks).map(([group, links]) => (
                            <div key={group}>
                                <h4 style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', marginBottom: '24px' }}>
                                    {group}
                                </h4>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', padding: 0, margin: 0 }}>
                                    {links.map((link) => (
                                        <li key={link.label}>
                                            <Link href={link.href} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}
                                                onMouseEnter={(e) => (e.currentTarget.style.color = '#00C6FF')}
                                                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter Subscribe */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h4 style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', marginBottom: '24px' }}>
                            Subscribe to Insights
                        </h4>
                        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '20px' }}>
                            Stay updated with our latest industry insights, guides, and platform updates.
                        </p>
                        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="email"
                                    placeholder="Your email address..."
                                    style={{
                                        width: '100%',
                                        padding: '12px 16px',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        outline: 'none',
                                        fontSize: '0.9rem',
                                        transition: 'border-color 0.2s'
                                    }}
                                    onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
                                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                                />
                            </div>
                            <button
                                type="submit"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    background: '#0057FF',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#004DE6'}
                                onMouseLeave={(e) => e.currentTarget.style.background = '#0057FF'}
                            >
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '16px'
                }}>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
                        © {new Date().getFullYear()} Knoweb (Pvt.) Ltd. All rights reserved. Sri Lanka.
                    </p>
                    <div style={{ display: 'flex', gap: '32px' }}>
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                            <Link key={item} href="#" style={{
                                color: 'rgba(255,255,255,0.4)',
                                fontSize: '0.85rem',
                                textDecoration: 'none',
                                transition: 'color 0.2s'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

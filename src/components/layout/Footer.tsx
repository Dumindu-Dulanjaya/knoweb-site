'use client';

import Link from 'next/link';

const footerLinks = {
    Solutions: [
        { label: 'Accounting & Finance', href: '/solutions#accounting' },
        { label: 'HR & Workforce', href: '/solutions#hr' },
        { label: 'Retail & Hospitality', href: '/solutions#retail' },
        { label: 'Operational Monitoring', href: '/solutions#monitoring' },
    ],
    Products: [
        { label: 'SaaS Platforms', href: '/products' },
        { label: 'Custom & Enterprise', href: '/custom-enterprise' },
        { label: 'AI Development', href: '/solutions#ai' },
        { label: 'Integrations', href: '/custom-enterprise#integrations' },
    ],
    Company: [
        { label: 'About Knoweb', href: '/about' },
        { label: 'How We Work', href: '/how-we-work' },
        { label: 'Customer Success', href: '/customer-success' },
        { label: 'Resources', href: '/resources' },
        { label: 'Contact', href: '/contact' },
    ],
};

export default function Footer() {
    return (
        <footer style={{ background: '#06142E', color: '#fff' }}>
            <div className="container-max" style={{ padding: '64px 24px 48px' }}>
                <div className="footer-grid">
                    {/* Brand column */}
                    <div>
                        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                            <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #0057FF 0%, #00C6FF 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10L8 6L12 10L16 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 14L8 10L12 14L16 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                                </svg>
                            </div>
                            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#fff', letterSpacing: '-0.02em' }}>Knoweb</span>
                        </Link>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.7', maxWidth: '280px', marginBottom: '24px' }}>
                            A hybrid technology company combining subscription-based SaaS platforms and custom software solutions, supported by long-term customer success.
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>Knoweb (Pvt.) Ltd — Sri Lanka</p>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([group, links]) => (
                        <div key={group}>
                            <h4 style={{ color: '#fff', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px' }}>
                                {group}
                            </h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                                            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                                            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                    <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>
                        © {new Date().getFullYear()} Knoweb (Pvt.) Ltd. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        {['Privacy Policy', 'Terms of Service'].map((item) => (
                            <Link key={item} href="/contact" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', textDecoration: 'none' }}>{item}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

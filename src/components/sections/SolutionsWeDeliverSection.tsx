'use client';

import Link from 'next/link';

const services = [
    {
        number: '1',
        title: 'Accounting & Financial Management',
        desc: 'Complete financial control across your organization — from daily transactions to board-level reporting. Eliminate manual reconciliation errors and gain real-time cash flow visibility.',
        tags: ['Invoicing', 'GL & Ledger', 'Bank Reconciliation', 'Financial Reports'],
        link: '/products/accounting',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
    },
    {
        number: '2',
        title: 'HR & Workforce Management',
        desc: 'Streamline your entire employee lifecycle — from attendance tracking to complex payroll calculation, EPF/ETF compliance, and employee self-service portals.',
        tags: ['Payroll', 'Attendance', 'EPF / ETF', 'Leave Management'],
        link: '/products/hr-payroll',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        number: '3',
        title: 'Retail & Hospitality Operations',
        desc: 'End-to-end operational control for single or multi-outlet environments — seamlessly integrating POS, inventory, and backend operations to prevent stockouts and standardize processes.',
        tags: ['POS System', 'Inventory', 'Multi-branch', 'Sales Reports'],
        link: '/products/retail-pos',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
        ),
    },
    {
        number: '4',
        title: 'Monitoring & Dashboards',
        desc: 'Transform raw operational data into actionable insights with real-time KPI tracking, automated alerts, and centralized multi-site performance dashboards.',
        tags: ['Live KPIs', 'Custom Alerts', 'Multi-site', 'Audit Reports'],
        link: '/products/dashboards',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><path d="M7 8h.01M12 8h.01M17 8h.01M7 12h2M12 12h5" />
            </svg>
        ),
    },
    {
        number: '5',
        title: 'Custom Software Solutions',
        desc: 'Fully bespoke enterprise systems built around your unique workflows. We design, develop, and deliver structured digital platforms with dedicated ongoing support.',
        tags: ['Tailored Workflows', 'Enterprise Systems', 'API Integrations', 'Ongoing Support'],
        link: '/custom-enterprise',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
        ),
    },
    {
        number: '6',
        title: 'AI Product Development',
        desc: 'We embed AI into real business workflows — predictive reporting, automated data extraction, intelligent recommendations, and machine learning pipelines built to scale.',
        tags: ['Predictive Analytics', 'Automation', 'ML Pipelines', 'AI Strategy'],
        link: '/custom-enterprise',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
            </svg>
        ),
    },
];

export default function SolutionsWeDeliverSection() {
    return (
        <section
            style={{
                background: '#111827',
                padding: '100px 0',
                borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
        >
            <div className="container-max">

                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <div
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '6px',
                            background: 'rgba(34,197,94,0.1)',
                            border: '1px solid rgba(34,197,94,0.2)',
                            padding: '4px 14px', borderRadius: '100px',
                            fontSize: '0.7rem', fontWeight: 700,
                            color: '#22C55E', marginBottom: '20px',
                            letterSpacing: '0.06em', textTransform: 'uppercase',
                        }}
                    >
                        Our Services
                    </div>
                    <h2
                        style={{
                            fontFamily: 'Outfit, sans-serif',
                            fontSize: 'clamp(1.9rem, 4vw, 2.75rem)',
                            fontWeight: 800, color: '#F1F5F9',
                            lineHeight: 1.1, letterSpacing: '-0.02em',
                            marginBottom: '16px',
                        }}
                    >
                        Services We Offer
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
                        We build, deploy, and support structured digital platforms that target
                        core operational areas and generate rapid business value.
                    </p>
                </div>

                {/* Services Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                        gap: '2px',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                    }}
                >
                    {services.map((service, i) => (
                        <div
                            key={i}
                            style={{
                                background: '#0F172A',
                                padding: '36px 32px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0',
                                transition: 'background 0.2s',
                                position: 'relative',
                                borderRight: (i % 2 === 0 && i < services.length - 1) ? '1px solid rgba(255,255,255,0.06)' : 'none',
                                borderBottom: i < services.length - 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.background = '#131C2E';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.background = '#0F172A';
                            }}
                        >
                            {/* Number + Icon row */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                                <span
                                    style={{
                                        fontFamily: 'Outfit, sans-serif',
                                        fontSize: '3rem', fontWeight: 900,
                                        color: 'rgba(255,255,255,0.06)',
                                        lineHeight: 1, letterSpacing: '-0.04em',
                                        userSelect: 'none',
                                    }}
                                >
                                    {service.number}
                                </span>
                                <div
                                    style={{
                                        width: '52px', height: '52px', borderRadius: '12px',
                                        background: 'rgba(34,197,94,0.08)',
                                        border: '1px solid rgba(34,197,94,0.15)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#22C55E',
                                    }}
                                >
                                    {service.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3
                                style={{
                                    fontFamily: 'Outfit, sans-serif',
                                    fontSize: '1.2rem', fontWeight: 700,
                                    color: '#F1F5F9', marginBottom: '12px',
                                    lineHeight: 1.3,
                                }}
                            >
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p
                                style={{
                                    color: 'rgba(255,255,255,0.45)',
                                    fontSize: '0.9rem', lineHeight: 1.7,
                                    marginBottom: '24px', flexGrow: 1,
                                }}
                            >
                                {service.desc}
                            </p>

                            {/* Tags */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                                {service.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            color: 'rgba(255,255,255,0.5)',
                                            fontSize: '0.72rem', fontWeight: 600,
                                            padding: '4px 10px', borderRadius: '6px',
                                            letterSpacing: '0.01em',
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Link */}
                            <Link
                                href={service.link}
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                                    color: '#22C55E', fontWeight: 600,
                                    fontSize: '0.85rem', textDecoration: 'none',
                                    transition: 'gap 0.2s',
                                }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '10px'; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '6px'; }}
                            >
                                Learn more
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{ textAlign: 'center', marginTop: '48px' }}>
                    <Link
                        href="/solutions"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            background: 'rgba(34,197,94,0.1)',
                            border: '1px solid rgba(34,197,94,0.25)',
                            color: '#22C55E',
                            textDecoration: 'none',
                            fontSize: '0.9rem', fontWeight: 700,
                            padding: '13px 32px', borderRadius: '8px',
                            transition: 'all 0.22s ease',
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = '#22C55E';
                            (e.currentTarget as HTMLAnchorElement).style.color = '#052E16';
                            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.1)';
                            (e.currentTarget as HTMLAnchorElement).style.color = '#22C55E';
                            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                        }}
                    >
                        View All Solutions
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M3 7.5H12M8 3.5L12 7.5L8 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

import Link from 'next/link';

export default function SolutionModelsSection() {
    return (
        <section className="section-pad">
            <div className="container-max">
                <div className="section-header centered">
                    <div className="tag" style={{ marginBottom: '16px', display: 'inline-flex' }}>Our Offering</div>
                    <h2>Two Ways to Deploy Technology</h2>
                    <p>Choose the engagement model that fits your business — a ready platform or a custom-built system. Both are supported by the same long-term partnership commitment.</p>
                </div>

                <div className="grid-2">
                    {/* SaaS Card */}
                    <div style={{
                        background: 'linear-gradient(135deg,#06142E 0%,#0A1F4E 100%)',
                        border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px',
                        padding: '40px', color: '#fff', position: 'relative', overflow: 'hidden',
                    }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'radial-gradient(circle,rgba(0,87,255,0.25) 0%,transparent 70%)', pointerEvents: 'none' }} />

                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,198,255,0.15)', color: '#00C6FF', fontSize: '0.75rem', fontWeight: 600, padding: '5px 14px', borderRadius: '100px', marginBottom: '24px', border: '1px solid rgba(0,198,255,0.25)' }}>
                            Model A
                        </div>

                        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>SaaS Platforms</h3>
                        <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '28px', fontSize: '0.95rem' }}>
                            Ready-to-deploy, subscription-based platforms for core business functions. Fast to implement, easy to grow, and continuously supported.
                        </p>

                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                            {['Ready-to-deploy systems', 'Subscription / rental pricing', 'Fast implementation', 'Scalable with your growth', 'Continuous updates & support'].map((item) => (
                                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>
                                    <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(0,198,255,0.2)', border: '1px solid rgba(0,198,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke="#00C6FF" strokeWidth="1.5" strokeLinecap="round" /></svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link href="/products" className="btn-white" style={{ fontSize: '0.875rem' }}>
                            Explore Platforms
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </Link>
                    </div>

                    {/* Custom Card */}
                    <div style={{
                        background: '#fff', border: '1px solid #E5E7EB', borderRadius: '16px',
                        padding: '40px', position: 'relative', overflow: 'hidden',
                    }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'radial-gradient(circle,rgba(0,87,255,0.06) 0%,transparent 70%)', pointerEvents: 'none' }} />

                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,87,255,0.08)', color: '#0057FF', fontSize: '0.75rem', fontWeight: 600, padding: '5px 14px', borderRadius: '100px', marginBottom: '24px' }}>
                            Model B
                        </div>

                        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#0A0F1E', marginBottom: '16px' }}>Custom Software Solutions</h3>
                        <p style={{ color: '#6B7280', lineHeight: 1.7, marginBottom: '28px', fontSize: '0.95rem' }}>
                            Fully engineered systems built to your exact requirements. Complex workflows, enterprise integrations, and specialized platforms — delivered with structure.
                        </p>

                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                            {['Built on demand', 'Tailored workflows & logic', 'Enterprise and specialized systems', 'Structured delivery process', 'Long-term maintenance & growth'].map((item) => (
                                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: '#374151' }}>
                                    <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(0,87,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" /></svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link href="/custom-enterprise" className="btn-primary" style={{ fontSize: '0.875rem' }}>
                            Learn More
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

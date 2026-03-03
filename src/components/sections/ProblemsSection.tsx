import Link from 'next/link';

const problems = [
    { problem: 'Manual financial processes', impact: 'Delayed reporting, reconciliation errors, compliance risk', solution: 'Accounting & Invoicing Platform', href: '/solutions#accounting' },
    { problem: 'HR & payroll inefficiencies', impact: 'Calculation errors, compliance gaps, employee dissatisfaction', solution: 'HR & Payroll Platform', href: '/solutions#hr' },
    { problem: 'Disconnected operational systems', impact: 'Data silos, manual data re-entry, inconsistent reporting', solution: 'Integrated Business Systems', href: '/solutions' },
    { problem: 'No real-time operational insight', impact: 'Reactive management, missed opportunities, poor decisions', solution: 'Operational Dashboard Platform', href: '/solutions#monitoring' },
];

export default function ProblemsSection() {
    return (
        <section className="section-pad">
            <div className="container-max">
                <div className="section-header centered">
                    <div className="tag" style={{ marginBottom: '16px', display: 'inline-flex' }}>Problems We Solve</div>
                    <h2>Common Business Problems We Eliminate</h2>
                    <p>Before recommending any technology, we understand the operational problem it needs to solve.</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {problems.map((p, i) => (
                        <div key={p.problem} className="problem-row">
                            <div style={{
                                width: '36px', height: '36px', borderRadius: '50%',
                                background: 'linear-gradient(135deg,#0057FF,#00C6FF)', color: '#fff',
                                fontWeight: 700, fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontFamily: 'Outfit, sans-serif', flexShrink: 0,
                            }}>
                                {i + 1}
                            </div>

                            <div>
                                <div style={{ fontWeight: 700, color: '#0A0F1E', fontSize: '0.95rem', marginBottom: '4px' }}>{p.problem}</div>
                                <div style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>Impact: {p.impact}</div>
                            </div>

                            <div>
                                <div style={{ color: '#6B7280', fontSize: '0.8rem', marginBottom: '4px' }}>Solution</div>
                                <div style={{ color: '#0057FF', fontWeight: 600, fontSize: '0.875rem' }}>{p.solution}</div>
                            </div>

                            <Link href={p.href} style={{ color: '#0057FF', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap' }}>
                                Learn More
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6H10M6 2L10 6L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

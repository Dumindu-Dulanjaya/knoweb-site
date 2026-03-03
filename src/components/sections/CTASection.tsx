import Link from 'next/link';

export default function CTASection() {
    return (
        <section className="cta-section" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
                backgroundSize: '32px 32px',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                top: '-60px', right: '-60px',
                width: '300px', height: '300px',
                background: 'radial-gradient(circle,rgba(255,255,255,0.15) 0%,transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="container-max" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(255,255,255,0.15)',
                        color: '#fff',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '5px 14px',
                        borderRadius: '100px',
                        marginBottom: '24px',
                        border: '1px solid rgba(255,255,255,0.25)',
                    }}>
                        Start the Conversation
                    </div>

                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>
                        Ready to Operate Your Business on a Better Platform?
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '40px' }}>
                        Whether you need a ready platform or a custom-built system, Knoweb is ready to match you with the right solution. Let's start with a conversation.
                    </p>

                    <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/contact" className="btn-white" style={{ padding: '14px 32px', fontSize: '0.95rem' }}>
                            Talk to a Solutions Consultant
                        </Link>
                        <Link href="/contact" className="btn-white-outline" style={{ padding: '14px 32px', fontSize: '0.95rem' }}>
                            Request a Demo
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

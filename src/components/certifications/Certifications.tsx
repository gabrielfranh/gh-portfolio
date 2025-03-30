import '../../styles/components/certifications/Certifications.css'

const Certifications = () => {
    return (
        <>
            <section id='certifications' className="certifications-container certifications-section">
                <h1 className="certifications-title">Certifications</h1>
                <a href='https://www.credly.com/badges/def112d5-c48f-495f-8c77-c1408c52d675/linked_in_profile' target='_blank'>
                    <div className="certifications-grid">
                        <div className="certification-card">
                            <img 
                                src="/src/assets/images/practitioner_badge.png" 
                                alt="AWS Certification Badge" 
                                className="certification-badge" 
                            />
                            <p className="certification-name">AWS Cloud Practitioner</p>
                        </div>
                    </div>
                </a>
            </section>
        </>
    )
}

export default Certifications;
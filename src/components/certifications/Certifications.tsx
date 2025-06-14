import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/swiper-bundle.css";
import "../../styles/components/certifications/Certifications.css";

// Import certification images
import cloudEssentials from "../../assets/images/AWS_Cloud_Essentials.png";
import cloudPractitioner from "../../assets/images/practitioner_badge.png";
import technicalEssentials from "../../assets/images/AWS_Technicals_Essentials.png";
import kubernetesComplete from "../../assets/images/kubernetes.png";
import dotnetMicroservices from "../../assets/images/microservice.png";
import practitionerEssentials from "../../assets/images/AWS_Cloud_Practitioner_Essentials.png";
import nUnit from "../../assets/images/nunit.png";

interface Certification {
  name: string;
  image: string;
  link: string;
  issuer: string;
  date?: string;
}

const certifications: Certification[] = [
  {
    name: "AWS Cloud Practitioner",
    image: cloudPractitioner,
    link: "https://www.credly.com/badges/def112d5-c48f-495f-8c77-c1408c52d675/linked_in_profile",
    issuer: "Amazon Web Services",
  },
  {
    name: "AWS Technical Essentials",
    image: technicalEssentials,
    link: "https://www.linkedin.com/in/gabrielfranh/details/certifications/1721784843843/single-media-viewer/?profileId=ACoAAByWR2IB709UTjuzTVobU2HotF3sjJW8EBQ",
    issuer: "Amazon Web Services",
  },
  {
    name: "certifications.kubernetes",
    image: kubernetesComplete,
    link: "https://www.udemy.com/certificate/UC-e0ee9d62-4c9c-4a8d-b762-a6f06a6fc517/",
    issuer: "Udemy",
  },
  {
    name: "certifications.dotnetMicroservices",
    image: dotnetMicroservices,
    link: "https://www.udemy.com/certificate/UC-822cc172-5d1d-4a90-9758-ee53469f3a1c/",
    issuer: "Udemy",
  },
  {
    name: "AWS Cloud Essentials",
    image: cloudEssentials,
    link: "https://www.linkedin.com/in/gabrielfranh/details/certifications/1721785637826/single-media-viewer/?profileId=ACoAAByWR2IB709UTjuzTVobU2HotF3sjJW8EBQ",
    issuer: "Amazon Web Services",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    image: practitionerEssentials,
    link: "https://www.linkedin.com/in/gabrielfranh/details/certifications/1721771111627/single-media-viewer/?profileId=ACoAAByWR2IB709UTjuzTVobU2HotF3sjJW8EBQ",
    issuer: "Amazon Web Services",
  },
  {
    name: "Unit Test: NUnit and MOQ",
    image: nUnit,
    link: "https://www.udemy.com/certificate/UC-ce6fc50d-2c0e-4425-ab33-29770efd0207/",
    issuer: "Udemy",
  },
];

const Certifications = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("certifications");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleCertificationClick = (cert: Certification) => {
    // Add click analytics or tracking here if needed
    console.log(`Certification clicked: ${cert.name}`);
  };

  return (
    <section 
      id="certifications" 
      className={`section certifications-section ${isVisible ? 'fade-in' : ''}`}
    >
      <h2 className="section-title certifications-title">
        {t("certifications.title")}
      </h2>
      
      <div className="certifications-content">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={4}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            320: { 
              slidesPerView: 1,
              spaceBetween: 20,
              effect: "slide",
            },
            640: { 
              slidesPerView: 2,
              spaceBetween: 25,
              effect: "slide",
            },
            768: { 
              slidesPerView: 3,
              spaceBetween: 30,
              effect: "coverflow",
            },
            1024: { 
              slidesPerView: 4,
              spaceBetween: 30,
              effect: "coverflow",
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          className="certifications-swiper"
        >
          {certifications.map((cert, index) => (
            <SwiperSlide key={`cert-${index}`}>
              <div className="certification-card-wrapper">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => handleCertificationClick(cert, e)}
                  className="certification-link"
                  aria-label={`View ${t(cert.name)} certification`}
                >
                  <article className="certification-card">
                    <div className="certification-badge-container">
                      <img
                        src={cert.image}
                        alt={`${t(cert.name)} certification badge`}
                        className="certification-badge"
                        loading="lazy"
                      />
                      <div className="certification-glow"></div>
                    </div>
                    
                    <div className="certification-info">
                      <h3 className="certification-name">
                        {t(cert.name)}
                      </h3>
                      <p className="certification-issuer">
                        {cert.issuer}
                      </p>
                    </div>
                    
                    <div className="certification-overlay">
                      <span className="view-certificate">
                        {t("certifications.viewCertificate")}
                      </span>
                    </div>
                  </article>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev certification-nav-btn">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="swiper-button-next certification-nav-btn">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>

      {/* Certification Stats */}
      <div className="certification-stats">
        <div className="stat-item">
          <span className="stat-number">{certifications.length}</span>
          <span className="stat-label">{t("certifications.totalCertifications")}</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">
            {certifications.filter(cert => cert.issuer === "Amazon Web Services").length}
          </span>
          <span className="stat-label">AWS</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">
            {certifications.filter(cert => cert.issuer === "Udemy").length}
          </span>
          <span className="stat-label">Udemy</span>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
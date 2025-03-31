import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../styles/components/certifications/Certifications.css';

const certifications = [
    {
        name: "AWS Cloud Practitioner",
        image: "/src/assets/images/practitioner_badge.png",
        link: "https://www.credly.com/badges/def112d5-c48f-495f-8c77-c1408c52d675/linked_in_profile"
    },
    {
        name: "AWS Technical Essentials",
        image: "/src/assets/images/AWS_Technicals_Essentials.png",
        link: "https://www.linkedin.com/in/gabrielfranh/details/certifications/1721784843843/single-media-viewer/?profileId=ACoAAByWR2IB709UTjuzTVobU2HotF3sjJW8EBQ"
    },
    {
        name: "Kubernetes Complete",
        image: "/src/assets/images/kubernetes.png",
        link: "https://www.udemy.com/certificate/UC-e0ee9d62-4c9c-4a8d-b762-a6f06a6fc517/"
    },
    {
        name: ".NET Core Microservices",
        image: "/src/assets/images/microservice.png",
        link: "https://www.udemy.com/certificate/UC-822cc172-5d1d-4a90-9758-ee53469f3a1c/"
    },
    {
        name: "AWS Cloud Essentials",
        image: "/src/assets/images/AWS_Cloud_Essentials.png",
        link: "https://www.linkedin.com/in/gabrielfranh/details/certifications/1721785637826/single-media-viewer/?profileId=ACoAAByWR2IB709UTjuzTVobU2HotF3sjJW8EBQ"
    },
    {
        name: "AWS Cloud Practitioner Essentials",
        image: "/src/assets/images/AWS_Cloud_Practitioner_Essentials.png",
        link: "https://www.linkedin.com/in/gabrielfranh/details/certifications/1721771111627/single-media-viewer/?profileId=ACoAAByWR2IB709UTjuzTVobU2HotF3sjJW8EBQ"
    },
    {
        name: "Unit Test: NUnit and MOQ",
        image: "/src/assets/images/nunit.png",
        link: "https://www.udemy.com/certificate/UC-ce6fc50d-2c0e-4425-ab33-29770efd0207/"
    }
];

const Certifications = () => {
    return (
        <section id='certifications' className="certifications-section">
            <h1 className="certifications-title">Certifications</h1>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{
                    640: { slidesPerView: 1 },  
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                navigation
                pagination={{ clickable: true }}
                className="certifications-swiper"
            >
                {certifications.map((cert, index) => (
                    <SwiperSlide key={index}>
                        <a href={cert.link} target='_blank' rel="noopener noreferrer">
                            <div className="certification-card">
                                <img 
                                    src={cert.image} 
                                    alt={cert.name} 
                                    className="certification-badge"
                                />
                                <p className="certification-name">{cert.name}</p>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Certifications;
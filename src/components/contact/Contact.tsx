import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../styles/components/contact/Contact.css";
import emailjs from "@emailjs/browser";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const Contact = () => {
  const { t } = useTranslation();
  const [showToast, setShowToast] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_g0tbslt", "template_l2e6cjg", form.current, {
        publicKey: "j22QuQ7tut3HcbBN9",
      })
      .then(
        () => {
          setShowToast(true);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-section text-white py-5" id="contact">
      <div className="container">
        <h2 className="text-center mb-4">{t("contact.title")}</h2>
        <p className="text-center mb-5">{t("contact.subTitle")}</p>

        <div className="row align-items-start">
          <div className="col-md-5 mb-4 d-flex flex-column justify-content-center align-items-start ps-md-5 text-start">
            <h4>gabrielfranh@gmail.com</h4>

            <div className="d-flex gap-4 fs-4 my-3 social-icons">
              <a
                href="mailto:gabrielfranh@gmail.com"
                className="text-white"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://github.com/gabrielfranh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/gabrielfranh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>

            <h5 className="mt-4">{t("contact.downloadCv")}</h5>
            <div className="d-flex gap-2 mt-2">
              <a
                href="/documents/EN_Gabriel_Habermann.pdf"
                download
                className="btn btn-outline-light btn-sm"
              >
                <i className="fas fa-file-download me-2"></i>English
              </a>
              <a
                href="/documents/PT_Gabriel_Habermann.pdf"
                download
                className="btn btn-outline-light btn-sm"
              >
                <i className="fas fa-file-download me-2"></i>Português
              </a>
            </div>
          </div>

          <div className="col-md-7">
            <form
              ref={form}
              onSubmit={sendEmail}
              method="POST"
              className="p-4 rounded shadow form-dark"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />

              <div className="mb-3">
                <label htmlFor="name" className="form-label text-white">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="user_name"
                  required
                  placeholder={t("contact.namePlaceholder")}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label text-white">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="user_email"
                  required
                  placeholder={t("contact.emailPlaceholder")}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label text-white">
                  {t("contact.message")}
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder={t("contact.messagePlaceholder")}
                ></textarea>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-paper-plane me-2"></i>
                  {t("contact.submit")}
                </button>
              </div>
            </form>
          </div>
        </div>

        <ToastContainer
          position="top-end"
          className="p-3 submitToast"
          style={{ zIndex: 9999 }}
          containerPosition="fixed"
        >
          <Toast
            show={showToast}
            delay={4000}
            onClose={() => setShowToast(false)}
            autohide
          >
            <Toast.Body>Mensagem enviada com sucesso!</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </section>
  );
};

export default Contact;

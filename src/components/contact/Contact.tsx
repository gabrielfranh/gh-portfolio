import { useTranslation } from 'react-i18next';
import '../../styles/components/contact/Contact.css'

const Contact = () =>
{
  const { t } = useTranslation();

    return (
        <>
            <section className="contact-section bg-dark text-white py-5" id='contact'>
              <div className="container">
                <h2 className="text-center mb-4">{t("contact.title")}</h2>
                <p className="text-center mb-5">{t("contact.subTitle")}</p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-8">
                    <form
                      action="https://formsubmit.co/gabrielfranh@gmail.com"
                      method="POST"
                      className="p-4 rounded shadow-sm bg-light text-dark"
                    >
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          {t("contact.name")}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          required
                          placeholder={t("contact.namePlaceholder")}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                        {t("contact.email")}
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          required
                          placeholder={t("contact.emailPlaceholder")}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">
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

                      <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">
                        {t("contact.submit")}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <h4>{t("contact.downloadCv")}</h4>
                  <div className="d-flex justify-content-center gap-3 mt-3 contact-buttons">
                    <a
                      href="/src/assets/documents/EN_Gabriel_Habermann.pdf"
                      download
                      className="btn btn-outline-light btn-lg"
                    >
                      English
                    </a>
                    <a
                      href="/src/assets/documents/PT_Gabriel_Habermann.pdf"
                      download
                      className="btn btn-outline-light btn-lg"
                    >
                      Português
                    </a>
                  </div>
                </div>
            </div>
          </section>

        </>
    )
}

export default Contact;
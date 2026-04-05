import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import "../../styles/components/contact/Contact.css";

type FormErrors = {
  name: string;
  email: string;
  message: string;
};

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

const Contact = () => {
  const { t } = useTranslation();
  const [showToast, setShowToast] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const form = useRef<HTMLFormElement>(null);

  const validateName = (value: string): string => {
    if (!value.trim()) return t("contact.errors.nameEmpty");
    return "";
  };

  const validateEmail = (value: string): string => {
    if (!value.trim()) return t("contact.errors.emailEmpty");
    if (!EMAIL_REGEX.test(value.trim())) return t("contact.errors.emailInvalid");
    return "";
  };

  const validateMessage = (value: string): string => {
    if (!value.trim()) return t("contact.errors.messageEmpty");
    if (value.trim().length < 10) return t("contact.errors.messageShort");
    return "";
  };

  const handleBlur = (field: keyof FormErrors, value: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error =
      field === "name" ? validateName(value) :
      field === "email" ? validateEmail(value) :
      validateMessage(value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: keyof FormErrors, value: string) => {
    if (!touched[field]) return;
    const error =
      field === "name" ? validateName(value) :
      field === "email" ? validateEmail(value) :
      validateMessage(value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const validate = (data: { name: string; email: string; message: string }): FormErrors => ({
    name: validateName(data.name),
    email: validateEmail(data.email),
    message: validateMessage(data.message),
  });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const data = {
      name: formData.get("user_name") as string ?? "",
      email: formData.get("user_email") as string ?? "",
      message: formData.get("message") as string ?? "",
    };

    const newErrors = validate(data);
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.values(newErrors).some(Boolean)) return;

    setSending(true);
    emailjs
      .sendForm("service_g0tbslt", "template_l2e6cjg", form.current, {
        publicKey: "j22QuQ7tut3HcbBN9",
      })
      .then(() => {
        setShowToast(true);
        form.current?.reset();
        setTouched({ name: false, email: false, message: false });
        setErrors({ name: "", email: "", message: "" });
        setTimeout(() => setShowToast(false), 4000);
      })
      .catch((error: any) => {
        console.log(error.text);
      })
      .finally(() => setSending(false));
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-heading">{t("contact.title")}</h2>
      <p className="section-subtext">{t("contact.subTitle")}</p>

      <div className="contact-layout">
        {/* ── Info column ── */}
        <div className="contact-info">
          <div className="note-card contact-info-card">
            <p className="contact-email">
              <i className="fa-solid fa-envelope" />
              dev@gabrielhabermann.com
            </p>

            <div className="contact-socials">
              <a
                href="https://github.com/gabrielfranh"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/gabrielfranh"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="contact-cv">
              <p className="contact-cv-label">{t("contact.downloadCv")}</p>
              <div className="contact-cv-links">
                <a href="/documents/EN_Gabriel_Habermann.pdf" download className="cv-btn">
                  <i className="fa-solid fa-file-arrow-down" />
                  English
                </a>
                <a href="/documents/PT_Gabriel_Habermann.pdf" download className="cv-btn">
                  <i className="fa-solid fa-file-arrow-down" />
                  Português
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Form column ── */}
        <div className="contact-form-wrapper">
          <div className="compose-header">
            <i className="fa-solid fa-file-lines" />
            <span>// new-message.md</span>
          </div>

          <form ref={form} onSubmit={sendEmail} className="compose-form" noValidate>
            <input type="hidden" name="_captcha" value="false" />

            {/* Name */}
            <div className="form-group">
              <label htmlFor="user_name" className="form-label">
                <span className="form-label-key">from:</span>
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                className={`form-input ${errors.name ? "form-input--error" : ""}`}
                placeholder={t("contact.namePlaceholder")}
                onBlur={(e) => handleBlur("name", e.target.value)}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              {errors.name && (
                <span className="form-error">
                  <i className="fa-solid fa-triangle-exclamation" /> {errors.name}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="user_email" className="form-label">
                <span className="form-label-key">email:</span>
              </label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                className={`form-input ${errors.email ? "form-input--error" : ""}`}
                placeholder={t("contact.emailPlaceholder")}
                onBlur={(e) => handleBlur("email", e.target.value)}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              {errors.email && (
                <span className="form-error">
                  <i className="fa-solid fa-triangle-exclamation" /> {errors.email}
                </span>
              )}
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                <span className="form-label-key">body:</span>
              </label>
              <textarea
                id="message"
                name="message"
                className={`form-input form-textarea ${errors.message ? "form-input--error" : ""}`}
                placeholder={t("contact.messagePlaceholder")}
                rows={6}
                onBlur={(e) => handleBlur("message", e.target.value)}
                onChange={(e) => handleChange("message", e.target.value)}
              />
              {errors.message && (
                <span className="form-error">
                  <i className="fa-solid fa-triangle-exclamation" /> {errors.message}
                </span>
              )}
            </div>

            <button type="submit" className="btn-send" disabled={sending}>
              {sending ? (
                <><i className="fa-solid fa-spinner fa-spin" /> {t("contact.sending")}</>
              ) : (
                <><i className="fa-solid fa-paper-plane" /> {t("contact.submit")} →</>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="toast-success">
          <i className="fa-solid fa-circle-check" />
          {t("contact.messageSent")}
        </div>
      )}
    </section>
  );
};

export default Contact;

import '../../styles/components/contact/Contact.css'

const Contact = () =>
{
    return (
        <>
            <section className="contact-section bg-dark text-white py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <p className="text-center mb-5">Feel free to reach out to me using the form below or in social media.</p>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            {/* Form */}
            <form
              action="https://formsubmit.co/YOUR_EMAIL_HERE"
              method="POST"
              className="p-4 rounded shadow-sm bg-light text-dark"
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Type your message here"
                ></textarea>
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="text-center mt-5">
          <h4>You can also download my CV in your preferred language</h4>
          <div className="d-flex justify-content-center gap-3 mt-3 contact-buttons">
            <a
              href="/path-to-cv-english.pdf"
              download
              className="btn btn-outline-light btn-lg"
            >
              English
            </a>
            <a
              href="/path-to-cv-portuguese.pdf"
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
import { useTranslation } from "react-i18next";
import "../../styles/components/notes/Notes.css";

type Note = {
  slug: string;
  titleKey: string;
  previewKey: string;
  date: string;
  tags: string[];
};

const notes: Note[] = [
  {
    slug: "why-dotnet-microservices.md",
    titleKey: "notes.items.0.title",
    previewKey: "notes.items.0.preview",
    date: "2024-03",
    tags: [".NET", "microservices", "architecture"],
  },
  {
    slug: "kubernetes-learning-journey.md",
    titleKey: "notes.items.1.title",
    previewKey: "notes.items.1.preview",
    date: "2024-01",
    tags: ["kubernetes", "devops", "cloud"],
  },
  {
    slug: "solid-in-practice.md",
    titleKey: "notes.items.2.title",
    previewKey: "notes.items.2.preview",
    date: "2023-11",
    tags: ["SOLID", "clean-code", ".NET"],
  },
  {
    slug: "aws-cloud-practitioner.md",
    titleKey: "notes.items.3.title",
    previewKey: "notes.items.3.preview",
    date: "2023-08",
    tags: ["AWS", "cloud", "certification"],
  },
];

const Notes = () => {
  const { t } = useTranslation();

  return (
    <section className="notes-section" id="notes">
      <h2 className="section-heading">{t("notes.title")}</h2>
      <p className="section-subtext">{t("notes.subtext")}</p>

      <div className="notes-grid">
        {notes.map((note) => (
          <article key={note.slug} className="note-file-card">
            <div className="note-file-header">
              <i className="fa-solid fa-file-lines note-file-icon" />
              <span className="note-file-slug">{note.slug}</span>
            </div>

            <div className="note-frontmatter">
              <span className="nfm-delimiter">---</span>
              <div className="nfm-line">
                <span className="nfm-key">date:</span>
                <span className="nfm-value nfm-date">{note.date}</span>
              </div>
              <div className="nfm-line nfm-tags-line">
                <span className="nfm-key">tags:</span>
                <div className="nfm-tags">
                  {note.tags.map((tag) => (
                    <span key={tag} className="nfm-tag">#{tag}</span>
                  ))}
                </div>
              </div>
              <span className="nfm-delimiter">---</span>
            </div>

            <h3 className="note-title">{t(note.titleKey)}</h3>
            <p className="note-preview">{t(note.previewKey)}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Notes;

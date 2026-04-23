import EnquiryForm from './components/EnquiryForm'
import MapPreview from './components/MapPreview'
import SectionHeader from './components/SectionHeader'
import {
  admissionSteps,
  facilities,
  heroHighlights,
  navigation,
  programs,
  schoolProfile,
  testimonials,
  values,
} from './data/school'
import logo from './assets/logo.png'
import schoolHero from './assets/School.png'
import schoolEntrance from './assets/SchoolOut2.png'
import schoolBuilding from './assets/SchoolIn1.png'
import campusPhoto from './assets/SchoolOut.png'
import './App.css'

const galleryImages = [
  {
    src: schoolHero,
    alt: 'Apex School main campus building',
    position: 'center 42%',
  },
  {
    src: campusPhoto,
    alt: 'Apex School entrance gate',
    position: 'center center',
  },
  {
    src: schoolBuilding,
    alt: 'Apex School front building',
    position: 'center top',
  },
  {
    src: schoolEntrance,
    alt: 'Apex School campus entry view',
    position: 'center 36%',
  },
]

function App() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label={`${schoolProfile.name} home`}>
          <img src={logo} alt="" />
          <span>
            <strong>{schoolProfile.name}</strong>
            <small>{schoolProfile.tagline}</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-action" href="#enquiry">
          Admission Open
        </a>
      </header>

      <section className="hero-section" id="home">
        <img src={schoolHero} alt="Apex School main campus view" />
        <div className="hero-overlay">
          <div className="hero-badge">
            <img src={logo} alt="" />
            <span>
              Established {schoolProfile.established} in{' '}
              {schoolProfile.locationShort}
            </span>
          </div>
          <h1>{schoolProfile.name}</h1>
          <p>
            A professional English medium school for Nursery to Class X, focused
            on strong foundations, disciplined learning, and confident student
            growth.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#enquiry">
              Enquire for Admission
            </a>
            <a className="secondary-action" href="#contact">
              Visit Campus
            </a>
          </div>
          <div className="hero-trust" aria-label="Apex School quick strengths">
            <span>English Medium</span>
            <span>Nursery to X</span>
            <span>Jhotwara Campus</span>
          </div>
        </div>
      </section>

      <section className="highlights-band" aria-label="School highlights">
        {heroHighlights.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section welcome-section" id="about">
        <div className="welcome-copy">
          <SectionHeader
            eyebrow="Welcome to Apex School"
            title="A school environment built for learning, discipline, and care."
            text="Located at Niwaru Link Road, Narayan Market, Jhotwara, Apex School brings together a clean campus, structured classroom routines, caring teachers, and regular parent communication."
          />
          <div className="welcome-actions">
            <a className="primary-action" href="#academics">
              Explore Academics
            </a>
            <a className="outline-action" href="#facilities">
              View Facilities
            </a>
          </div>
        </div>
        <div className="welcome-media">
          <img src={schoolBuilding} alt="Apex School building front" />
        </div>
      </section>

      <section className="section values-section">
        <SectionHeader
          eyebrow="Our Focus"
          title="The right balance of academics and values"
          text="The school experience is planned around academic progress, self-discipline, confidence, and parent partnership."
          align="center"
        />
        <div className="value-grid">
          {values.map((value, index) => (
            <article className="value-card" key={value.title}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section academics-section" id="academics">
        <SectionHeader
          eyebrow="Our Classes"
          title="Programs for every stage of school life"
          text="From early learning to senior classes, each academic level is designed with age-appropriate learning, practice, and progress tracking."
        />
        <div className="program-grid">
          {programs.map((program) => (
            <article className="program-card" key={program.title}>
              <p>{program.range}</p>
              <h3>{program.title}</h3>
              <span>{program.text}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="facility-section" id="facilities">
        <div className="facility-copy">
          <SectionHeader
            eyebrow="Facilities"
            title="A campus planned for everyday learning"
            text="Apex School keeps the everyday student experience simple, safe, and focused so children can learn with attention and confidence."
          />
          <img src={campusPhoto} alt="Apex School campus outer gate" />
        </div>
        <div className="facility-list">
          {facilities.map((facility) => (
            <div key={facility}>{facility}</div>
          ))}
        </div>
      </section>

      <section className="section admissions-section" id="admissions">
        <SectionHeader
          eyebrow="Admissions"
          title="How to enrol your child at Apex School"
          text="Parents can visit the school office during working hours or submit the enquiry form. The admission team can guide you on class availability, documents, and next steps."
        />
        <ol className="admission-steps">
          {admissionSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="enquiry-section" id="enquiry">
        <SectionHeader
          eyebrow="Admission Enquiry"
          title="Send your details to the school office"
          text="The form is ready for production: connect a form endpoint through environment variables, or use the email fallback while the backend is being set up."
        />
        <EnquiryForm
          adminEmail={schoolProfile.email}
          endpoint={schoolProfile.enquiryEndpoint}
        />
      </section>

      <section className="section gallery-section" id="gallery">
        <SectionHeader
          eyebrow="Gallery"
          title="See the Apex School campus"
          text="A quick view of the school building, entrance, and campus environment."
          align="center"
        />
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <img
              src={image.src}
              alt={image.alt}
              key={image.alt}
              style={{ objectPosition: image.position }}
            />
          ))}
        </div>
      </section>

      <section className="section testimonials-section">
        <SectionHeader
          eyebrow="Parent Voice"
          title="What parents look for in a school"
          align="center"
        />
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name}>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="footer-section" id="contact">
        <div className="footer-brand">
          <img src={logo} alt="" />
          <div>
            <h2>{schoolProfile.name}</h2>
            <p>{schoolProfile.tagline}</p>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-panel footer-map-panel">
            <div className="footer-panel-header">
              <h3>Visit The Campus</h3>
              <p>Explore the real school location directly in the map below.</p>
            </div>
            <MapPreview
              address={schoolProfile.address}
              embedUrl={schoolProfile.mapEmbedUrl}
            />
          </div>

          <div className="footer-panel">
            <div className="footer-panel-header">
              <h3>Quick Links</h3>
              <p>Move to the main sections of the website.</p>
            </div>
            {navigation.slice(0, 5).map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </div>

          <div className="footer-panel footer-contact-panel">
            <div className="footer-panel-header">
              <h3>Contact</h3>
              <p>Reach the school office for admission and campus visits.</p>
            </div>
            <div className="footer-contact-list">
              <p>{schoolProfile.address}</p>
              <a href={`mailto:${schoolProfile.email}`}>{schoolProfile.email}</a>
              <a href={schoolProfile.mapUrl} target="_blank" rel="noreferrer">
                Open Google Maps
              </a>
            </div>
          </div>

          <div className="footer-panel footer-note-panel">
            <div className="footer-panel-header">
              <h3>School Hours</h3>
              <p>Campus and office visits are available during working hours.</p>
            </div>
            <div className="footer-note">
              <strong>Monday to Saturday</strong>
              <span>8:00 AM - 2:00 PM</span>
            </div>
            <a href={`mailto:${schoolProfile.email}`}>{schoolProfile.email}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>All Rights Reserved © {new Date().getFullYear()} Apex School</span>
          <a href="#home">Back to top</a>
        </div>
      </footer>
    </main>
  )
}

export default App

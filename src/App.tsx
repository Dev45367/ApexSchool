import { useEffect, useState, type ReactNode } from 'react'
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

type IconName =
  | 'arrow-right'
  | 'arrow-top'
  | 'book-open'
  | 'calendar'
  | 'camera'
  | 'check-circle'
  | 'clock'
  | 'compass'
  | 'contact'
  | 'globe'
  | 'graduation-cap'
  | 'heart-handshake'
  | 'home'
  | 'layers'
  | 'mail'
  | 'map-pin'
  | 'medal'
  | 'school'
  | 'shield'
  | 'sparkles'
  | 'users'

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

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    'arrow-right': <path d="M5 12h14m-5-5 5 5-5 5" />,
    'arrow-top': (
      <path
        d="M12 19V5M7 10l5-5 5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    'book-open': (
      <>
        <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4H11v15H5.5A2.5 2.5 0 0 0 3 21.5z" />
        <path d="M21 6.5A2.5 2.5 0 0 0 18.5 4H13v15h5.5A2.5 2.5 0 0 1 21 21.5z" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    camera: (
      <>
        <path d="M4 8h3l2-3h6l2 3h3v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
        <circle cx="12" cy="14" r="4" />
      </>
    ),
    'check-circle': (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8.5 12 2.3 2.3 4.7-4.8" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m14.5 9.5-1.8 5-5 1.8 1.8-5z" />
      </>
    ),
    contact: (
      <>
        <path d="M19 18v-1a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v1" />
        <circle cx="12" cy="8" r="4" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </>
    ),
    'graduation-cap': (
      <>
        <path d="m3 10 9-4 9 4-9 4z" />
        <path d="M7 12v4.5c0 .7 2.2 1.5 5 1.5s5-.8 5-1.5V12" />
      </>
    ),
    'heart-handshake': (
      <>
        <path d="M7 12.5 9.6 10a2.1 2.1 0 0 1 3 0l.4.4a2 2 0 0 0 2.8 0l2.2-2.2" />
        <path d="M5 9 3.6 7.6a3 3 0 0 1 4.2-4.2L9 4.6l1.2-1.2a3 3 0 0 1 4.2 4.2L13 9" />
        <path d="m3 13 3-3 3 3 3-3 3 3 3-3" />
      </>
    ),
    home: (
      <>
        <path d="M4 10.5 12 4l8 6.5" />
        <path d="M6 9.5V20h12V9.5" />
      </>
    ),
    layers: (
      <>
        <path d="m12 4 8 4-8 4-8-4z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 16 8 4 8-4" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    'map-pin': (
      <>
        <path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    medal: (
      <>
        <circle cx="12" cy="10" r="4" />
        <path d="m8.5 14.5-1.2 6L12 18l4.7 2.5-1.2-6" />
      </>
    ),
    school: (
      <>
        <path d="M3 10 12 5l9 5" />
        <path d="M5 10v9h14v-9" />
        <path d="M9 19v-5h6v5" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 5 3.4 8.8 7 10 3.6-1.2 7-5 7-10V6z" />
        <path d="m9.5 12 1.8 1.8 3.7-3.8" />
      </>
    ),
    sparkles: (
      <>
        <path d="m12 3 1.4 3.6L17 8l-3.6 1.4L12 13l-1.4-3.6L7 8l3.6-1.4z" />
        <path d="m5 14 .8 2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8z" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
        <path d="M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      className="ui-icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

const navIcons: Record<(typeof navigation)[number][0], IconName> = {
  About: 'school',
  Academics: 'book-open',
  Facilities: 'sparkles',
  Admissions: 'graduation-cap',
  Gallery: 'camera',
  Contact: 'contact',
}

const highlightIcons: Record<(typeof heroHighlights)[number][1], IconName> = {
  'Classes offered': 'layers',
  'Medium of learning': 'globe',
  Established: 'calendar',
  'School hours': 'clock',
}

const valueIcons: Record<(typeof values)[number]['title'], IconName> = {
  'Value Education': 'medal',
  'Academic Growth': 'book-open',
  'Teaching Strategy': 'compass',
  'Parent Partnership': 'heart-handshake',
}

const facilityIcons: Record<(typeof facilities)[number], IconName> = {
  'Modern classrooms': 'school',
  'Safe campus environment': 'shield',
  'Regular assessments': 'check-circle',
  'Doubt support': 'users',
  'Parent-teacher interaction': 'heart-handshake',
  'Disciplined school routine': 'clock',
  'Activity-based learning': 'sparkles',
  'Clean learning spaces': 'home',
}

const admissionIcons: IconName[] = ['mail', 'contact', 'check-circle']



function App() {
  
  const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 1000);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <a href="#home" className="scroll-top-btn theme">
      <Icon name="arrow-top" />
    </a>
  );
};
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
              <Icon name={navIcons[label]} />
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-action" href="#enquiry">
          <Icon name="arrow-right" />
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
              <Icon name="mail" />
              Enquire for Admission
            </a>
            <a className="secondary-action" href="#contact">
              <Icon name="map-pin" />
              Visit Campus
            </a>
          </div>
          <div className="hero-trust" aria-label="Apex School quick strengths">
            <span>
              <Icon name="globe" />
              English Medium
            </span>
            <span>
              <Icon name="graduation-cap" />
              Nursery to X
            </span>
            <span>
              <Icon name="map-pin" />
              Jhotwara Campus
            </span>
          </div>
        </div>
      </section>

      <section className="highlights-band" aria-label="School highlights">
        {heroHighlights.map(([value, label]) => (
          <div key={label}>
            <span className="highlight-icon">
              <Icon name={highlightIcons[label]} />
            </span>

            <div className="highlight-content">
              <strong>{value}</strong>
              <span className="highlight-label">{label}</span>
            </div>
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
      <section className="section values-section premium">
  <SectionHeader
    eyebrow="Our Focus"
    title="The right balance of academics and values"
    text="The school experience is planned around academic progress, self-discipline, confidence, and parent partnership."
    align="center"
  />

{/* </section>




<section className="values-wrapper"> */}
  <div className="values-container">

    {values.map((value, index) => (
      <article className="value-card-premium" key={value.title}>
        
        {/* Image */}
        <div className="card-image">
          <img src={value.image} alt={value.title} />
        </div>

        {/* Floating Icon */}
        <div className="card-icon">
          <Icon name={valueIcons[value.title]} />
        </div>

        {/* Content */}
        <div className="card-body">
          <h3>{value.title}</h3>
          <p>{value.text}</p>

          <span className={`card-index index-${index + 1}`}>
            0{index + 1}
          </span>
        </div>

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
            <div key={facility}>
              <Icon name={facilityIcons[facility]} />
              <span>{facility}</span>
            </div>
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
          {admissionSteps.map((step, index) => (
            <li key={step}>
              <span className="admission-step-icon">
                <Icon name={admissionIcons[index]} />
              </span>
              {step}
            </li>
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
            <figure className="gallery-card" key={image.alt}>
              <img
                src={image.src}
                alt={image.alt}
                style={{ objectPosition: image.position }}
              />
              <figcaption>
                <Icon name="camera" />
                {image.alt}
              </figcaption>
            </figure>
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
                <Icon name={navIcons[label]} />
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
              <p>
                <Icon name="map-pin" />
                <span>{schoolProfile.address}</span>
              </p>
              <a href={`mailto:${schoolProfile.email}`}>
                <Icon name="mail" />
                {schoolProfile.email}
              </a>
              <a href={schoolProfile.mapUrl} target="_blank" rel="noreferrer">
                <Icon name="map-pin" />
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
              <strong>
                <Icon name="calendar" />
                Monday to Saturday
              </strong>
              <span>8:00 AM - 2:00 PM</span>
            </div>
            <a href={`mailto:${schoolProfile.email}`}>
              <Icon name="mail" />
              {schoolProfile.email}
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>All Rights Reserved © {new Date().getFullYear()} Apex School</span>
          <ScrollTop/>
        </div>
        
      </footer>
    </main>
  )
}

export default App

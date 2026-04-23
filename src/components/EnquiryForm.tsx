import { type FormEvent, useState } from 'react'

type EnquiryFormProps = {
  adminEmail: string
  endpoint?: string
}

type EnquiryPayload = {
  parentName: string
  phone: string
  studentClass: string
  email: string
  message: string
}

const initialStatus = {
  message: '',
  type: 'idle',
}

function buildMailto(adminEmail: string, payload: EnquiryPayload) {
  const subject = `Admission enquiry from ${payload.parentName}`
  const body = [
    'New admission enquiry for Apex School',
    '',
    `Parent name: ${payload.parentName}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email || 'Not provided'}`,
    `Class interested: ${payload.studentClass}`,
    '',
    'Message:',
    payload.message || 'No extra message added.',
  ].join('\n')

  return `mailto:${adminEmail}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`
}

function EnquiryForm({ adminEmail, endpoint }: EnquiryFormProps) {
  const [status, setStatus] = useState(initialStatus)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)
    const payload: EnquiryPayload = {
      parentName: String(data.get('parentName') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      email: String(data.get('email') || '').trim(),
      studentClass: String(data.get('studentClass') || '').trim(),
      message: String(data.get('message') || '').trim(),
    }

    setIsSubmitting(true)
    setStatus(initialStatus)

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })

        if (!response.ok) {
          throw new Error('The enquiry service did not accept the request.')
        }

        form.reset()
        setStatus({
          type: 'success',
          message: 'Enquiry sent. The school team will contact you shortly.',
        })
      } catch {
        setStatus({
          type: 'error',
          message:
            'Unable to send directly. Please use email or try again later.',
        })
      } finally {
        setIsSubmitting(false)
      }

      return
    }

    window.location.href = buildMailto(adminEmail, payload)
    form.reset()
    setStatus({
      type: 'success',
      message: 'Your email app is opening with the enquiry details.',
    })
    setIsSubmitting(false)
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Parent name
          <input name="parentName" type="text" placeholder="Full name" required />
        </label>
        <label>
          Phone number
          <input
            name="phone"
            type="tel"
            placeholder="Mobile number"
            pattern="[0-9+\-\s]{8,15}"
            required
          />
        </label>
      </div>

      <div className="form-grid">
        <label>
          Email address
          <input name="email" type="email" placeholder="Optional email" />
        </label>
        <label>
          Class interested in
          <select name="studentClass" defaultValue="" required>
            <option value="" disabled>
              Select class
            </option>
            <option>Nursery</option>
            <option>LKG / UKG</option>
            <option>Class I-V</option>
            <option>Class VI-VIII</option>
            <option>Class IX-X</option>
          </select>
        </label>
      </div>

      <label>
        Message
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us anything important about the admission enquiry"
        />
      </label>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
      </button>

      {status.message && (
        <p className={`form-status ${status.type}`}>{status.message}</p>
      )}
    </form>
  )
}

export default EnquiryForm

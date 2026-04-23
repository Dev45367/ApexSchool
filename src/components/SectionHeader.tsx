type SectionHeaderProps = {
  eyebrow: string
  title: string
  text?: string
  align?: 'left' | 'center'
}

function SectionHeader({
  eyebrow,
  title,
  text,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div className={`section-header ${align === 'center' ? 'is-centered' : ''}`}>
      <p className="section-kicker">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

export default SectionHeader

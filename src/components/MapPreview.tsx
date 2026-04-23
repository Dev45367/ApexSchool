type MapPreviewProps = {
  address: string
  embedUrl: string
}

function MapPreview({ address, embedUrl }: MapPreviewProps) {
  return (
    <div className="map-preview" aria-label="Interactive Apex School location map">
      <iframe
        title="Apex School location map"
        src={embedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="map-preview-content">
        <strong>Campus Location</strong>
        <small>Use two fingers on mobile or your mouse wheel to zoom the live map.</small>
      </div>
      <div className="map-preview-address">
        <span>{address}</span>
      </div>
    </div>
  )
}

export default MapPreview

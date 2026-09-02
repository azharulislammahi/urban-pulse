export default function Notes({
  top, heart, base, tone = 'dark',
}: { top: string[]; heart: string[]; base: string[]; tone?: 'dark' | 'light' }) {
  const rows: [string, string[]][] = [['Top', top], ['Heart', heart], ['Base', base]]
  const valColor = tone === 'light' ? 'rgba(255,255,255,0.62)' : '#6B5F51'
  const visible = rows.filter(([, v]) => v && v.length)
  if (!visible.length) return null
  return (
    <div className="notes">
      {visible.map(([k, v]) => (
        <div className="notes-row" key={k}>
          <div className="notes-key">{k}</div>
          <div className="notes-val" style={{ color: valColor }}>{v.join(' · ')}</div>
        </div>
      ))}
    </div>
  )
}

import { STATUS_LABELS, STATUSES } from "../statuses";

export default function Summary({applications}) {
  return (
    <section className="summary">
      <div className="summary-tile">
        <strong>{applications.length}</strong> Total
      </div>

      {STATUSES.map((status) => (
        <div className="summary-tile" key={status}>
          <strong>{applications.filter((app) => app.status === status).length}</strong> {STATUS_LABELS[status]}
        </div>
      ))}
    </section>
  )
}
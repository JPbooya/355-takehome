import { formatDate } from "../statuses";
import StatusBadge from "./StatusBadge";

export default function ApplicationCard({application}) {
    return(
      <article className="job-card">
        <h3>{application.company}</h3>
        <p>{application.role}</p>

        <StatusBadge status={application.status}></StatusBadge>

        <p>Applied { formatDate(application.appliedOn) }</p>

        {application.notes && <p>{application.notes}</p>}
        {application.source && <p>via {application.source}</p>}
      </article>
    )
}
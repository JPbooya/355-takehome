import ApplicationCard from './ApplicationCard';

export default function ApplicationList({applications}) {

  // Sorts copy so the orginial list isnt changed. Newest dates first.
  const sorted = [...applications].sort((a,b) => b.appliedOn.localeCompare(a.appliedOn));

  // uses application id as the key so react can track cards when order changes.
   return (
    <section className="job-list">
      {sorted.map((application) => (
        <ApplicationCard key={application.id} application={application} />
      ))}
    </section>
  );

}
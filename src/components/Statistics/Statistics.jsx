const Statistics = ({ title, stats }) => {
    console.log(stats)

    return (
    <section className="statistics">
        {title && (
        <h2 className="title">{title}</h2>
      )}        
        

        <ul className="stat-list">
            {stats.map(({ label, percentage, id }) => (
                <li key={id} className="item">
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}</span>
                </li>
            ))}
        </ul>
    </section>
    );
}

export default Statistics;
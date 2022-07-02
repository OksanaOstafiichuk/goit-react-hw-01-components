import PropTypes from 'prop-types';
import { StatisticsBlock, StatList, StatItem, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
    <StatisticsBlock>
    {title && (
        <Title>{title}</Title>
      )}        

        <StatList>
            {stats.map(({ label, percentage, id }) => (
                <StatItem key={id} >
                    <span>{label}</span>
                    <span>{percentage}</span>
                </StatItem>
            ))}
        </StatList>
    </StatisticsBlock>
    );
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};
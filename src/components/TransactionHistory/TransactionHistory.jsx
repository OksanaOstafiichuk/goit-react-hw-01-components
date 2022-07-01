import PropTypes from 'prop-types';
import { TableTransaction, TableTitle } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
    return (
        <TableTransaction>
            <TableTitle>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </TableTitle>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </TableTransaction>
    )
}

TransactionHistory.propType = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}

export default TransactionHistory;
import PropTypes from 'prop-types';
import { TableTransaction, TableTitle, Row, BodyTable, Type } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <TableTransaction>
            <TableTitle>
                <Row>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </Row>
            </TableTitle>

            <BodyTable>
                {items.map(({ id, type, amount, currency }) => (
                    <Row key={id}>
                        <Type>{type}</Type>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </Row>
                ))}
            </BodyTable>
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
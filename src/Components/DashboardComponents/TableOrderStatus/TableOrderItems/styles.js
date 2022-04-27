import styled from 'styled-components';

export const Tr = styled.tr`
    
    td {

        span {
            color: ${props => (props.mode === 'Rejected' && '#cf3d48') || (props.mode === 'Approved' && '#3eaa78') || (props.mode === 'Pending' && '#e2891e')};
            border: 1px solid ${props => (props.mode === 'Rejected' && '#cf3d48') || (props.mode === 'Approved' && '#3eaa78') || (props.mode === 'Pending' && '#e2891e')};
        }
    }
`;

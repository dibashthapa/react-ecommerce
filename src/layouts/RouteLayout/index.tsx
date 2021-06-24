import { ReactChild, ReactChildren, ReactNode } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

type PathParams = {
    query: string;
};

type PropsType = RouteComponentProps<PathParams> & {
    children: ReactNode | ReactChild | ReactChildren;
};

const RouteLayout: React.FC<PropsType> = ({ children }) => {
    return <>{children}</>;
};

export default withRouter(RouteLayout);

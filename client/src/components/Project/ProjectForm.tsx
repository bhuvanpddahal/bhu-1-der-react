import React from 'react';
import { useSelector } from 'react-redux';

import NotFound from '../NotFound/NotFound';
import { admin } from '../../constants/util';
import { State } from '../../interfaces/store';

const ProjectForm: React.FC = () => {
    const { user } = useSelector((state: State) => state.auth);

    if(user?.type !== admin) return <NotFound />

    return (
        <div>ProjectForm</div>
    )
};

export default ProjectForm;
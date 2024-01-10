import React from 'react';

import Reply from './Reply';
import { RepliesProp } from '../../../interfaces/blog';

const Replies: React.FC<RepliesProp> = ({ replies }: RepliesProp) => {
    return (
        <ul>
            {replies?.map((reply, index) => (
                <Reply
                    key={index}
                    username={reply?.username}
                    reply={reply?.reply}
                    isLast={index === replies?.length - 1}
                />
            ))}
        </ul>
    )
};

export default Replies;
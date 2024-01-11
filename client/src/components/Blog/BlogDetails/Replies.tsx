import React from 'react';
import { motion } from 'framer-motion';

import Reply from './Reply';
import { RepliesProp } from '../../../interfaces/blog';

const Replies: React.FC<RepliesProp> = ({ replies }: RepliesProp) => {
    return (
        <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            {replies?.map((reply, index) => (
                <Reply
                    key={index}
                    username={reply?.username}
                    pictureIndex={reply?.pictureIndex}
                    reply={reply?.reply}
                    isLast={index === replies?.length - 1}
                />
            ))}
        </motion.ul>
    )
};

export default Replies;
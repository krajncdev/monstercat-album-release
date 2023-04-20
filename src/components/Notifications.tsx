import { useSnapshot } from 'valtio';
import { motion } from 'framer-motion';

import { state } from '../store';

const Notifications = () => {
  const snap = useSnapshot(state);
  const { notifications } = snap;
  return (
    <>
      {notifications.length !== 0 && (
        <ul className='fixed flex flex-col-reverse gap-2 z-[60] top-5 right-5 '>
          {notifications.map((noti) => (
            <motion.li
              key={noti.id}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className='text-sm bg-lightgray p-1'
            >
              {noti.message}
            </motion.li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Notifications;

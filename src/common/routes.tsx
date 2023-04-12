import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';
import { TbReportSearch } from 'react-icons/tb';
import { HiOutlineViewBoards, HiOutlineDocumentText } from 'react-icons/hi';
import { BsListTask } from 'react-icons/bs';

const menues = [
  {
    id: 'a1',
    pageName: 'Home',
    icon: <AiOutlineHome />,
    path: '/',
  },
  {
    id: 'a2',
    pageName: 'Management',
    icon: <TbReportSearch />,
    path: '/management',
  },
  {
    id: 'a3',
    pageName: 'Boards',
    icon: <HiOutlineViewBoards />,
    path: '/boards',
  },
  {
    id: 'a4',
    pageName: 'Backlogs',
    icon: <BsListTask />,
    path: '/backlogs',
  },
  {
    id: 'a5',
    pageName: 'Documentation',
    icon: <HiOutlineDocumentText />,
    path: '/documentation',
  },
  {
    id: 'a6',
    pageName: 'Settings',
    icon: <AiOutlineSetting />,
    path: '/settings',
  },
];

export default menues;

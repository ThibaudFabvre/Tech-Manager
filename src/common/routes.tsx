import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';
import { TbReportSearch } from 'react-icons/tb';
import { HiOutlineViewBoards, HiOutlineDocumentText } from 'react-icons/hi';
import { BsListTask } from 'react-icons/bs';

const menues = [
  {
    id: 'a1',
    pageName: 'Home',
    icon: <AiOutlineHome size={24} />,
    path: '/',
  },
  {
    id: 'a2',
    pageName: 'Management',
    icon: <TbReportSearch size={24} />,
    path: '/management',
  },
  {
    id: 'a3',
    pageName: 'Boards',
    icon: <HiOutlineViewBoards size={24} />,
    path: '/boards',
  },
  {
    id: 'a4',
    pageName: 'Backlogs',
    icon: <BsListTask size={24} />,
    path: '/backlogs',
  },
  {
    id: 'a5',
    pageName: 'Documentation',
    icon: <HiOutlineDocumentText size={24} />,
    path: '/documentation',
  },
  {
    id: 'a6',
    pageName: 'Settings',
    icon: <AiOutlineSetting size={24} />,
    path: '/settings',
  },
];

export default menues;

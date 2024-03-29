import { FC, cloneElement } from 'react';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { BiSearchAlt, BiTestTube } from 'react-icons/bi';
import { HiBugAnt } from 'react-icons/hi2';
import {
  BsCheckCircleFill,
  BsWrench,
  BsFillBugFill,
  BsTelephoneOutboundFill,
  BsFileEarmarkCodeFill,
} from 'react-icons/bs';
import { MdPersonSearch, MdOutlineSettings, MdAnnouncement } from 'react-icons/md';
import { GiAutoRepair } from 'react-icons/gi';
import { GoCommentDiscussion } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';

type Props = {
  icons?: Array<any>
  onIconPick: (icon: any) => void
}

const IconPicker: FC<Props> = ({
  icons = [
    <BsFillBugFill />,
    <HiBugAnt />,
    <AiOutlineCheckSquare />,
    <BsCheckCircleFill />,
    <BiSearchAlt />,
    <MdPersonSearch />,
    <MdOutlineSettings />,
    <BiTestTube />,
    <GiAutoRepair />,
    <GoCommentDiscussion />,
    <BsTelephoneOutboundFill />,
    <FiPhoneCall />,
    <BsWrench />,
    <MdAnnouncement />,
    <BsFileEarmarkCodeFill />,
  ],
  onIconPick,
}) => {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {icons.map((icon, index) => {
        return (
          <>
            {cloneElement(icon, {
              key: index,
              style: { cursor: 'pointer' },
              size: 24,
              onClick: () => {
                return onIconPick(icon);
              },
            })}
          </>
        );
      })}
    </div>
  );
};

export default IconPicker;

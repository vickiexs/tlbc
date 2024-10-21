import { TiSocialInstagram } from "react-icons/ti";
import { MdMailOutline } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { IoPricetags } from "react-icons/io5";
import { MdPeople } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { RiPlayCircleFill } from "react-icons/ri";

interface IconProps {
  icon: string;
  size?: number;
}

export default function Icon({ icon, size }: IconProps) {
  const MappedIcon = ({ icon }: IconProps) => {
    switch (icon) {
      case "instagram":
        return <TiSocialInstagram size={size} />;
      case "email":
        return <MdMailOutline size={size} />;
      case "calendar":
        return <IoMdCalendar size={size} />;
      case "priceTags":
        return <IoPricetags size={size} />;
      case "people":
        return <MdPeople size={size} />;
      case "location":
        return <MdLocationPin size={size} />;
      case "close":
        return <MdClose size={size} />;
      case "playCircle":
        return <RiPlayCircleFill size={size} />;
    }
  };

  return <MappedIcon icon={icon} />;
}

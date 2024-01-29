import { TiSocialInstagram } from "react-icons/ti";
import { MdMailOutline } from "react-icons/md";

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
    }
  };

  return <MappedIcon icon={icon} />;
}

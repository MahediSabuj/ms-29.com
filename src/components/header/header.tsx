import Navigation from "@/components/navigation/navigation";
import { HeaderConfig } from "@/types/header";

export default function Header(config: HeaderConfig) {
  return (
    <header>
      <Navigation {...config}/>
    </header>
  );
}

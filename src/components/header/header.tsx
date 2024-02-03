import Navigation from "@/components/navigation/navigation";
import { HeaderConfig } from "@/types/header";

export default function Header(config: HeaderConfig) {
  return (
    <header className="border-solid border-b py-2 shadow-md">
      <div className="container mx-auto">
        <Navigation {...config}/>
      </div>
    </header>
  );
}

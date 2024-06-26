import Nodes from "@/components/cards/nodes";
import Footer from "@/components/layout/footer";
import ChatIcon from "@/components/llm/chat-icon";
import { env } from "process";

export default function Dashboard() {
  return (
    <div className="mb-5">
      <div className="p-2 ml-2 mx-auto">
        <Nodes />
        <ChatIcon />
        <Footer cluster={env.CLUSTER_NAME} logo={env.CLUSTER_LOGO} />
      </div>
    </div>
  );
}

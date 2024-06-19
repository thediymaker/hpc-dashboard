import { CardTitle, CardContent, Card } from "@/components/ui/card";
import { Computer } from "lucide-react";
import { Separator } from "../ui/separator";

interface SlurmJobDetailsProps {
  node: any;
}

export function SlurmNodeDetails({ node }: SlurmJobDetailsProps) {
  if (!node.nodes)
    return (
      <div>
        Sorry, I couldn't find any node details for the node you provided.
        Please try again with a valid node name.
      </div>
    );
  const nodeInfo = node.nodes[0];
  return (
    <Card className="w-full max-w-md">
      <div className="flex items-center gap-4 bg-muted/50 px-6 py-4 mx-auto">
        <Computer className="w-8 h-8" />
        <div className="grid gap-1">
          <CardTitle>
            Node: <span className="text-blue-500">{nodeInfo.name}</span>
          </CardTitle>
        </div>
      </div>
      <Separator className="bg-gray-500 w-[90%] mx-auto" />
      <CardContent className="p-6 grid gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">Name</div>
            <div>{nodeInfo.name}</div>
          </div>
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">Cores</div>
            <div>{nodeInfo.cores}</div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">CPU Load</div>
            <div>{nodeInfo.cpu_load}%</div>
          </div>
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">State</div>
            {nodeInfo.state.map((state: string, index: number) => (
              <div key={index} className="text-green-500">
                {state}
              </div>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">Partitions</div>
            {nodeInfo.partitions.map((partition: string, index: number) => (
              <div key={index}>{partition}</div>
            ))}
          </div>
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">Real Memory</div>
            <div>{nodeInfo.real_memory} MB</div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">Boot Time</div>
            <div>
              {new Date(nodeInfo.boot_time.number * 1000).toLocaleString()}
            </div>
          </div>
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">Last Busy</div>
            <div>
              {new Date(nodeInfo.last_busy.number * 1000).toLocaleString()}
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">Gres Used</div>
            <div>{nodeInfo.gres_used}</div>
          </div>
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">
              Operating System
            </div>
            <div>{nodeInfo.operating_system}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

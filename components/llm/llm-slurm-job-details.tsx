import { CardTitle, CardContent, Card } from "@/components/ui/card";
import { convertUnixToHumanReadable } from "@/lib/utils";
import { TerminalIcon } from "lucide-react";
import { Separator } from "../ui/separator";

interface SlurmJobDetailsProps {
  job: any;
}

export function SlurmJobDetails({ job }: SlurmJobDetailsProps) {
  if (!job.jobs.length)
    return (
      <div>
        Sorry, I couldn't find any job details for the job ID you provided.
        Please try again with a valid job ID.
      </div>
    );
  const jobInfo = job.jobs[0];
  return (
    <Card className="w-full max-w-md">
      <div className="flex items-center gap-4 bg-muted/50 px-6 py-4 mx-auto">
        <TerminalIcon className="w-8 h-8" />
        <div className="grid gap-1">
          <CardTitle>
            Slurm Job: <span className="text-blue-500">{jobInfo.job_id}</span>
          </CardTitle>
        </div>
      </div>
      <Separator className="bg-gray-500 w-[90%] mx-auto" />
      <CardContent className="p-6 grid gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">Job ID</div>
            <div>{jobInfo.job_id}</div>
          </div>
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">User</div>
            <div>{jobInfo.user_name}</div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">Job Name</div>
            <div>{jobInfo.name}</div>
          </div>
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">Status</div>
            <div className="text-green-500">{jobInfo.job_state[0]}</div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">Start Time</div>
            <div>
              {jobInfo?.start_time?.number
                ? convertUnixToHumanReadable(jobInfo?.start_time?.number)
                : "N/A"}
            </div>
          </div>
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">End Time</div>
            <div>
              {jobInfo?.end_time?.number
                ? convertUnixToHumanReadable(jobInfo?.end_time?.number)
                : "N/A"}
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">Nodes</div>
            <div>{jobInfo.job_resources.nodes}</div>
          </div>
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">Exit Code</div>
            <div>{jobInfo.exit_code.status[0]}</div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">Cores</div>
            <div>{jobInfo.job_resources.allocated_cores}</div>
          </div>
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">Memory Usage</div>
            <div>{jobInfo.memory_per_node.number / 1024} GB</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

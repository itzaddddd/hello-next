import { Card } from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <h1>Archived Notifications</h1>
      <div>
        <Link href="/complex-dashboard"></Link>
      </div>
    </Card>
  )
}
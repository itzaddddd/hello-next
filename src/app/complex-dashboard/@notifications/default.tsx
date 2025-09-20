import { Card } from "@/components/card"
import Link from "next/link"

export default function Notifications() {
  return (
    <Card>
      <h1>Notifications</h1>
      <p>This is the notifications page.</p>
      <div>
        <Link href="/complex-dashboard/archived">
          Archived Notifications
        </Link>
      </div>
    </Card>
  )
}
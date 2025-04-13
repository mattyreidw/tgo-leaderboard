export const dynamic = 'force-dynamic';

import { getActivityLog } from '@/lib/queries/getActivityLog';
import ActivityLog from '../components/ActivityLog';

const activity = await getActivityLog();

export default function Page() {
    
    return (
        <main className="p-6">
            <ActivityLog log={activity} />
        </main>
    )
}   
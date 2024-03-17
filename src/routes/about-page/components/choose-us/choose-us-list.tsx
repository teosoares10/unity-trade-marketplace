import * as Icon from 'lucide-react';
import { ChooseUsItem } from './choose-us-item';

export const ChooseUsList = () => {
    return (
        <div>
            <ChooseUsItem
                icon={<Icon.HeadphonesIcon size={64} color='orange' />}
                title='support 24/7'
            />
            <ChooseUsItem
                icon={<Icon.ArrowLeftCircleIcon size={64} color='orange' />}
                title='easy to return'
            />
            <ChooseUsItem
                icon={<Icon.ArchiveIcon size={64} color='orange' />}
                title='high quality'
            />
        </div>
    )
}
import {
    HomeIcon,
    UsersIcon,
    CalendarIcon,
    ChatBubbleLeftIcon,
    CreditCardIcon,
} from '@heroicons/react/24/outline';

export const navLinks = [
    { label: 'Overview', icon: HomeIcon, href: '#', className: '' },
    { label: 'Patients', icon: UsersIcon, href: '#', className: 'bg-cl-green px-4 py-2.5 rounded-full' },
    { label: 'Schedule', icon: CalendarIcon, href: '#', className: '' },
    { label: 'Message', icon: ChatBubbleLeftIcon, href: '#', className: '' },
    { label: 'Transactions', icon: CreditCardIcon, href: '#', className: '' },
];

import { SideEffect } from '@/components/dashboard'
import { TNavigationProps } from '@/components/dashboard/SideEffect'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Generated by create next app'
}

const navigationData: TNavigationProps[] = [
  { text: 'Dashboard', icon: 'home', url: '/administrator' },
  { text: 'Usuários', icon: 'user', url: '/administrator/users' },
  { text: 'Tickets de suporte', icon: 'support', url: '/administrator/supportTickets' },
  { text: 'Assinaturas', icon: 'recurrences', url: '/administrator/assinaturas' },
  { text: 'Manutenção', icon: 'maintenance', url: '/administrator/maintenance' },
  { text: 'Logs do sistema', icon: 'logs', url: '/administrator/systemLogs' },
  { text: 'Relatórios', icon: 'pie-chart', url: '/administrator/relations' },
  { text: 'Notificações', icon: 'notification', url: '/notifications' }
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-screen">
      <SideEffect data={navigationData} />
      <div className="flex-1 w-full p-500 space-y-500 overflow-y-auto">{children}</div>
    </div>
  )
}
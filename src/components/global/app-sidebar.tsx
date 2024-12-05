import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

const items = [
  {
    title: 'Busca Binária',
    url: '#',
  },
  {
    title: 'Ordenação por Seleção',
    url: '#',
  },
  {
    title: 'Ordenação por Quicksort',
    url: '#',
  },
  {
    title: 'Busca em Largura (Breadth-First)',
    url: '#',
  },
  {
    title: 'Algoritmo de Dijkstra',
    url: '#',
  },
  {
    title: 'Programação Dinâmica',
    url: '#',
  },
  {
    title: 'Algoritmo Guloso',
    url: '#',
  },
  {
    title: 'Transformação de Tabela Hash',
    url: '#',
  },
  {
    title: 'Algoritmo K-Nearest Neighbors',
    url: '#',
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

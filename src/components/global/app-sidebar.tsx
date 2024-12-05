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
    title: 'Recursão',
    url: '#',
  },
  {
    title: 'Algoritmo de Dijkstra',
    url: '#',
  },
  {
    title: 'Ordenação por Quicksort',
    url: '#',
  },
  {
    title: 'Busca em Largura',
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
    title: 'Tabela Hash',
    url: '#',
  },
  {
    title: 'K-Vizinhos Mais Próximos',
    url: '#',
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupLabel>Algoritmos</SidebarGroupLabel>
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

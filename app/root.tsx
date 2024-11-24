import type { LinkDescriptor, LinksFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import { WorkspaceProvider } from './core/.marblism/workspace'
import { UserProvider } from './core/context'
import { TrpcClient } from './core/trpc'
import { DesignSystemProvider } from './designSystem'
import { AnalyticsProvider } from './plugins/analytics/client'

export const meta: MetaFunction = () => {
  return [
    { title: 'ElectroATOM' },
    {
      name: 'description',
      content: 'ElectroATOM',
    },
  ]
}

export const links: LinksFunction = () => {
  const items: LinkDescriptor[] = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css',
    },
  ]

return items
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <DesignSystemProvider>
          <TrpcClient.Provider>
            <AnalyticsProvider>
              <WorkspaceProvider>
                <UserProvider>

{children}
                  
                </UserProvider>
              </WorkspaceProvider>
            </AnalyticsProvider>
          </TrpcClient.Provider>
        </DesignSystemProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

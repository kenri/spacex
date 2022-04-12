import { styled } from '@linaria/react'
import Card from 'components/Card'
import Link from 'components/Link'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { getLaunchSite, getLaunchStatusBySite } from 'store/selectors'

const Tabs = styled.div`
  display: flex;
  margin-bottom: 20px;
`

type Tab = 'bar' | 'pie'

export default function LaunchSiteChart() {
  const launchSite = useSelector(getLaunchSite)
  const launchStatus = useSelector(getLaunchStatusBySite)
  const [tab, setTab] = useState<Tab>('bar')

  const handleChangeTab = (tab: Tab) => () => {
    setTab(tab)
  }

  if (!launchSite) return null

  return (
    <Card title={`${launchSite.name} Data`}>
      <Tabs>
        <Link
          text='Bar'
          selected={tab === 'bar'}
          onClick={handleChangeTab('bar')}
        />

        <Link
          text='Pie'
          selected={tab === 'pie'}
          onClick={handleChangeTab('pie')}
        />
      </Tabs>

      <div style={{ width: 500, height: 500 }}>
        <ResponsiveContainer width='100%' height='100%'>
          {tab === 'bar' ? (
            <BarChart width={250} height={120} data={launchStatus}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Bar dataKey='launches' fill='#335eea' />
            </BarChart>
          ) : (
            <PieChart width={500} height={500}>
              <Tooltip />
              <Pie
                data={launchStatus}
                cx='50%'
                cy='50%'
                labelLine={false}
                outerRadius={80}
                fill='#335eea'
                dataKey='launches'
              >
                {launchStatus.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={['#0088FE', '#00C49F'][index]}
                  />
                ))}
              </Pie>
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

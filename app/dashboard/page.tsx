import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { BarChartComponent } from './_components/bar-chart'
import { BarChartBetter } from './_components/bar-chart-better'

export default async function Dashboard() {


  return (
    <div className='flex flex-col justify-center items-start flex-wrap px-4 pt-4 gap-4'>
      <Card className='w-[20rem]'>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Welcome to BaseBind
          </CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">100</div>
          <p className="text-xs text-muted-foreground">
            Enter your subtitle here
          </p>
        </CardContent>
      </Card>
      <div className='flex flex-wrap gap-2'>
        <BarChartComponent />
        <BarChartBetter />
      </div>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 w-full gap-3'>
        <Card className="">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Latest Projects</CardTitle>
              <CardDescription>
                Recent stories written by BaseBind users
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="/dashboard/projects">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div style={{ maxHeight: '320px', overflowY: 'auto' }}> {/* Adjust maxHeight according to your design */}
              <main className="flex flex-col gap-2 lg:gap-2 h-[300px] w-full">
                <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-xl font-bold tracking-tight">
                      You have no books
                    </h1>
                    <p className="text-sm text-muted-foreground mb-3">
                      Books will show when you start using BaseBind
                    </p>
                  </div>
                </div>
              </main>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

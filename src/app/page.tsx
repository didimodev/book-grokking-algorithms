import { Fragment } from 'react'
import { Card, CardContent, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { algorithms } from '@/constants'

export default function HomePage() {
  return (
    <Fragment>
      <article className="grid grid-cols-3 gap-4 p-4">
        {algorithms.map((algorithm, index) => (
          <Card className="pt-4" key={index}>
            <CardContent>
              <aside className="flex flex-col gap-2 justify-center text-center">
                <CardTitle className="text-xl font-sans">{algorithm.title}</CardTitle>
                <CardDescription className='font-sans'>{algorithm.description}</CardDescription>
              </aside>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Badge>{algorithm.date}</Badge>
            </CardFooter>
          </Card>
        ))}
      </article>
    </Fragment>
  )
}

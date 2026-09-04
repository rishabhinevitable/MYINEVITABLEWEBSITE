import { cn } from '../../lib/utils'
export function Button({className='',variant='default',children,...props}){return <button className={cn('shadcn-button',variant,className)} {...props}>{children}</button>}

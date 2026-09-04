export function Card({className='',children,...props}){return <div className={`shadcn-card ${className}`} {...props}>{children}</div>}
export function CardHeader({className='',children,...props}){return <div className={`shadcn-card-header ${className}`} {...props}>{children}</div>}
export function CardContent({className='',children,...props}){return <div className={`shadcn-card-content ${className}`} {...props}>{children}</div>}

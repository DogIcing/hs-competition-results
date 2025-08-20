interface Props {
    total: number
}

export function Users({ total }: Props) {
    return (
        <div className="stat">
            <p className="stat-number">{total} Users</p>
            <p className="desc">Total unique users</p>
        </div>
    )
}
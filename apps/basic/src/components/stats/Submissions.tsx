interface Props {
    total: number,
    first: Date,
    last: Date
}

export function Submissions({ total, first, last }: Props) {
    return (
        <div className="stat">
            <p className="stat-number">{total} Submissions</p>
            <p className="desc">Over {
                Math.ceil((last.getTime() - first.getTime()) / (1000 * 60 * 60 * 24))
            } days ({first.toLocaleDateString()} to {last.toLocaleDateString()})</p>
        </div>
    )
}
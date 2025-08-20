import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';

interface Props {
    dates: Date[],
    first: Date,
    last: Date
}

const getDaysBetween = function (start: Date, end: Date) {
    const arr = [];
    for (const dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
        arr.push(new Date(dt));
    }
    return arr;
};

function sameDay(d1: Date, d2: Date) {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}

export function SubmissionChart({ dates, first, last }: Props) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const daysBetween = getDaysBetween(first, last);

    return (
        <div className="stat">
            <Line
                data={{
                    labels: daysBetween.map(d => d.toLocaleDateString()),
                    datasets: [
                        {
                            label: 'Submission Count',
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                            data: daysBetween.map(a => dates.filter(b => sameDay(a, b)).length),
                        }
                    ],
                }}
            />
        </div>
    )
}
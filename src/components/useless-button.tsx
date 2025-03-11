'use client'

import { useEffect, useState } from 'react'

import { Button } from '~/components/ui/button'

const clickCountResponses = {
    0: "Wow, you haven't even clicked yet. Impressive restraint.",
    1: "Congratulations! You've mastered the art of clicking. Your parents must be proud.",
    2: 'Two clicks? Is this what passes for entertainment these days?',
    3: 'Three clicks. I can feel the productivity skyrocketing.',
    5: "Five clicks. You're really making a difference in the world.",
    10: 'Ten clicks! Someone get this person a trophy.',
    15: 'Fifteen clicks. Have you considered a career in professional button clicking?',
    20: 'Twenty clicks. Your dedication to meaningless tasks is admirable.',
    25: 'Twenty-five clicks. This is definitely a good use of your time.',
    30: "Thirty clicks. I'm sure there's nothing more important you could be doing.",
    42: 'Forty-two clicks. The answer to life, the universe, and everything... is not this button.',
    50: 'Fifty clicks! Halfway to a hundred and completely wasted moments.',
    69: 'Sixty-nine clicks. Real mature.',
    75: 'Seventy-five clicks. Your finger must be getting tired from all this productivity.',
    100: 'One hundred clicks! Your prize is... absolutely nothing.',
    150: 'One hundred fifty clicks. Have you tried going outside?',
    200: 'Two hundred clicks. This is getting concerning.',
    250: 'Two hundred fifty clicks. Please seek help.',
    500: "Five hundred clicks. I'm not even mad, that's amazing.",
    1000: "A thousand clicks. Congratulations, you've reached the pinnacle of human achievement.",
}

export function UselessButton() {
    const [count, setCount] = useState(0)
    const [response, setResponse] = useState<string | undefined>(undefined)

    useEffect(() => {
        if (count > 0 && clickCountResponses[count as keyof typeof clickCountResponses]) {
            setResponse(clickCountResponses[count as keyof typeof clickCountResponses])
            return
        }

        setTimeout(() => {
            setResponse(clickCountResponses[0])
        }, 60000)
    }, [count])

    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <Button onClick={() => setCount(count + 1)}>
                Button clicked {count} times
            </Button>
            <p className="text-muted-foreground h-10">{response}</p>
        </div>
    )
}

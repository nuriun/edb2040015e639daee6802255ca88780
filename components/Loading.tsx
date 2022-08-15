import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Loading = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url) => url !== router.asPath && setLoading(true);
        const handleComplete = (url) =>
            url === router.asPath && setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    });

    return (
        loading && (
            <div
                style={{
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                }}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    style={{ margin: 'auto' }}
                    width='200'
                    height='200'
                    display='block'
                    preserveAspectRatio='xMidYMid'
                    viewBox='0 0 100 100'
                >
                    <defs>
                        <filter
                            id='ldio-lwmr6aq455-filter'
                            width='300%'
                            height='300%'
                            x='-100%'
                            y='-100%'
                            colorInterpolationFilters='sRGB'
                        >
                            <feGaussianBlur
                                in='SourceGraphic'
                                stdDeviation='2.4'
                            ></feGaussianBlur>
                            <feComponentTransfer result='cutoff'>
                                <feFuncA
                                    tableValues='0 0 0 0 0 0 1 1 1 1 1'
                                    type='table'
                                ></feFuncA>
                            </feComponentTransfer>
                        </filter>
                    </defs>
                    <g
                        filter='url(#ldio-lwmr6aq455-filter)'
                        transform='translate(50 50)'
                    >
                        <g>
                            <circle cx='17' r='5' fill='#1d3f72'>
                                <animate
                                    attributeName='r'
                                    begin='-0.25s'
                                    dur='4s'
                                    keyTimes='0;0.5;1'
                                    repeatCount='indefinite'
                                    values='3.5999999999999996;8.399999999999999;3.5999999999999996'
                                ></animate>
                            </circle>
                            <animateTransform
                                attributeName='transform'
                                begin='0s'
                                dur='4s'
                                keyTimes='0;1'
                                repeatCount='indefinite'
                                type='rotate'
                                values='0;360'
                            ></animateTransform>
                        </g>
                        <g>
                            <circle cx='17' r='5' fill='#5699d2'>
                                <animate
                                    attributeName='r'
                                    begin='-0.20833333333333334s'
                                    dur='2s'
                                    keyTimes='0;0.5;1'
                                    repeatCount='indefinite'
                                    values='3.5999999999999996;8.399999999999999;3.5999999999999996'
                                ></animate>
                            </circle>
                            <animateTransform
                                attributeName='transform'
                                begin='-0.041666666666666664s'
                                dur='2s'
                                keyTimes='0;1'
                                repeatCount='indefinite'
                                type='rotate'
                                values='0;360'
                            ></animateTransform>
                        </g>
                        <g>
                            <circle cx='17' r='5' fill='#d8ebf9'>
                                <animate
                                    attributeName='r'
                                    begin='-0.16666666666666666s'
                                    dur='1.3333333333333333s'
                                    keyTimes='0;0.5;1'
                                    repeatCount='indefinite'
                                    values='3.5999999999999996;8.399999999999999;3.5999999999999996'
                                ></animate>
                            </circle>
                            <animateTransform
                                attributeName='transform'
                                begin='-0.08333333333333333s'
                                dur='1.3333333333333333s'
                                keyTimes='0;1'
                                repeatCount='indefinite'
                                type='rotate'
                                values='0;360'
                            ></animateTransform>
                        </g>
                        <g>
                            <circle cx='17' r='5' fill='#71c2cc'>
                                <animate
                                    attributeName='r'
                                    begin='-0.125s'
                                    dur='1s'
                                    keyTimes='0;0.5;1'
                                    repeatCount='indefinite'
                                    values='3.5999999999999996;8.399999999999999;3.5999999999999996'
                                ></animate>
                            </circle>
                            <animateTransform
                                attributeName='transform'
                                begin='-0.125s'
                                dur='1s'
                                keyTimes='0;1'
                                repeatCount='indefinite'
                                type='rotate'
                                values='0;360'
                            ></animateTransform>
                        </g>
                        <g>
                            <circle cx='17' r='5' fill='#4996a2'>
                                <animate
                                    attributeName='r'
                                    begin='-0.08333333333333333s'
                                    dur='0.8s'
                                    keyTimes='0;0.5;1'
                                    repeatCount='indefinite'
                                    values='3.5999999999999996;8.399999999999999;3.5999999999999996'
                                ></animate>
                            </circle>
                            <animateTransform
                                attributeName='transform'
                                begin='-0.16666666666666666s'
                                dur='0.8s'
                                keyTimes='0;1'
                                repeatCount='indefinite'
                                type='rotate'
                                values='0;360'
                            ></animateTransform>
                        </g>
                        <g>
                            <circle cx='17' r='5' fill='#785471'>
                                <animate
                                    attributeName='r'
                                    begin='-0.041666666666666664s'
                                    dur='0.6666666666666666s'
                                    keyTimes='0;0.5;1'
                                    repeatCount='indefinite'
                                    values='3.5999999999999996;8.399999999999999;3.5999999999999996'
                                ></animate>
                            </circle>
                            <animateTransform
                                attributeName='transform'
                                begin='-0.20833333333333334s'
                                dur='0.6666666666666666s'
                                keyTimes='0;1'
                                repeatCount='indefinite'
                                type='rotate'
                                values='0;360'
                            ></animateTransform>
                        </g>
                    </g>
                </svg>
            </div>
        )
    );
};

export default Loading;

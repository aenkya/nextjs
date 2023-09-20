'use client'
import * as React from 'react';
import styles from 'styles/playground.module.css';
import cn from 'classnames';

export default function Page() {
    return (
        <Playground />
    );
}

function Playground() {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);

    const canvas = React.useRef<HTMLCanvasElement>(null);
    const [ctx, setCtx] = React.useState<CanvasRenderingContext2D | null>(null);

    React.useEffect(() => {
        if (canvas.current) {
            setCtx(canvas.current.getContext('2d'));
        }
    }, [canvas]);

    React.useEffect(() => {
        if (ctx) {
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, 100, 100);
        }
    }, [ctx]);

    return (
        <div className={cn(styles.canvas)}>
            <h1>Playground</h1>
            <canvas ref={canvas} width={100} height={100} />
            <p>Mounted: {mounted ? 'true' : 'false'}</p>
        </div>
    );
}
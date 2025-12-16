// src/components/AntigravityBackground.jsx
import Antigravity from './Antigravity';

const AntigravityBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Antigravity
                count={1000}
                magnetRadius={6}
                ringRadius={3}
                waveSpeed={3}
                waveAmplitude={3}
                particleSize={0.5}
                lerpSpeed={0.2}
                color={'rgba(0, 107, 237, 1)'}
                autoAnimate={false}
                particleVariance={1}
            />
        </div>
    );
};

export default AntigravityBackground;

import React from 'react';
import '../css/AppDescription.css';

export default function AppDescription(): JSX.Element {
    return (
        <div className='app-description'>
            <p>Select an episode below and leave a comment as to why it&apos;s your favorite!</p>
            <br />
            <p>Or simply select an episode to read comments about that particular one</p>
        </div>
    );
}

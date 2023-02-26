import { useState, useEffect } from 'react';
// import { supabase } from '../../client.js';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Auth() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [session, setSession] = useState<any>(null);

    useEffect(() => {
        if (!session) {
            router.push('/Dior');
        }
    }, [session]);

    return (
        <div className='row flex-center flex'>
            <div className='col-6 form-widget'>
                <h1 className='header'>Supabase + Next.js</h1>
                <p className='description'>Sign in via magic link with your email below</p>
                <div>
                    <input
                        className='inputField'
                        type='email'
                        placeholder='Your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                        className='button block'
                        disabled={loading}>
                        <span>{loading ? 'Loading' : 'Send magic link'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

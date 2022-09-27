import { useState, useEffect } from 'react';
import { supabase } from '../../client.js';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Auth() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [session, setSession] = useState(null);

    const handleLogin = async (email) => {
        try {
            setLoading(true);
            const { error } = await supabase.auth.signInWithOtp({ email });
            if (error) throw error;
            alert('Check your email for the login link!');
        } catch (error) {
            console.log(`aye`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let mounted = true;

        async function getInitialSession() {
            const {
                data: { session },
            } = await supabase.auth.getSession();
            console.log(`session`);
            console.log(session);
            // only update the react state if the component is still mounted
            if (mounted) {
                if (session) {
                    console.log(session);
                }
                console.log(session);
            }
        }

        getInitialSession();

        // const { subscription } = supabase.auth.onAuthStateChange(
        //   (_event, session) => {
        //     setSession(session)
        //   }
        // )

        return () => {
            mounted = false;
            // subscription?.unsubscribe()
        };
    }, []);

    useEffect(() => {
        if (session) {
            router.push('/Home');
        }
        if (!session) {
            router.push('/Home');
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
                            handleLogin(email);
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

import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '$styles/Home.module.css';
// REPorts
import Header from 'src/!Sections^/Header/Header';
import Dash from 'src/!Sections^/Dash/Dash';
import Nav from 'src/!Sections^/Nav/Nav';
import Panel from 'src/!Sections^/Panel/Panel';
import Auth from 'src/@components^/Auth';
import styled from 'styled-components';
import { supabase } from '../../client.js';
import { useRouter } from 'next/router';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [session, setSession] = useState<any>(null);
    const router = useRouter();

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
                    setSession(session);
                }
                setIsLoading(false);
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

    // useEffect(() => {
    //     if (session) {
    //         router.push('/Home');
    //     }
    //     if (!session) {
    //         router.push('/Home');
    //     }
    // }, [session]);

    return <Auth />;
}

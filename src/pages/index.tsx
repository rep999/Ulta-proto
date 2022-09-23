import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '$styles/Home.module.css';
// REPorts
import Header from 'src/#Sections^/Header';
import Dash from 'src/#Sections^/Dash';
import Testy from 'src/#Sections^/Testy';
import Nav from 'src/#Sections^/Nav';
import Panel from 'src/#Sections^/Panel/Panel';
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
            // console.log(`session`);
            // console.log(session);
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

    useEffect(() => {
        if (session) {
            router.push('/Home');
        }
        if (!session) {
            router.push('/Home');
        }
    }, [session]);

    return <Auth />;
}

const WebFire_App = styled.div`
    border: 2px solid white;
    height: 100%;
    width: 100%;
    display: block;
`;

const WebFire_App_Shell_Parent = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: #1a1b1c;
`;

const WebFire_App_Shell = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
`;

const WebFire_App_Shell_Content = styled.div`
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
    position: relative;
    border: 2px solid white;
`;

const MainFlexContainer = styled.main`
    display: flex;
    /* flex: 1 1 auto; */
    width: calc(100% - 166px);
    left: 166px;
    overflow: hidden;
    left: 166px;
    position: relative;
    border: 4px solid yellow;
    border-top-left-radius: 12px;
`;
